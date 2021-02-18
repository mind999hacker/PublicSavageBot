const { MessageMentions } = require("discord.js");

module.exports = {
  name: "bullysahil",
  description: "random roast",
  execute(message, args, roastLine) {
    const sahil = "<@313538550928769026>";
    message.channel.send(sahil + " " + roastLine);
  },
};
