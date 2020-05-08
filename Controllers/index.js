// Express imports
const express = require('express'),
    router = express.Router()

const Customer = require('./customer')
const Seller = require('./seller')
const Auth = require('./auth')

router.use('/api/customer', Customer)
router.use('/api/seller', Seller)
router.use('/api/auth', Auth)


// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Resource Not Found')
})


module.exports = router