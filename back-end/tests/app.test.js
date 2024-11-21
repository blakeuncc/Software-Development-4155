// const request = require('supertest');
// const app = require('../app'); // Ensure this points to where your app is exported

// let server;

// beforeAll((done) => {
//     server = app.listen(5000, () => {
//         console.log("Server running on http://localhost:5000");
//         done();
//     });
// });

// afterAll((done) => {
//     server.close(done); // Ensure server closes after tests
// });

// jest.setTimeout(30000); // 30 seconds timeout

// describe('GET /api/endpoint', () => {
//     it('should return a 200 status and a JSON response', async () => {
//         const res = await request(app).get('/api/endpoint');
//         expect(res.statusCode).toEqual(200);
//         expect(res.body.message).toBe('Hello from the back-end!');
//     });
// });

const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { app, connectDB } = require('../app');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await connectDB(uri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

jest.setTimeout(30000);

describe('App Initialization', () => {
    it('should return a welcome message on GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe("Welcome! The server is running, but there's no content here.");
    });

    it('should return 404 for an unknown route', async () => {
        const res = await request(app).get('/nonexistent-route');
        expect(res.statusCode).toEqual(404);
    });
});

