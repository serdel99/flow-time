const container = require("./src/container");

const app = container.resolve("app");

app.start().catch((e) => {
  console.log(e);
});
