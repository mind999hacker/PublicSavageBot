const { MessageMentions } = require("discord.js");

module.exports = {
  name: "bullyethan",
  description: "random roast",
  execute(message, args, roastLine) {
    const ethan = "<@225755400564113409>";
    message.channel.send(ethan + " " + roastLine);
  },
};
