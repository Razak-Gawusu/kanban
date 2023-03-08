const { SubTask } = require("../models/subTask.model");
const {
  createOne,
  deleteOne,
  updateOne,
  getOne,
  getAll,
} = require("./factory.controller");

const getAllSubTasks = getAll(SubTask);
const getSubTask = getOne(SubTask);
const createSubTask = createOne(SubTask);
const deleteSubTask = deleteOne(SubTask);
const updateSubTask = updateOne(SubTask);

module.exports = {
  getAllSubTasks,
  getSubTask,
  createSubTask,
  deleteSubTask,
  updateSubTask,
};
