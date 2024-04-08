const express = require("express");
const { createUser, login, authorize, logout } = require("./auth.controller");
const authRouter = express.Router();

authRouter.post("/createUser", createUser);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/authorize", authorize);

module.exports = authRouter;
