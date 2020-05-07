// Express imports
const express = require('express'),
    router = express.Router()


const fruit = require('./Fruit/index')

router.use('/fruit', fruit)

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Resource Not Found')
})


module.exports = router