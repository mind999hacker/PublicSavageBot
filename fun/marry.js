const Discord = require("discord.js");
//const Couples = require('./models/couples');
const CoupleDb = require("../server");
const couple = new CoupleDb();
const fetch = require("node-fetch");

var alrMarried = false;

module.exports.run = async (client, message, args, config) => {
  let id1 = message.author;
  let id2 = message.mentions.members.first().user;

  await couple.findFinal().then((coupless) => {
    for (i = 0; i < coupless.length; i++) {
      var tmp = coupless[i].dbID.split(" ");
      if (tmp[0] === id1.id || tmp[0] === id2.id) {
        alrMarried = true;
        message.reply(
          `Sorry one of the users is married to <@${tmp[1]}> divorce them first`
        );
      } else if (tmp[1] === id1.id || tmp[1] === id2.id) {
        alrMarried = true;
        message.reply(
          `Sorry one of the users is married to <@${tmp[0]}> divorce them first`
        );
      }
    }
  });

  if (!alrMarried) {
    let url = `https://api.tenor.com/v1/search?q=anime-propose&key=8Y54PU02PWS6&contentfilter=high`;
    let response = await fetch(url);
    let jsonPropose = await response.json();
    let url2 = `https://api.tenor.com/v1/search?q=anime-marriage&key=8Y54PU02PWS6&contentfilter=high`;
    let response2 = await fetch(url2);
    let jsonMarry = await response2.json();
    const embed = new Discord.MessageEmbed()
      .setColor("#ff69b4")
      .setTitle("Proposal")
      .setDescription(`<@${id2.id}> would you like to marry ${id1.username}`)
      .setImage(jsonPropose.results[0].media[0].gif.url)
      .setTimestamp();
    let sent = await message.channel.send(embed);
    let sentId = sent.id;
    message.channel.messages
      .fetch({ around: `${sentId}`, limit: 1 })
      .then((fetchmsg) => {
        // message.
        const msg = fetchmsg.first();
        msg.react("✅");
        msg.react("❌");
        msg
          .awaitReactions(() => true, { max: 3, time: 60000, errors: ["time"] })
          .then((collected) => {
            message.channel.messages
              .fetch({ around: `${sentId}`, limit: 1 })
              .then((fetchmsg) => {
                //message.con
                const msg = fetchmsg.first();
                var tick = msg.reactions.cache.get("✅").count;
                var cross = msg.reactions.cache.get("❌").count;

                if (tick === 2) {
                  couple.newSave(id1.id, id2.id);
                  const embed = new Discord.MessageEmbed()
                    .setColor("#ff69b4")
                    .setTitle("Married")
                    .setDescription(`<@${id2.id}> happyly married <@${id1.id}>`)
                    .setImage(jsonMarry.results[2].media[0].gif.url)
                    .setTimestamp();
                  return msg.edit(embed);
                } else if (cross === 2) {
                  const embed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle("Rejected")
                    .setDescription(
                      `${id2.username} rejected you ${id1.username}`
                    )
                    .setTimestamp();
                  return msg.edit(embed);
                }
              });
          })
          .catch((collected) => {
            console.error;
            const embed = new Discord.MessageEmbed()
              .setColor("RED")
              .setTitle("TimeOut")
              .setDescription("Ran out of time.")
              .setTimestamp();
            return msg.edit(embed);
          });
      });
  }
  alrMarried = false;
};
