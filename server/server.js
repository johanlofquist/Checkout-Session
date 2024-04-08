const express = require("express");
const authRouter = require("./resources/auth/auth.router");
const cookieSession = require("cookie-session");
const cors = require("cors");
const stripeRouter = require("./resources/stripe/stripe.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  cookieSession({
    secret: "y0l0y0l0y0l0",
    maxAge: 1000 * 60 * 60,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/stripe", stripeRouter);

app.listen(3000, () => console.log("Server is up and running!"));
