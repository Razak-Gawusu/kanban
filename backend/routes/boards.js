const express = require("express");
const { Board, validate } = require("../models/board");
const { validateId } = require("../helpers/validateIds");

const route = express.Router();

route.get("/", async (req, res) => {
  const board = await Board.find({}).sort("-updatedAt");
  res.status(200).send(board);
});

route.get("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const board = await Board.findById(req.params.id);
  if (!board) return res.status(404).send("task not Found");
  res.status(200).send(board);
});

route.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const board = new Board({
      name: req.body.name,
    });

    await board.save();
    res.status(200).send(board);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

route.patch("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const board = await Board.findById(req.params.id);
  if (!board) return res.status(404).send("task not Found");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  board.name = req.body.name;

  await board.save();

  res.status(200).send(board);
});

route.delete("/:id", async (req, res) => {
  const isValid = validateId(req.params.id);
  if (!isValid) return res.status(404).send("Invalid id");

  const board = await Board.findById(req.params.id);
  if (!board) return res.status(404).send("task not Found");

  const result = await Board.findByIdAndRemove(req.params.id);
  res.status(200).send(result);
});

module.exports = route;
