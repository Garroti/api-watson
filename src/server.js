const variables = require('./config/variables');

const app = require('./app')

app.listen(variables.Api.port, () => {
    console.info(`Servidor rodando na porta 3001`);
})
