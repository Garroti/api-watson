const express = require('express')

module.exports = (app) => {
    app.use('/auth', app.routes.auth)

    const protectedRouter = express.Router()

    protectedRouter.use('/users', app.routes.users)
    protectedRouter.use('/tickets', app.routes.tickets)
    protectedRouter.use('/dialog', app.routes.dialog)

    app.use('/api', app.config.passport.authenticate(), protectedRouter)
}