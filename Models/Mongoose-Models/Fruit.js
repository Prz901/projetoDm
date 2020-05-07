const mongoose = require('mongoose')

module.exports = mongoose.model('Fruit', {
    Name: {
        type: String,
        required: true
    },
    Price :{
        type: String,
        required: true
    },
    Amount:{
        type: Number,
        default: 0
    }
})

