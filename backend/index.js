const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const debugServer = require("debug")("app:startup");
const { mongoDB } = require("./config/configDB");
const tasks = require("./routes/tasks");
const columns = require("./routes/columns");
const boards = require("./routes/boards");

debugServer(config.get("name"));
mongoDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/kanban/api/v1/tasks", tasks);
app.use("/kanban/api/v1/columns", columns);
app.use("/kanban/api/v1/boards", boards);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  debugServer(`successfully running server on PORT: ${PORT}`)
);
