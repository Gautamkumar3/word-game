const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true, default: 0 },
  difficulty: { type: String, enum: ["high", "medium", "low"], required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
