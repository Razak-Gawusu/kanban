const { boolean } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const subTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLenght: 50,
    trim: true,
    unique: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
    required: true,
  },
});

const SubTask = mongoose.model("SubTask", subTaskSchema);
const validate = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
  });
  return schema.validate(data);
};

module.exports = {
  SubTask,
  validate,
};
