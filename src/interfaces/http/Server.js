const express = require("express");

class Server {
  constructor({ router }) {
    this.app = express();
    this.app.disable("x-powered-by");
    this.app.use(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      this.app.listen(8000, () => {
        console.log("App running");
        resolve();
      });
    });
  }
}

module.exports = Server;
