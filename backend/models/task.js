const mongoose = require("mongoose");
const Joi = require("joi");

const subTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLenght: 255,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

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
    subTasks: [subTaskSchema],
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
const SubTask = mongoose.model("SubTask", subTaskSchema);

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
function validateSubTask(data) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
  });

  return schema.validate(data);
}

exports.Task = Task;
exports.SubTask = SubTask;
exports.taskSchema = taskSchema;
exports.validate = validateTask;
exports.validateSubTask = validateSubTask;
