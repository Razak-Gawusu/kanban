const { Column } = require("../models/column.model");
const {
  createOne,
  deleteOne,
  updateOne,
  getOne,
  getAll,
} = require("./factory.controller");

const getAllColumns = getAll(Column);
const getColumn = getOne(Column, {
  path: "tasks",
  populate: { path: "subTasks" },
});
const createColumn = createOne(Column);
const deleteColumn = deleteOne(Column);
const updateColumn = updateOne(Column);

module.exports = {
  getAllColumns,
  getColumn,
  createColumn,
  deleteColumn,
  updateColumn,
};
