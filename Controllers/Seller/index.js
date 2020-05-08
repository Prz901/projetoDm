const Seller = require('../../Models/Mongoose-Models/Seller')


// Express imports
const express = require('express'),
    router = express.Router()

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const seller = await Seller.findById(id)
        if (seller) {
            res.status(200).send(seller)
        }
        else {
            res.status(404).send('Seller Not Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error ' + err)
    }
})

router.post('/', async (req, res) => {
    
    try {
        const seller = new Seller(req.body)
        const serverMessage = await seller.save()
        return res.status(201).send('Ok' + serverMessage)
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
})

module.exports = router