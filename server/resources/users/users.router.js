const express = require("express");
const userRouter = express.Router();

userRouter.post("/createUser", createUser);

module.exports = userRouter;
