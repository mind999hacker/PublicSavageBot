const Discord = require("discord.js");
const Money = require("discord-xp");

module.exports.run = async (client, message, args, config) => {
  //let user = message.author.id;
  //const userMention = "<@"+user+">";

  //console.log(message.author.id);
  let user = message.author.id;
  const userMention = "<@" + user + ">";

  let money = await Money.fetch(message.author.id, message.guild.id);

  if (money <= args[0]) {
    return message.reply(" You don't have enough funds");
  }

  if (!args[0]) return message.reply("Please specify an amount to add.");
  if (isNaN(args[0])) return message.reply("That was not a valid number!");

  let userTransfer = message.mentions.members.first();
  const userTransferMention = "<@" + userTransfer.id + ">";

  message.channel.send(
    "Successfully transfered $" + args[0] + " to " + userTransferMention
  );
  await Money.subtractXp(user, message.guild.id, args[0]);
  await Money.appendXp(userTransfer.id, message.guild.id, args[0]);
};
