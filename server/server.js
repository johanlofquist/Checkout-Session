const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const userRouter = require("./resources/users/users.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    secret: "yolo",
    maxAge: 1000 * 60 * 60,
  })
);

app.use("/api/users", userRouter);

app.listen(3000, () => console.log("Server is up and running!"));
