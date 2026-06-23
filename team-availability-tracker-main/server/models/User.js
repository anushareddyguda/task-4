const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema);