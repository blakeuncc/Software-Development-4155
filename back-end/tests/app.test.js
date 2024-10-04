const request = require('supertest');
const app = require('../app'); // Ensure this points to where your app is exported

let server;

beforeAll((done) => {
    server = app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
        done();
    });
});

afterAll((done) => {
    server.close(done); // Ensure server closes after tests
});

jest.setTimeout(30000); // 30 seconds timeout

describe('GET /api/endpoint', () => {
    it('should return a 200 status and a JSON response', async () => {
        const res = await request(app).get('/api/endpoint');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Hello from the back-end!');
    });
});
