const express = require('express')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const variables = require('../config/variables')
const ValidationError = require('../errors/ValidationError')

module.exports = (app) => {
    const router = express.Router()

    router.post('/signin', (req, res, next) => {
        console.log(req.body)
        app.services.user.find({mail:req.body.mail})
            .then((user) => {
                if(!user) throw new ValidationError('Usuario ou senha invalida')
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const payload = {
                        id: user.id,
                        name: user.name,
                        mail: user.mail
                    }
                    const token = jwt.encode(payload, variables.Security.secretKey)
                    payload.token = token
                    res.status(200).json(payload)
                } else throw new ValidationError('Usuario ou senha invalida')
            })
            .catch(err => next(err))
    })

    router.post('/signup', async (req, res, next) => {
        try {
            const result = await app.services.user.save(req.body)
            res.status(201).json(result[0])
        } catch (err) {        
            next(err)
        }
    })

    return router
}