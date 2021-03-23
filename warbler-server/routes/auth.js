const express = require("express");
const router = express.Router();
const { signUp, signin } = require("../handlers/auth");

router.post("/signUp", signUp);

router.post("/signin", signin);

module.exports = router;