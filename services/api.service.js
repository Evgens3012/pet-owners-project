const ApiGateway = require('moleculer-web');

module.exports = {
  name: 'api',
  mixins: [ApiGateway],
  settings: {
    port: process.env.PORT || 3000,
    routes: [
      {
        path: '/api',
        aliases: {
          'GET owners': 'owners.list',
          'POST owners': 'owners.create',
          'GET owners/:id': 'owners.get',
          'PUT owners/:id': 'owners.update',
          'DELETE owners/:id': 'owners.remove',
          'GET owners/:id/pets': 'owners.getWithPets',

          'GET pets': 'pets.list',
          'POST pets': 'pets.create',
          'GET pets/:id': 'pets.get',
          'PUT pets/:id': 'pets.update',
          'DELETE pets/:id': 'pets.remove',
          'GET pets/owner/:owner_id': 'pets.findByOwner',
        },
      },
    ],
  },
};