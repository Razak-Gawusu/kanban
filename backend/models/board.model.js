const mongoose = require("mongoose");
const Joi = require("joi");

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
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

boardSchema.virtual("columns", {
  ref: "Column",
  localField: "_id",
  foreignField: "board",
});

const Board = mongoose.model("Board", boardSchema);

function validate(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50),
    title: Joi.string().min(3).max(255),
    description: Joi.string().min(3),
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
