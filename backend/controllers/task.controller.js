const { Task } = require("../models/task.model");
const {
  createOne,
  deleteOne,
  updateOne,
  getOne,
  getAll,
} = require("./factory.controller");

const getAllTasks = getAll(Task);
const getTask = getOne(Task, { path: "subTasks column" });
const createTask = createOne(Task);
const deleteTask = deleteOne(Task);
const updateTask = updateOne(Task);

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
