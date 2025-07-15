const knex = require('knex')(require('../knexfile').development);

class Owner {
  static async create({ name, email, phone }) {
    const [owner] = await knex('owners')
      .insert({
        name,
        email,
        phone,
      })
      .returning('*');
    return owner;
  }

  static async findAll() {
    return await knex('owners').select('*');
  }

  static async findById(id) {
    return await knex('owners').where({ id }).first();
  }

  static async update(id, { name, email, phone }) {
    const [owner] = await knex('owners')
      .where({ id })
      .update({
        name,
        email,
        phone,
        updated_at: knex.fn.now(),
      })
      .returning('*');
    return owner;
  }

  static async delete(id) {
    return await knex('owners').where({ id }).del();
  }

  static async findWithPets(id) {
    const owner = await knex('owners').where({ id }).first();
    if (!owner) return null;

    const pets = await knex('pets').where({ owner_id: id });
    return { ...owner, pets };
  }
}

module.exports = Owner;