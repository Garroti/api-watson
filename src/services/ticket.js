const ValidationError = require('../errors/ValidationError')

module.exports = (app) => {
    const save = async (ticket) => {
        if(!ticket.name) throw new ValidationError('Nome é um atributo obrigatorio')
        if(!ticket.description) throw new ValidationError('Descrição é um atributo obrigatorio')

        return app.db('tickets').insert(ticket, '*')
    }

    const findAll = () => {
        return app.db('tickets')
    }

    const find = (word = {}) => {
        console.log(word)
        return app.db('tickets').where('description', 'like', `%${word.word}%`)
       // return app.db('tickets').where(word.id).andWhere('description', 'like', `%${word.word}%`)
    }

    return { save, findAll, find }
}