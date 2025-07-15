const knex = require('knex')(require('../knexfile').development);

class Pet {
  static async create({ name, species, age, owner_id }) {
    const [pet] = await knex('pets')
      .insert({
        name,
        species,
        age,
        owner_id,
      })
      .returning('*');
    return pet;
  }

  static async findAll() {
    return await knex('pets').select('*');
  }

  static async findById(id) {
    return await knex('pets').where({ id }).first();
  }

  static async update(id, { name, species, age, owner_id }) {
    const [pet] = await knex('pets')
      .where({ id })
      .update({
        name,
        species,
        age,
        owner_id,
        updated_at: knex.fn.now(),
      })
      .returning('*');
    return pet;
  }

  static async delete(id) {
    return await knex('pets').where({ id }).del();
  }

  static async findByOwner(owner_id) {
    return await knex('pets').where({ owner_id });
  }
}

module.exports = Pet;