const express = require("express");
const { findOrders } = require("./orders.controller");
const ordersRouter = express.Router();

ordersRouter.post("/get-orders", findOrders);

module.exports = ordersRouter;
