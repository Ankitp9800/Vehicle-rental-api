const mongoose = require("mongoose");

const wheelSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  vehicles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
});
module.exports = mongoose.model("wheels", wheelSchema);
