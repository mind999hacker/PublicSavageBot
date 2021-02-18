const Discord = require("discord.js");
const Money = require("discord-xp");

module.exports.run = async (client, message, args, config) => {
  //let user = message.author.id;
  //const userMention = "<@"+user+">";

  //console.log(message.author.id);

  if (message.author.id === "766812992411009034") {
    // return message.reply('You do not have permission to use this command.')

    if (!args[0]) return message.reply("Please specify an amount to add.");
    if (isNaN(args[0])) return message.reply("That was not a valid number!");

    let user = message.mentions.members.first();
    const userMention = "<@" + user.id + ">";
    message.channel.send(
      "Successfully added $" + args[0] + " to " + userMention
    );
    await Money.appendXp(user.id, message.guild.id, args[0]);
  } else {
    return message.reply("You do not have permission to use this command.");
  }
};
