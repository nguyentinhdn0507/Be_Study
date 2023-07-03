"use strict";
require("dotenv").config();
const JWT = require("jsonwebtoken");
const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const assessToken = await JWT.sign(payload, privateKey, {
      expiresIn: process.env.EXPIRES_TOKEN,
    });
    const refreshToken = await JWT.sign(payload, privateKey, {
      expiresIn: process.env.EXPIRES_REFRESH_TOKEN,
    });
    JWT.verify(assessToken, publicKey, (error, decode) => {
      if (error) {
        console.log("error:", error);
      } else {
        console.log("decode:", decode);
      }
    });
    return { assessToken, refreshToken };
  } catch (error) {}
};
module.exports = {
  createTokenPair,
};
