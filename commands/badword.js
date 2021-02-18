const Discord = require("discord.js");
const Money = require("discord-xp");

module.exports.run = async (client, message, args, config) => {
  const whoSaidIt = message.mentions.members.first();
  const userMention = "<@" + whoSaidIt.id + ">";
  await Money.setXp(whoSaidIt.id, message.guild.id, 1);
};
