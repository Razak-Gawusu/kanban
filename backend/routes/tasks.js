const express = require("express");
const debug = require("debug")("app:dev");
const { Task, validate } = require("../models/task");
const { Column } = require("../models/column");
const { Board } = require("../models/board");
const { validateId } = require("../helpers/validateIds");

const route = express.Router();

route.get("/", async (req, res) => {
  const task = await Task.find({}).sort("-updatedAt");
  res.status(200).send(task);
});

route.get("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).send("task not Found");
  res.status(200).send(task);
});

route.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const board = await Board.findById(req.body.boardId);
  const column = await Column.findById(req.body.columnId);

  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      subTasks: req.body.subTasks,
    });
    await task.save();

    // TODO: use 2 way commit
    column.tasks.push(task);
    await column.save();
    board.columns.push(column);
    await board.save();

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

route.patch("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).send("task not Found");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const board = await Board.findById(req.body.boardId);
  const column = await Column.findOne(req.body.columnId);

  task.title = req.body.title;
  task.description = req.body.description;
  task.status = req.body.status;
  task.subTasks = req.body.subTasks;

  await task.save();

  // TODO: use 2 way commit
  column.tasks.push(task);
  await column.save();
  board.columns.push(column);
  await board.save();

  res.status(200).send(task);
});

route.delete("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).send("task not Found");

  const result = await Task.findByIdAndRemove(req.params.id);
  res.status(200).send(result);
});

module.exports = route;
