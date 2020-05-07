const Fruit = require('../../Models/Mongoose-Models/Fruit')


// Express imports
const express = require('express'),
    router = express.Router()

router.get('/', async (req, res) => {
    try {
        const fruit = await Fruit.find({})
        if (fruit.length > 0) {
            res.status(200).send(fruit)
        }
        else {
            res.status(404).send('No fruits Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error')
    }
})
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const fruit = await Fruit.findById(id)
        if (fruit) {
            res.status(200).send(fruit)
        }
        else {
            res.status(404).send('Fruit Not Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error')
    }
})
router.delete('/:id', async (req, res) => {
    try {
        await Fruit.findByIdAndDelete(req.params.id)
        res.status(200).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
})
router.post('/', async (req, res) => {
    const query = await Fruit.findOne({ Name: req.body.Name })

    if (query != null) {
        return res.status(202).send('fruta ja cadastrada')
    }
    else {
        try {
            const fruit = new Fruit(req.body)
            await fruit.save()
            const queryFruit = await Fruit.find({ Name: req.body.Name })
            console.log(queryFruit)
            await Fruit.findByIdAndUpdate(queryFruit._id, {
                $set: {
                    Amount: 1
                }
            }, { new: true })
            res.status(201).send('Success')
        }
        catch (err) {
            return res.status(500).send('Error' + err)
        }
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const fruit = req.body
        await Fruit.findByIdAndUpdate(id, {
            $set: fruit
        }, { new: true })
        return await res.status(200).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error')
    }
})

module.exports = router