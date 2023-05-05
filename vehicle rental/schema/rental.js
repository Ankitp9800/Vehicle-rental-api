const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
  start_date: {
    type: Date,
    default: Date.now,
  },
  end_date: {
    type: Date,
    default: Date.now,
  },
  total_cost: {
    type: Number,
  },
});

module.exports = mongoose.model("Rental", rentalSchema);
