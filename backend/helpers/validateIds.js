const mongoose = require("mongoose");

function validateId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

exports.validateId = validateId;
