const { validate } = require("../models/board.model");
const AppError = require("../utils/error.util");

const getAll = (Model) => async (req, res) => {
  const docs = await Model.find({});
  res.status(200).json({
    status: "success",
    data: {
      docs,
    },
  });
};

const getOne = (Model, populateOptions) => async (req, res) => {
  const doc = await Model.findById(req.params.id).populate(populateOptions);

  if (!doc) throw new AppError("Document not Found", 404);

  res.status(200).json({
    status: "success",
    data: {
      doc,
    },
  });
};

const createOne = (Model) => async (req, res) => {
  const { error } = validate(req.body);
  if (error) throw new AppError(error.details[0].message, 400);

  const doc = await Model.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      doc,
    },
  });
};

const updateOne = (Model) => async (req, res) => {
  const { error } = validate(req.body);
  if (error) throw new AppError(error.details[0].message, 400);

  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!doc) throw new AppError("Document not Found", 404);

  res.status(201).json({
    status: "success",
    data: {
      doc,
    },
  });
};

const deleteOne = (Model) => async (req, res) => {
  const doc = await Model.findByIdAndRemove(req.params.id);

  if (!doc) throw new AppError("Document not Found", 404);
  res.status(201).json({
    status: "success",
    data: {
      doc,
    },
  });
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
