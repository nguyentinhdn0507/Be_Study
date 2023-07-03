"use Strict";
const express = require("express");
const { apiKey, permissions } = require("../auth/checkAuth");
const router = express.Router();
// router.get("", (req, res) => {
//   return res.status(200).json({
//     message: "Welcome to My Shop",
//   });
// });
router.use(apiKey);
router.use(permissions("0000"));

router.use("/v1/api", require("./access"));

module.exports = router;
