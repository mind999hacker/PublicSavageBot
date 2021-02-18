const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PayDayTime = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfEntry: {
    type: Number,
    default: Date.now(),
  },
});
module.exports = Item = mongoose.model("payDayTime", PayDayTime);
