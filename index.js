require('dotenv').config();
const { ServiceBroker } = require('moleculer');

const OwnersService = require('./services/owners.service');
const PetsService = require('./services/pets.service');
const ApiService = require('./services/api.service');

const broker = new ServiceBroker({
  logger: true,
});

broker.createService(ApiService);
broker.createService(OwnersService);
broker.createService(PetsService);

broker.start().then(() => {
  broker.repl();
});