const Discord = require("discord.js");
const TicTacToe = require("discord-tictactoe");
const prefix = "+";
const requireAmount = 200;
const Money = require("discord-xp");

module.exports.run = async (client, message, args, config) => {
  const check = message.content.slice(prefix.length).split(/ +/);
  const command = check.shift().toLowerCase();
  const tttCheck = message.content.substring(0, 4).toLowerCase();
  const wonCheck = message.content.substring(0, 13).toLowerCase();

  if (message.content.length <= 4 && tttCheck === "+ttt") {
    let user = message.author.id;
    const userMention = "<@" + user + ">";
    let money = await Money.fetch(message.author.id, message.guild.id);

    if (money.xp <= requireAmount) {
      return message.reply(" You don't have enough funds");
    } else {
      await Money.subtractXp(
        message.author.id,
        message.guild.id,
        requireAmount
      );
      message.channel.send(
        userMention + " Spent $" + requireAmount + " on TicTacToe"
      );
    }
  } else if (wonCheck === "+ttt game won") {
    let user2 = message.mentions.members.first();
    const user2Mention = "<@" + user2.id + ">";
    await Money.appendXp(user2.id, message.guild.id, 1500);
    message.channel.send("1500 won by " + user2Mention + "!");
  } else if (message.content.length > 4 && tttCheck === "+ttt") {
    let user = message.author.id;
    const userMention = "<@" + user + ">";
    let user2 = message.mentions.members.first();
    const user2Mention = "<@" + user2.id + ">";
    let money = await Money.fetch(message.author.id, message.guild.id);
    let money2 = await Money.fetch(user2.id, message.guild.id);

    if (money.xp <= requireAmount) {
      return message.channel.send(`${userMention} doesnt have enough cash broke a**..`);
    } 
    else if(money2.xp <= requireAmount)
    {
      return message.channel.send(`${user2Mention} doesnt have enough cash broke a**..`);
    }
    else if (user === user2.id) {
      return;
    } 
    else {
      await Money.subtractXp(
        message.author.id,
        message.guild.id,
        requireAmount
      );
      await Money.subtractXp(user2.id, message.guild.id, requireAmount);
      message.channel.send(
        userMention +
          " and " +
          user2Mention +
          "Spent $" +
          requireAmount +
          " on TicTacToe"
      );
    }
  }
};
