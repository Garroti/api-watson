module.exports = {
    test: {
        client: 'pg',
        version: '10.11',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '123456',
            database: 'tickets_system'
        },
        migrations: {
            directory: 'src/migrations'
        }
    }
}