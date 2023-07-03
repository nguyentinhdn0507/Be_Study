"use strict";

const { findById } = require("../services/apikey.service");

const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
};
const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      return res.status(401).json({
        message: "Forbidden Error",
      });
    }
    // check objectKey
    const objectKey = await findById(key);
    if (!objectKey) {
      return res.status(403).json({
        message: "Forbidden Error",
      });
    }
    req.objectKey = objectKey;
    return next();
  } catch (error) {}
};
const permissions = (permission) => {
  return (req, res, next) => {
    if (!req.objectKey.permissions) {
      return res.status(403).json({
        message: "Permission Denied",
      });
    }
    const validatePermission = req.objectKey.permissions.includes(permission);
    if (!validatePermission) {
      return res.status(403).json({
        message: "Permission Denied",
      });
    }
    return next();
  };
};
const asyncHandler = (fn) => {
  // param is Function
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
module.exports = { apiKey, permissions, asyncHandler };
