const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args, config) => {
  let url = `https://api.tenor.com/v1/search?q=anime-hug&key=8Y54PU02PWS6&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  //console.log(json)
  const index = Math.floor(Math.random() * json.results.length);

  if (message.content.length === 4) {
    message.reply("Hug who? Try +hug @user");
  } else {
    let user2 = message.mentions.members.first();
    const user2Mention = "<@" + user2.id + ">";
    const embed = new Discord.MessageEmbed()
      .setColor("#ffb8c4")
      .setDescription(`${message.author.username} hugs ${user2Mention}`)
      .setImage(json.results[index].media[0].gif.url);
    message.delete();
    message.channel.send(embed);
  }
};