const express = require("express");
const {
  getAllProducts,
  createCheckoutSession,
  verifySession,
} = require("./stripe.controller");
const stripeRouter = express.Router();

stripeRouter.get("/products", getAllProducts);
stripeRouter.post("/checkout", createCheckoutSession);
stripeRouter.post("/verify-session", verifySession);

module.exports = stripeRouter;
