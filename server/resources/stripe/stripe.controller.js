require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const getAllProducts = async (req, res) => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  res.status(200).json(products);
};

module.exports = { getAllProducts };
