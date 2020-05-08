const mongoose = require('mongoose')

module.exports = mongoose.model('Seller', {
    Name: {
        type: String,
        required: true,
    },
    Email :{
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    },
    Money:{
        type:Number,
        default: 0,
    },
    Store:{
        type: Object,
        default:{},
    }
})