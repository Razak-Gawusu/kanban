const express = require("express");
const { Column, validate } = require("../models/column");
const { Board } = require("../models/board");
const { validateId } = require("../helpers/validateIds");

const route = express.Router();

route.get("/", async (req, res) => {
  const column = await Column.find({}).sort("-updatedAt");
  res.status(200).send(column);
});

route.get("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const column = await Column.findById(req.params.id);
  if (!column) return res.status(404).send("task not Found");
  res.status(200).send(column);
});

route.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const board = await Board.findById(req.body.boardId);

  try {
    const column = new Column({
      name: req.body.name,
    });

    board.columns.push(column);
    await column.save();
    await board.save();

    res.status(200).send(column);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

route.patch("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const column = await Column.findById(req.params.id);
  if (!column) return res.status(404).send("task not Found");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const board = await Board.findById(req.body.boardId);
  const columnBoard = board.columns.id(req.params.id);

  columnBoard.name = req.body.name;
  column.name = req.body.name;

  await board.save();
  await column.save();

  res.status(200).send(column);
});

route.delete("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const column = await Column.findById(req.params.id);
  if (!column) return res.status(404).send("task not Found");

  const result = await Column.findByIdAndRemove(req.params.id);
  res.status(200).send(result);
});

module.exports = route;
