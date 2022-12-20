const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db.js");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const randomWords = require("random-words");
const userRouter = require("./user/user.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

app.get("/randomWord", (req, res) => {
  res.send(randomWords());
});

app.listen(8080, async () => {
  await dbConnect();
  console.log("Server is running on port 8080");
});
