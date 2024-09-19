const request = require('supertest');
const app = require('../back-end/app');

describe('GET /api/endpoint', () => {
    it('should return a 200 status and a JSON response', async () => {
        const res = await request(app).get('/api/endpoint');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Hello from the back-end!');
    });
});