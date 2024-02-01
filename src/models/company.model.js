const mongoose = require("mongoose");

const Company = mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("Company", Company);
