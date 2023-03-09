const { Board } = require("../models/board.model");
const {
  createOne,
  deleteOne,
  updateOne,
  getOne,
  getAll,
} = require("./factory.controller");

const getAllBoards = getAll(Board);
const getBoard = getOne(Board, {
  path: "columns",
  populate: { path: "tasks", populate: { path: "subTasks" } },
});
const createBoard = createOne(Board);
const deleteBoard = deleteOne(Board);
const updateBoard = updateOne(Board);

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
};
