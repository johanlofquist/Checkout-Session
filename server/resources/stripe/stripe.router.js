const express = require("express");
const { getAllProducts } = require("./stripe.controller");
const stripeRouter = express.Router();

stripeRouter.get("/products", getAllProducts);

module.exports = stripeRouter;
