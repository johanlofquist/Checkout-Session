const fs = require("fs").promises;

const findOrders = async (req, res) => {
  const customerEmail = req.body.email;

  const orders = JSON.parse(await fs.readFile("./data/orders.json"));

  matchedOrders = orders.filter((order) => order.customer === customerEmail);

  res.status(200).json(matchedOrders);
};

module.exports = { findOrders };
