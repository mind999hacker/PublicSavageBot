const { stripColors } = require("colors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecretMessageSchema = new Schema({
  userId: {
    type: String,
    required:true,
  },
  color:{
    type: Number,
    default: randomColor(),
  },
});
module.exports = Item = mongoose.model("secretMessage", SecretMessageSchema);

function randomColor()
{
  return Math.random() * 16777215;
}
