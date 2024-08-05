const youtubeSubscriber = require('../models/subscriberSchema');

// @desc   handler fn to get all the subscribers
// @route  /subscribers
const allSubscribers = async (req, res) => {
    try {
        const subscribers = await youtubeSubscriber.find({});
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(400).json({ message:  error.message  });
    }
};

// @desc   handler fn to get name & subscribed channel f all the subscribers
// @route  '/subscribers/names'
const subscribersName = async (req, res) => {
    try {
        const subscribers = await youtubeSubscriber.find({}, { name: 1, subscribedChannel: 1, _id: 0 });
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(400).json({ message:  error.message  });
    }
};

// @desc   handler fn to get the subscriber by ID
// @route  /subscribers/:id
const subscriberById = async (req, res) => {
    const { id } = req.params;
    try {
        const subscriber = await youtubeSubscriber.findById(id); 
        if (!subscriber) {
            // Subscriber not found, send a 404 status
            return res.status(404).json({ message: 'Subscriber not found' });
        } else {
            // Subscriber found, send a 200 status with subscriber data
            return res.status(200).json(subscriber);
        }
        
    } catch (error) {
        // Handle any errors that occur
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    allSubscribers,
    subscribersName,
    subscriberById
}