/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('species').notNullable();
    table.integer('age');
    table
      .integer('owner_id')
      .unsigned()
      .references('id')
      .inTable('owners')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
