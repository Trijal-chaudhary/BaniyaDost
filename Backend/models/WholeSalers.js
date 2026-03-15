const mongoose = require("mongoose");
const WholeSalersDetails = mongoose.Schema({
  details: {
    type: Object,
    required: true
  },
  rating: {
    type: Number,
    default: 1
  },
  Products: {
    type: Array
  },
  orderDetails: {
    type: Array
  }
})

module.exports = mongoose.model("WholeSalersDetails", WholeSalersDetails)
