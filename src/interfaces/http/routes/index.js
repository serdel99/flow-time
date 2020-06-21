const { Router } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const controller = require("../utils/createController");

module.exports = () => {
  const router = Router();
  const apiRouter = Router();
  apiRouter.use(cors()).use(bodyParser.json());
  apiRouter.use("/test", controller("test"));

  router.use("/api", apiRouter);

  return router;
};
