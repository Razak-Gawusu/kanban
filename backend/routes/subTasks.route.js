const express = require("express");
const {
  getAllSubTasks,
  createSubTask,
  getSubTask,
  deleteSubTask,
  updateSubTask,
} = require("../controllers/subTask.controller");
const router = express.Router();

router.route("/").get(getAllSubTasks).post(createSubTask);
router.route("/:id").get(getSubTask).delete(deleteSubTask).patch(updateSubTask);

module.exports = router;
