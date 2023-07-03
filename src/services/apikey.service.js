"use strict";
const crypto = require("crypto");
const apiKeyModel = require("../models/apikey.model");

const findById = async (key) => {
  const newKey = await apiKeyModel.create({
    key: crypto.randomBytes(64).toString("hex"),
    permissions: ["0000"],
  });
  console.log("newKey:", newKey);
  const objectKey = await apiKeyModel.findOne({ key, status: true }).lean();
  return objectKey;
};
module.exports = {
  findById,
};
