const { Router } = require("express");

module.exports = () => {
  const router = Router();
  router.get("/", (req, res) => {
    console.log("Works");
    res.send("Ok");
  });
  return router;
};
