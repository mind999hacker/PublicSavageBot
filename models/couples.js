const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoupleSchema = new Schema({
  dbID: {
    type: String,
    required: true,
  },
});
module.exports = Item = mongoose.model("couples", CoupleSchema);
