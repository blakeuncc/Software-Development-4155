const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { app, connectDB } = require('../app');
const Report = require('../models/Report');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await connectDB(uri);
});

afterEach(async () => {
    // Clear the database after each test
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany({});
    }
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

jest.setTimeout(30000); // Optional: Increase timeout for async operations

describe('Crime Routes', () => {
    it('should fetch all crime reports (GET /api/crime-reports)', async () => {
        // Insert a mock crime report
        const report = new Report({
            name: 'John Doe',
            email: 'john.doe@example.com',
            description: 'Burglary reported',
            location: { address: '123 Main St', lat: 35.2271, lng: -80.8431 }, // Realistic lat/lng
            date: new Date(),
        });
        await report.save();

        // Make a GET request
        const res = await request(app).get('/api/crime-reports');
        console.log('GET Response:', res.body); // Debugging
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1); // Check that one report is returned
        expect(res.body[0].description).toBe('Burglary reported'); // Verify description
        expect(res.body[0].name).toBe('John Doe'); // Verify name
        expect(res.body[0].location.address).toBe('123 Main St'); // Verify address
        expect(res.body[0].location.lat).toBe(35.2271); // Verify latitude
        expect(res.body[0].location.lng).toBe(-80.8431); // Verify longitude
    });

    it('should create a new crime report (POST /api/crime-reports)', async () => {
        const newReport = {
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            description: 'Robbery in progress',
            location: { address: '456 Elm St', lat: 35.2271, lng: -80.8431 }, // Realistic lat/lng
        };

        // Make a POST request
        const res = await request(app).post('/api/crime-reports').send(newReport);
        console.log('POST Response:', res.body); // Debugging
        expect(res.statusCode).toEqual(201); // Check response status
        expect(res.body.name).toBe('Jane Doe'); // Verify name
        expect(res.body.description).toBe('Robbery in progress'); // Verify description
        expect(res.body.location.address).toBe('456 Elm St'); // Verify address
        expect(res.body.location.lat).toBe(35.2271); // Verify latitude
        expect(res.body.location.lng).toBe(-80.8431); // Verify longitude

        // Verify the report was saved in the database
        const savedReport = await Report.findOne({ email: 'jane.doe@example.com' });
        expect(savedReport).toBeTruthy();
        expect(savedReport.description).toBe('Robbery in progress');
        expect(savedReport.location.address).toBe('456 Elm St'); // Verify saved address
        expect(savedReport.location.lat).toBe(35.2271); // Verify saved latitude
        expect(savedReport.location.lng).toBe(-80.8431); // Verify saved longitude
    });
});
