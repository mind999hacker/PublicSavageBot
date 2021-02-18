const Discord = require("discord.js");
const Money = require("discord-xp");

module.exports.run = async (client, message, args, config) => {
  if (!args[0]) return message.reply("Use +flip number h or t ex. +flip 500 h");
  if (isNaN(args[0]))
    return message.reply("Use +flip number h or t ex. +flip 500 h");
  if (args[1] === "t" || args[1] === "h") {
  } else {
    return message.reply("Use +flip number h or t");
  }
  let money = await Money.fetch(message.author.id, message.guild.id);
  if (money <= args[0]) {
    return message.reply("Sorry your broke you only have " + money);
  }
  var tfnum = Math.floor(Math.random() * 2) + 1;
  var second = Math.floor(Math.random() * 2) + 1;
  if(second == 1)
  {
    if(tfnum == 1)
    {
      tfnum = 0;
    }
    else{
      tfnum=1;
    }
  }
  var tf;
  var tfFinal;

  if (tfnum == 1) {
    tf = "t";
    tfFinal = "Tails";
  } else {
    tf = "h";
    tfFinal = "Heads";
  }

  if (tf === args[1]) {
    await Money.appendXp(message.author.id, message.guild.id, args[0] * 1.5);
    message.reply(
      "Congratulation the coin landed **" +
        tfFinal +
        "** you won $" +
        args[0] * 1.5
    );
  } else {
    await Money.subtractXp(message.author.id, message.guild.id, args[0]);
    message.reply(
      "Sorry the coin landed **" + tfFinal + "** you lost $" + args[0]
    );
  }
};
