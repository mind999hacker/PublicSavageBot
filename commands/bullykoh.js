const { MessageMentions } = require("discord.js");

module.exports = {
  name: "bullykoh",
  description: "random roast",
  execute(message, args, roastLine) {
    const koh = "<@193109823661932544>";
    message.channel.send(koh + " " + roastLine);
  },
};
