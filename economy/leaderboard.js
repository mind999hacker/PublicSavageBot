const Discord = require("discord.js");
const Money = require("discord-xp");

module.exports.run = async (client, message, args, config) => {
  const rawLeaderboard = await Money.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

  if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

  const leaderboard = await Money.computeLeaderboard(
    client,
    rawLeaderboard,
    true
  ); // We process the leaderboard.

  const lb = leaderboard.map(
    (e) => `**${e.position}.** ${e.username}: $${e.xp.toLocaleString()}`
  ); // We map the outputs.

  //message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Leaderboard`, message.guild.iconURL())
    .setColor("#7289da")
    .setDescription(`${lb.join("\n")}`)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp();
  message.channel.send(embed);

  /*let guildId = message.guild.id;
   let money = db.all().filter(data => data.ID.startsWith(`money_${guildId}`)).sort((a, b) => b.data - a.data)
    money.length = 10;
    console.log(money)
    var finalLb = "";
   // let userTry = await client.users.fetch('766812992411009034')
    //console.log(userTry.username);
    for (var i in money) {
    finalLb += `**${money.indexOf(money[i])+1}. <@${money[i].ID.split('_')[2]}>** - ${money[i].data} 💵\n`;
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Leaderboard`, message.guild.iconURL())
    .setColor("#7289da")
    .setDescription(finalLb)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed);*/
};
