const mongoose = require("mongoose");
const Joi = require("joi");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLenght: 255,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      minLength: 3,
      maxLenght: 50,
      required: true,
    },
    subTasks: Array,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

function validateTask(data) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string(),
    status: Joi.string().min(3).max(50).required(),
    subTasks: Joi.array(),
    columnId: Joi.objectId().required(),
    boardId: Joi.objectId().required(),
  });

  return schema.validate(data);
}

exports.Task = Task;
exports.taskSchema = taskSchema;
exports.validate = validateTask;
