const { MessageMentions } = require("discord.js");

module.exports = {
  name: "bullyshahmir",
  description: "random roast",
  execute(message, args, roastLine) {
    const shahmir = "<@766812992411009034>";
    message.channel.send(shahmir + " " + roastLine);
  },
};
