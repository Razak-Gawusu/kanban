const mongoose = require("mongoose");
const express = require("express");
const debugDB = require("debug")("app:db");
const config = require("config");
const AppError = require("../utils/error.util");

const app = express();
let mongodb_uri = config.get("mongodb_uri");

const ENV = app.get("env");

if (ENV === "development") {
  mongodb_uri = config.get("mongodb_uri");
} else if (ENV === "production") {
  const mongodb_pwd = config.get("mongodb_pwd");
  mongodb_uri = config.get("mongodb_uri");
  mongodb_uri = mongodb_uri.replace("{%mongodb_pwd%}", mongodb_pwd);
} else {
  mongodb_uri = config.get("mongodb_uri");
}

mongoose.set("strictQuery", false);
async function mongoDB() {
  try {
    const db = await mongoose.connect(mongodb_uri);
    if (db) debugDB(`successfully connected to db ${ENV}`);
  } catch (error) {
    throw new AppError(error.message, 500);
  }
}

module.exports = {
  mongoDB,
};
