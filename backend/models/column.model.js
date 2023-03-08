const mongoose = require("mongoose");
const Joi = require("joi");

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
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

columnSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "column",
});

const Column = mongoose.model("Column", columnSchema);

function validate(data) {
  const schema = Joi.object({
    columnName: Joi.string().min(3).max(50),
  });

  return schema.validate(data);
}

module.exports = {
  Column,
  validate,
};
