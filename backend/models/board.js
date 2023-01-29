const mongoose = require("mongoose");
const Joi = require("joi");
const { columnSchema } = require("./column");

const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLenght: 255,
      trim: true,
      unique: true,
    },
    columns: {
      type: [columnSchema],
    },
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.model("Board", boardSchema);

function validateBoard(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    boards: Joi.array(),
  });

  return schema.validate(data);
}

exports.Board = Board;
exports.boardSchema = boardSchema;
exports.validate = validateBoard;
