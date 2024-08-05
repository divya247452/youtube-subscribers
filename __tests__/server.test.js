const request = require('supertest');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('../routes/routes');
const youtubeSubscriber = require('../models/subscriberSchema');

// Middleware for JSON parsing
app.use(express.json());
app.use('/api', router);

// Connect to a mock MongoDB server
beforeAll(async () => {
    const url = `mongodb://127.0.0.1/youtube_subscribers_test_db`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Disconnect from the mock MongoDB server
afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('GET /api/subscribers', () => {
    it('should return all subscribers', async () => {
        const subscribers = [
            { name: 'John Doe', subscribedChannel: 'Tech Channel' },
            { name: 'Jane Doe', subscribedChannel: 'Cooking Channel' }
        ];
        await youtubeSubscriber.insertMany(subscribers);

        const res = await request(app).get('/api/subscribers');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(2);
        expect(res.body[0]).toHaveProperty('name', 'John Doe');
        expect(res.body[1]).toHaveProperty('name', 'Jane Doe');
    });
});

describe('GET /api/subscribers/names', () => {
    it('should return subscriber names and channels', async () => {
        const res = await request(app).get('/api/subscribers/names');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(2);
        expect(res.body[0]).toHaveProperty('name', 'John Doe');
        expect(res.body[0]).toHaveProperty('subscribedChannel', 'Tech Channel');
        expect(res.body[1]).toHaveProperty('name', 'Jane Doe');
        expect(res.body[1]).toHaveProperty('subscribedChannel', 'Cooking Channel');
    });
});

describe('GET /api/subscribers/:id', () => {
    it('should return a subscriber by ID', async () => {
        const subscriber = new youtubeSubscriber({ name: 'Sam Smith', subscribedChannel: 'Music Channel' });
        await subscriber.save();

        const res = await request(app).get(`/api/subscribers/${subscriber._id}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name', 'Sam Smith');
        expect(res.body).toHaveProperty('subscribedChannel', 'Music Channel');
    });

    it('should return 404 if subscriber not found', async () => {
        const res = await request(app).get('/api/subscribers/invalidID');
        expect(res.status).toBe(400); 
    });
});

describe('Invalid Endpoints', () => {
    it('should return 404 for invalid endpoint', async () => {
        const res = await request(app).get('/api/invalidEndpoint');
        expect(res.status).toBe(404);
    });
});
