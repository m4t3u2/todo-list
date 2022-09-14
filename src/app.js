const authMiddleware = require("./middlewares/auth");
const errorMiddleware = require("./middlewares/error");

const express = require("express");
const app = express();

const idexRoute = require("./routers/index");
const todoRoute = require("./routers/todo");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(authMiddleware);

app.use("/", idexRoute);

app.use("/todos", todoRoute);

app.use(errorMiddleware);

module.exports = app;
