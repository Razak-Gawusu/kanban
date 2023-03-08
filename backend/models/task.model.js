const Joi = require("joi");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLenght: 50,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 8,
      maxLenght: 255,
      unique: true,
    },
    column: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Column",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

taskSchema.virtual("subTasks", {
  ref: "SubTask",
  localField: "_id",
  foreignField: "task",
});
const Task = mongoose.model("Task", taskSchema);
const validate = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(data);
};

module.exports = {
  Task,
  validate,
};
