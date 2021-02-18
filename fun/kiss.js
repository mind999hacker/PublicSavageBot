const Discord = require("discord.js");
//const Couples = require('./models/couples');
const CoupleDb = require("../server");
const couple = new CoupleDb();
const fetch = require("node-fetch");

module.exports.run = async (client, message, args, config) => {
    var notWork = true;
    if (!message.mentions.members.first()) {
        return message.reply("Kiss who? Try +kiss @user");
      } 
      let id1 = message.author;
      let id2 = message.mentions.members.first().user;
      //console.log(user2);
    const user2Mention = "<@" + id2.id + ">";
  let url = `https://api.tenor.com/v1/search?q=anime-kiss&key=8Y54PU02PWS6&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  //console.log(json)
  const index = Math.floor(Math.random() * json.results.length);
  await couple.findFinal().then((coupless) => {
    for (i = 0; i < coupless.length; i++) {
        notWork = false;
      var tmp = coupless[i].dbID.split(" ");
      if ( tmp[0] === id2.id) {
        const embed = new Discord.MessageEmbed()
        .setColor("#ffb8c4")
        .setDescription(`${message.author.username} kisses ${user2Mention}`)
        .setImage(json.results[index].media[0].gif.url);
      message.delete();
      message.channel.send(embed);
      } else if (tmp[1] === id2.id) {
        const embed = new Discord.MessageEmbed()
      .setColor("#ffb8c4")
      .setDescription(`${message.author.username} kisses ${user2Mention}`)
      .setImage(json.results[index].media[0].gif.url);
    message.delete();
    message.channel.send(embed);
      }
      else{
          message.reply("Sorry you are need to marry that person, Dont be shy go for it!");
      }
    }
  });

  if(notWork)
  {
      message.reply("Sorry you are need to marry that person, Dont be shy go for it!");
  }
};

