const { Service } = require('moleculer');
const Owner = require('../models/Owner');

class OwnersService extends Service {
  constructor(broker) {
    super(broker);

    this.parseServiceSchema({
      name: 'owners',
      actions: {
        create: {
          params: {
            name: 'string',
            email: 'string',
            phone: { type: 'string', optional: true },
          },
          async handler(ctx) {
            return Owner.create(ctx.params);
          },
        },
        list: {
          async handler() {
            return Owner.findAll();
          },
        },
        get: {
          params: {
            id: 'string',
          },
          async handler(ctx) {
            return Owner.findById(ctx.params.id);
          },
        },
        update: {
          params: {
            id: 'string',
            name: { type: 'string', optional: true },
            email: { type: 'string', optional: true },
            phone: { type: 'string', optional: true },
          },
          async handler(ctx) {
            return Owner.update(ctx.params.id, ctx.params);
          },
        },
        remove: {
          params: {
            id: 'string',
          },
          async handler(ctx) {
            return Owner.delete(ctx.params.id);
          },
        },
        getWithPets: {
          params: {
            id: 'string',
          },
          async handler(ctx) {
            return Owner.findWithPets(ctx.params.id);
          },
        },
      },
    });
  }
}

module.exports = OwnersService;