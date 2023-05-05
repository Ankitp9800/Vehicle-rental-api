const  mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  model: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  daily_rate: {
    type: String,
    default: "",
  },
  image_url: {
    type: String,
    default: "",
  },
  wheel: {
    type: mongoose.Schema.Types.ObjectId,
     ref: 'wheels'
    }
 
});

module.exports = mongoose.model("Vehicle", UserSchema);
