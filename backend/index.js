require("dotenv").config();
require("express-async-errors");
const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const debugServer = require("debug")("app:startup");
const { mongoDB } = require("./config/configDB");
const boards = require("./routes/boards.route");
const columns = require("./routes/columns.route");
const tasks = require("./routes/Tasks.route");
const subTasks = require("./routes/subTasks.route");
const error = require("./middlewares/errors");
const AppError = require("./utils/error.util");

debugServer(config.get("name"));
mongoDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/kanban/api/v1/boards", boards);
app.use("/kanban/api/v1/columns", columns);
app.use("/kanban/api/v1/tasks", tasks);
app.use("/kanban/api/v1/subTasks", subTasks);
app.all("*", (req, res, next) => {
  const err = new AppError(
    `Can not find ${req.originalUrl} on this server`,
    404
  );
  next(err);
});
app.use(error);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  debugServer(`successfully running server on PORT: ${PORT}`)
);
