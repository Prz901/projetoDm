const Customer = require('../../Models/Mongoose-Models/Customer')
const Seller = require('../../Models/Mongoose-Models/Seller')
const jwt = require('jsonwebtoken')

const signToken = (data, expires) => {
    return jwt.sign(data, process.env.SECRET, { expiresIn: expires })
}

// Express imports
const express = require('express'),
    router = express.Router()

const validTypes = ['customer', 'seller']

router.post('/', async (req, res) => {
    const user = req.body
    const type = req.header('Type')
    
    const actions = {
        customer: async (Email, Password) => {
            const customer = await Customer.find({ Email: Email, Password: Password })
            // return customer.length > 0 ? 'Achei' : 'Nao achei'
            if (customer.length > 0) {
               return res.status(202).send({
                   message: 'ok',
                   token: signToken({Email}, 1000)
               })
            } else {
                return res.status(404).send('Not Found')
            }
        },
        seller: async (Email, Password) => {
            const seller = await Seller.find({ Email: Email, Password: Password })
            // return seller.length > 0 ? 'Achei' : 'Nao achei'
            if (seller.length > 0) {
                return res.status(202).send({
                    message: 'ok',
                    token: signToken({Email}, 1000)
                })
             } else {
                 return res.status(404).send('Not Found')
             }
        },
    }

    if (validTypes.includes(type)) {
        const { Email, Password } = req.body
        if (!Email || !Password) return res.status(400).send('Must provide email or password')
        return await actions[type](Email, Password)
    }
    else {
        return res.status(400).send('Must Provide a valid type')
    }

})

module.exports = router