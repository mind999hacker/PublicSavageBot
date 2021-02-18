const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoneyTimeSchema = new Schema({
  name: {
    type: Number,
    required: true,
  },
  dateOfEntry: {
    type: Number,
    default: Date.now(),
  }
});
module.exports = Item = mongoose.model("moneyTime", MoneyTimeSchema);
