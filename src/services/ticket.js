const ValidationError = require('../errors/ValidationError')

module.exports = (app) => {
    const save = async (ticket) => {
        if(!ticket.user_id) throw new ValidationError('Usuario ID é um atributo obrigatorio')
        if(!ticket.description) throw new ValidationError('Descrição é um atributo obrigatorio')
        return app.db('tickets').insert(ticket, '*')
    }

    const findAll = () => {
        return app.db('tickets')
    }

    const find = (word = {}) => {
        return app.db('tickets').where(() => {word.id}).andWhere('description', 'like', `%${word.word}%`)
    }

    return { save, findAll, find }
}