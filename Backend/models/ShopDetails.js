const mongoose = require("mongoose");
const ShopKeeperDetails = mongoose.Schema({
  details: {
    type: Object,
    required: true
  },
  rating: {
    type: Number,
    default: 1
  },
  credits: {
    type: Number,
    default: 100
  }
})

module.exports = mongoose.model("ShopKeeperDetails", ShopKeeperDetails)
