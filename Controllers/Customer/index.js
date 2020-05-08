const Customer = require('../../Models/Mongoose-Models/Customer')


// Express imports
const express = require('express'),
    router = express.Router()

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const customer = await Customer.findById(id)
        if (customer) {
            res.status(200).send(customer)
        }
        else {
            res.status(404).send('Customer Not Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error ' + err)
    }
})

router.post('/', async (req, res) => {
    
    try {
        const customer = new Customer(req.body)
        const serverMessage = await customer.save()
        return res.status(201).send('Ok'+serverMessage)
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
})

module.exports = router