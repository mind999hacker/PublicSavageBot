const Discord = require("discord.js");
const Money = require("discord-xp");

module.exports.run = async (client, message, args, config) => {
  let user = message.author.id;
  const userMention = "<@" + user + ">";
  //console.log(user);
  if (message.mentions.members.first()) {
    let user2 = message.mentions.members.first();
    const user2Mention = "<@" + user2.id + ">";
    let money = await Money.fetch(user2.id, message.guild.id);
    if (money.xp === undefined) {
      await Money.appendXp(user2.id, message.guild.id, 1000);
      message.channel.send(user2Mention + " have $" + 1000);
    } else {
      let money = await Money.fetch(user2.id, message.guild.id);

      message.channel.send(user2Mention + " have $" + money.xp);
    }
  } else {
    let money = await Money.fetch(message.author.id, message.guild.id);
    //console.log("guild" + message.guild.id);
    // console.log("author" + message.author.id);

    if (money.xp === undefined) {
      await Money.appendXp(message.author.id, message.guild.id, 1000);
      message.channel.send(userMention + " have $" + 1000);
    } else {
      let money = await Money.fetch(message.author.id, message.guild.id);
      message.channel.send(userMention + " have $" + money.xp);
    }
  }
};
