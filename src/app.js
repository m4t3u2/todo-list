const express = require("express");
const NotFoundError = require("./entities/error/notFoundError");
const authMiddleware = require("./middlewares/auth");
const errorMiddleware = require("./middlewares/error");
const app = express();

app.use(express.json());

app.use(authMiddleware);

app.post("/", (req, res) => {
  console.log("Req > ", req.body);
  throw new NotFoundError("Não encontrado!");
  res.send(req.body);
});

app.use(errorMiddleware);

module.exports = app;
