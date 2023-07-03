"use Strict";
const express = require("express");
const router = express.Router();
const accessController = require("../../controllers/access.controller");
const { asyncHandler } = require("../../auth/checkAuth");

//Sign-up
router.post("/shop/signup", asyncHandler(accessController.singUp));
module.exports = router;
