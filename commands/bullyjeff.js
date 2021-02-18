const { MessageMentions } = require("discord.js");

module.exports = {
  name: "bullyjeff",
  description: "random roast",
  execute(message, args, roastLine) {
    const jeff = "<@222510325281325077>";
    message.channel.send(jeff + " " + roastLine);
  },
};
