const express = require("express");
const router = express.Router();

module.exports = router;

const home = require("./modules/home");
const todos = require("./modules/todos");

router.use("/", home);
router.use("/todos", todos);
