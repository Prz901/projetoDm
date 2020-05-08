const mongoose = require('mongoose')

module.exports = mongoose.model('Customer', {
    Name: {
        type: String,
        required: true,
    },
    Email :{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true,
    },
    PurchaseHistory:{
        type: Array,
        default: [],
    }
})