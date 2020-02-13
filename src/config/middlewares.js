const bodyParser = require('body-parser')
const knexLogger = require('knex-logger')
const cors = require('cors')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use(knexLogger(app.db))
}

