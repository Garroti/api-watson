const express = require('express')

module.exports = (app) => {
    const router = express.Router()

    router.post('/', (req, res, next) => {
        app.services.ticket.save(req.body)
            .then((result) => {
                if(result.error) return res.status(400).json(result)
                return res.status(201).json(result[0])
            })
            .catch(err => next(err))
    })

    router.get('/', (req, res, next) => {
        app.services.ticket.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => next(err))
    })

    router.get('/:id/:word', (req, res, next) => {
        app.services.ticket.find({word: req.params.word, id: req.params.id})
            .then(result => res.status(200).json(result))
            .catch(err => next(err))
    })

    return router
}