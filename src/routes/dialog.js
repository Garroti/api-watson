const express = require('express')
// const AssistantV1 = require('ibm-watson/assistant/v1')
// const { IamAuthenticator } = require('ibm-watson/auth')

// const watsonAuth = require('../config/watson-auth')

// const assistant = new AssistantV1({
//     authenticator: new IamAuthenticator({ apikey: watsonAuth.apiKey }),
//     url: watsonAuth.url,
//     version: '2020-02-12',
// })

module.exports = (app) => {
    const router = express.Router()

    app.post('/', (req, res) => {
        console.log(req.body)
       // const { message, context } = req.body
        res.status(200).json({ response: req.body })
        // assistant.message({
        //     workspaceId: watsonAuth.skillID,
        //     context: context,
        //     input: {'text': message}
        // })
        // .then(response => {
        //     console.log(response)
        //     // if(response.result.intents[0] && response.result.intents[0].intent == 'registra_ticket'){
        //     //     response.result.output.text.forEach((value, key) => {
        //     //         response.result.output.text[key] = value.replace('{ tempo_entrega }', tempo_de_entrega)
        //     //         console.log(response.result.output.text[key])
        //     //         const context = response.result.context
        //     //         console.log(context)
    
        //     //         if(context.troco && context.quantidade && context.pizzas) {
        //     //             const valor = context.quantidade * sabores[context.pizzas].valor
        //     //             const troco = context.troco - valor
        //     //             response.result.output.text[key] = value.replace('{ valor }', valor + ' reais, e ' + troco + ' de troco')
    
        //     //             if(troco < 0) {
        //     //                 response.result.output.text[key] = 'Eu não posso mandar esse pedido, voce não tem dinheiro suficiente'
        //     //             }
        //     //         }
        //     //     })
        //     // }
        //     res.status(200).json({ response: response })
        // })
        // .catch(err => {
        //     res.status(400).json({ error: err })
        // });
    })

    return router
}