const path = require("path");

module.exports = (controllerUri) => {
  const controllerPath = path.resolve(
    "src/interfaces/http/controllers",
    controllerUri
  );
  const Controller = require(controllerPath);

  return Controller();
};
