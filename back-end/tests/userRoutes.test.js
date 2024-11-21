const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const { app, connectDB } = require('../app');
const User = require('../models/User');

const JWT_SECRET = 'c45892c8b38d6f209e7eeb478dcbf9a4d150287b9a72634da79ddc7e2c285e7b9fd08be2ee9cfc9aac4f95f80e485b72a653f8912f0b9af952f9a216c6ba7d52'; // Same as in your userController.js

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await connectDB(uri);
});

afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany({});
    }
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

jest.setTimeout(30000);

describe('User Routes', () => {
    it('should register a new user (POST /users/register)', async () => {
        const newUser = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
            password: 'Password123!',
            location: 'Charlotte, NC',
            notificationPreferences: {
                weather: true,
                traffic: false,
                publicSafety: true,
            },
            termsAccepted: true,
        };

        const res = await request(app).post('/users/register').send(newUser);
        console.log('Register Response:', res.body);
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe('User registered successfully!');

        const savedUser = await User.findOne({ email: 'john.doe@example.com' });
        expect(savedUser).toBeTruthy();
        expect(savedUser.firstName).toBe('John');
        expect(savedUser.notificationPreferences.weather).toBe(true);

        const isPasswordMatch = await savedUser.comparePassword('Password123!');
        expect(isPasswordMatch).toBe(true);
    });

    it('should login an existing user (POST /users/login)', async () => {
        // Save a user directly without manually hashing the password
        const user = new User({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'Password123!', 
            location: 'Charlotte, NC',
            termsAccepted: true,
        });
        await user.save(); 

        // Login request
        const loginDetails = {
            email: 'john.doe@example.com',
            password: 'Password123!', 
        };

        const res = await request(app).post('/users/login').send(loginDetails);
        console.log('Login Response:', res.body);

        // Assertions
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Login successful');
        expect(res.body.token).toBeTruthy(); 
        expect(res.body.user).toHaveProperty('id');
        expect(res.body.user.email).toBe('john.doe@example.com');

        // Decode and verify the token
        const jwt = require('jsonwebtoken');
        const decoded = jwt.verify(res.body.token, JWT_SECRET);
        expect(decoded.id).toBe(user._id.toString());
        expect(decoded.email).toBe(user.email);
    });


    it('should fail login with incorrect credentials (POST /users/login)', async () => {
        // Save a user with a hashed password
        const hashedPassword = await bcrypt.hash('Password123!', 10);
        const user = new User({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: hashedPassword,
            location: 'Charlotte, NC',
            termsAccepted: true,
        });
        await user.save();

        // Incorrect login details
        const loginDetails = {
            email: 'john.doe@example.com',
            password: 'WrongPassword!',
        };

        const res = await request(app).post('/users/login').send(loginDetails);
        console.log('Failed Login Response:', res.body);

        // Assertions
        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toBe('Invalid email or password');
    });
});
