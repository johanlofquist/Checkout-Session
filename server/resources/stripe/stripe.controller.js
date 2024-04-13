require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const fs = require("fs").promises;

const getAllProducts = async (req, res) => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  res.status(200).json(products);
};

const createCustomerInStripe = async (email) => {
  const customer = await stripe.customers.create({
    email,
  });
  return customer;
};

const createCheckoutSession = async (req, res) => {
  const cart = req.body.cart;
  const session = await stripe.checkout.sessions.create({
    allow_promotion_codes: true,
    mode: "payment",
    customer: req.body.stripeId,
    line_items: cart.map((item) => {
      return {
        price: item.product.default_price.id,
        quantity: item.quantity,
      };
    }),
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173",
  });

  res.status(200).json({ url: session.url, sessionId: session.id });
};

const verifySession = async (req, res) => {
  const sessionId = req.body.sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  console.log(session);

  if (session.payment_status === "paid") {
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    const order = {
      orderNumber: uuidv4(),
      customer: session.customer_details.email,
      products: lineItems.data,
      total: session.amount_total,
      date: new Date(),
    };

    const orders = JSON.parse(await fs.readFile("./data/orders.json"));
    orders.push(order);
    await fs.writeFile("./data/orders.json", JSON.stringify(orders, null, 4));

    res.status(200).json({ verified: true });
  }
};

module.exports = {
  getAllProducts,
  createCustomerInStripe,
  createCheckoutSession,
  verifySession,
};
