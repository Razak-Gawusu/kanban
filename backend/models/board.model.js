const mongoose = require("mongoose");
const Joi = require("joi");

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLenght: 255,
    trim: true,
    unique: true,
  },
});

boardSchema.virtual("columns", {
  ref: "Column",
  foreignField: "board",
  localField: "_id",
});

const Board = mongoose.model("Board", boardSchema);

function validate(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50),
    title: Joi.string().min(3).max(50),
    description: Joi.string().min(3).max(255),
    status: Joi.boolean(),
    board: Joi.objectId(),
    column: Joi.objectId(),
    task: Joi.objectId(),
  });

  return schema.validate(data);
}

module.exports = {
  Board,
  validate,
};
