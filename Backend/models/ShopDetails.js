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
  },
  totalOrders: {
    type: Number,
    default: 0
  },
  pendingOrders: {
    type: Number,
    default: 0
  },
  pendingPayments: {
    type: Array
  },
  orderDetails: {
    type: Array
  }
})

module.exports = mongoose.model("ShopKeeperDetails", ShopKeeperDetails)
