const express = require('express');
const router = express.Router();

const { allSubscribers, subscribersName, subscriberById } = require('../controllers/subscriberController')

// Middleware for JSON parsing
router.use(express.json());

// Get all subscribers
router.get('/subscribers', allSubscribers);

// Get subscriber names and subscribed channels
router.get('/subscribers/names', subscribersName);

// Get a subscriber by ID
router.get('/subscribers/:id', subscriberById);

module.exports = router;
