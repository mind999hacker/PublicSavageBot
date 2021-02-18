const Discord = require("discord.js");

const paginationEmbed = require("discord.js-pagination");

// Use either MessageEmbed or RichEmbed to make pages
// Keep in mind that Embeds should't have their footers set since the pagination method sets page info there
const { MessageEmbed } = require("discord.js");
const embedHelp = new Discord.MessageEmbed()
  .setColor("#fc2eff")
  .setTitle("Help")
  .setDescription(
    "2️⃣ - games\n3️⃣ - economy\n4️⃣ - make economy money\n5️⃣ - fun\n6️⃣ - usefull"
  )
  .setTimestamp();
const embedRoast = new Discord.MessageEmbed()
  .setColor("#fc2eff")
  .setTitle("Help - Roasts")
  .setDescription(
    "+helpkoh - roast Koh\n +helpsidd - roast Sidd\n +helpshahmir - roast Shahmir\n +helpethan - roast Ethan\n +helpjeff - roast Jeff\n +helpsahil - roast Sahil"
  )
  .setTimestamp();
const embedGames = new Discord.MessageEmbed()
  .setColor("#fc2eff")
  .setTitle("Help - Games")
  .setDescription(
    "+hangman - hangman game\n+ttt - tic tac toe\n+ttt @user - play with someone else"
  )
  .setTimestamp();
const embedEconomy = new Discord.MessageEmbed()
  .setColor("#fc2eff")
  .setTitle("Help - Economy")
  .setDescription(
    "+bal - check balance\n+bal @user - check someone else balance\n+leaderboard or lb - see the rich people of the server\n+t money @user ex. +t 100 @mind.hacker999- transfer your specific amount of money to someone else"
  )
  .setTimestamp();
const embedMoney = new Discord.MessageEmbed()
  .setColor("#fc2eff")
  .setTitle("Help - Make Money")
  .setDescription(
    "+work - work every 6hrs to get money\n+payday - get $500 every 30 min\n+flip number t or h ex. +flip 500 h - get double the money you bet if coin lands correct"
  )
  .setTimestamp();
const embedFun = new Discord.MessageEmbed()
  .setColor("#fc2eff")
  .setTitle("Help - Fun")
  .setDescription(
    "+dj - get a random dad joke\n+hug @user - hug someone\n+marry @user - marry someone\n+kiss @user - kiss someone your married to\n+truth - truth question\n+dare - dare question\n+nhie - Never Have I Ever\n+nhie nsfw - NSFW Never Have I Ever"
  )
  .setTimestamp();
const embedUsefull = new Discord.MessageEmbed()
  .setColor("#fc2eff")
  .setTitle("Help - UseFull")
  .setDescription(
    "+send <message> in bot dm - send a message anonymously in anonymous channel\n+poll question - make a new poll\n+editpoll ID question\n+endpoll ID - get the results of a poll"
  )
  .setTimestamp();

pages = [
  embedHelp,
  embedGames,
  embedEconomy,
  embedMoney,
  embedFun,
  embedUsefull,
];

emojiList = ["⏪", "⏩"];

module.exports.run = async (client, message, args, config) => {
  paginationEmbed(message, pages, emojiList, 120000);
};
