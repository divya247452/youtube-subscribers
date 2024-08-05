const mongoose = require('mongoose')

const youtubeSubscriber = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 3
        },
        subscribedChannel:{
            type: String,
            required: true,
            trim: true
        },
        subscribedDate: {
            type: Date,
            required: true,
            default: Date.now
        }
    })

module.exports = mongoose.model("youtubeSubscriber", youtubeSubscriber, "subscribers")