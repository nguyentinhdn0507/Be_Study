"use strict";
require("dotenv").config();
const JWT = require("jsonwebtoken");
const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const assessToken = await JWT.sign(payload, publicKey, {
      expiresIn: "2 days",
    });
    const refreshToken = await JWT.sign(payload, privateKey, {
      expiresIn: "7 days",
    });
    JWT.verify(
      assessToken,
      publicKey,
      { algorithm: "RS256" },
      (error, decode) => {
        if (error) {
          console.log("error:", error);
        } else {
          console.log("decode:", decode);
        }
      }
    );
    return { assessToken, refreshToken };
  } catch (error) {}
};
module.exports = {
  createTokenPair,
};
