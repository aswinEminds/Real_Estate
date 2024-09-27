const mongoose = require("mongoose");

const property_schema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: "String", required: true },
  image_urls: { type: Array },
  description: { type: String },
  price: { type: Number, required: true },
  bedrooms: {},
  bathrooms: {},
  type: {},
});

const Property = mongoose.model("Property", property_schema);
module.exports = Property;
