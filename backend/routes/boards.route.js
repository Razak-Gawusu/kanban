const express = require("express");
const {
  getAllBoards,
  createBoard,
  getBoard,
  deleteBoard,
  updateBoard,
} = require("../controllers/board.controller");
const router = express.Router();

router.route("/").get(getAllBoards).post(createBoard);
router.route("/:id").get(getBoard).delete(deleteBoard).patch(updateBoard);

module.exports = router;
