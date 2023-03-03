const mongoose = require("mongoose");
const Joi = require("joi");
const { taskSchema } = require("./task");

const columnSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLenght: 255,
      trim: true,
      unique: true,
    },
    tasks: {
      type: [taskSchema],
    },
  },
  {
    timestamps: true,
  }
);

const Column = mongoose.model("Column", columnSchema);

function validateColumn(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    tasks: Joi.array(),
    boardId: Joi.objectId().required(),
  });

  return schema.validate(data);
}

exports.Column = Column;
exports.columnSchema = columnSchema;
exports.validate = validateColumn;
