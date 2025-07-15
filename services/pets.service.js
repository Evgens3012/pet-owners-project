const { Service } = require('moleculer');
const Pet = require('../models/Pet');

class PetsService extends Service {
  constructor(broker) {
    super(broker);

    this.parseServiceSchema({
      name: 'pets',
      actions: {
        create: {
          params: {
            name: 'string',
            species: 'string',
            age: { type: 'number', optional: true },
            owner_id: 'number',
          },
          async handler(ctx) {
            return Pet.create(ctx.params);
          },
        },
        list: {
          async handler() {
            return Pet.findAll();
          },
        },
        get: {
          params: {
            id: 'string',
          },
          async handler(ctx) {
            return Pet.findById(ctx.params.id);
          },
        },
        update: {
          params: {
            id: 'string',
            name: { type: 'string', optional: true },
            species: { type: 'string', optional: true },
            age: { type: 'number', optional: true },
            owner_id: { type: 'number', optional: true },
          },
          async handler(ctx) {
            return Pet.update(ctx.params.id, ctx.params);
          },
        },
        remove: {
          params: {
            id: 'string',
          },
          async handler(ctx) {
            return Pet.delete(ctx.params.id);
          },
        },
        findByOwner: {
          params: {
            owner_id: 'string',
          },
          async handler(ctx) {
            return Pet.findByOwner(ctx.params.owner_id);
          },
        },
      },
    });
  }
}

module.exports = PetsService;