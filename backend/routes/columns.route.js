const express = require("express");
const {
  getAllColumns,
  createColumn,
  getColumn,
  deleteColumn,
  updateColumn,
} = require("../controllers/column.controller");
const router = express.Router();

router.route("/").get(getAllColumns).post(createColumn);
router.route("/:id").get(getColumn).delete(deleteColumn).patch(updateColumn);

module.exports = router;
