const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const app = express();
const morgan = require("morgan");

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init DB
require("./database/init.mongodb");
// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello Framework Express";
  return res
    .status(200)
    .json({
      message: "Welcome to Express",
      metadata: strCompress.repeat(100000),
    });
});
// handling error
module.exports = app;
