
exports.up = (knex) => {
    return knex.schema.createTable('tickets', (t) => {
        t.increments('id').primary()
        t.string('description').notNull()
        t.integer('user_id')
            .references('id')
            .inTable('users')
            .notNull()
    })
};

exports.down = (knex) => {
    return knex.schema.dropTable('tickets')
};
