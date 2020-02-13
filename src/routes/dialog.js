const express = require('express')
const AssistantV1 = require('ibm-watson/assistant/v1')
const { IamAuthenticator } = require('ibm-watson/auth')

const watsonAuth = require('../../watson-auth')

const assistant = new AssistantV1({
    authenticator: new IamAuthenticator({ apikey: watsonAuth.apiKey }),
    url: watsonAuth.url,
    version: '2020-02-12',
})

module.exports = (app) => {
    const router = express.Router()
    router.post('/', (req, res) => {
       const { message, context, user_id } = req.body
        assistant.message({
            workspaceId: watsonAuth.skillID,
            context: context,
            input: {'text': message}
        })
        .then(response => {
            const ticket = {
                user_id: user_id,
                description: message
            }
            if(response.result.intents.length > 0) {
                if(response.result.intents[0].intent == 'registra_ticket'){
                    app.services.ticket.save(ticket)
                        .then((result) => {
                            if(result.error) return res.status(400).json(result)
                            return res.status(201).json({ response: response })
                        })
                        .catch(err => next(err))
                } else {
                    res.status(200).json({ response: response })
                }
            } else {
                res.status(200).json({ response: response })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        });
    })

    return router
}