const { createContainer, asValue, asFunction, asClass } = require("awilix");

//App Start

const StartUp = require("./startUp");
const Server = require("./interfaces/http/Server");
const Router = require("./interfaces/http/routes");

const container = createContainer();

container.register({
  app: asClass(StartUp).singleton(),
  server: asClass(Server).singleton(),
  router: asFunction(Router).singleton(),
});

module.exports = container;
