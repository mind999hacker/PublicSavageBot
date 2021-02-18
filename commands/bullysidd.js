const { MessageMentions } = require("discord.js");

module.exports = {
  name: "bullysidd",
  description: "random roast",
  execute(message, args, roastLine) {
    const sidd = "<@485869685158707210>";
    message.channel.send(sidd + " " + roastLine);
  },
};
