const express = require("express");
const User = require("./user.schema");

const app = express.Router();

app.post("/", async (req, res) => {
  try {
    let userDetails = new User({ ...req.body });
    await userDetails.save();
    res.status(200).send(userDetails);
  } catch (er) {
    return res.status(500).send({ msg: er.message });
  }
});

app.patch("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let Score = await User.findByIdAndUpdate(
      id,
      { score: req.body.score },
      { new: true }
    );
    res.status(200).send(Score);
  } catch (e) {
    res.status(401).send(e.message);
  }
});

app.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.status(200).send(user);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

module.exports = app;
