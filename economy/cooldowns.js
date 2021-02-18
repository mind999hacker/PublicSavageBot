const ms = require("parse-ms");
const Discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  let timeoutPayday = 1800000; // 30 min hours in milliseconds
  let timeoutWork = 21600000;
  // random amount: Math.floor(Math.random() * 1000) + 1;

  let dailyPayday = await db.fetch(
    `payday_${message.guild.id}_${message.author.id}`
  );
  let dailyWork = await db.fetch(
    `workTime_${message.guild.id}_${message.author.id}`
  );

  let timePayday = ms(timeoutPayday - (Date.now() - dailyPayday));
  let timeWork = ms(timeoutWork - (Date.now() - dailyWork));

  if (timeWork.hours <= 0 && timeWork.minutes <= 0 && timeWork.seconds <= 0) {
    var workMessage = `Work - ready`;
  } else {
    var workMessage = `Work - **${timeWork.hours}h ${timeWork.minutes}m ${timeWork.seconds}s**`;
  }
  if (
    timePayday.hours <= 0 &&
    timePayday.minutes <= 0 &&
    timePayday.seconds <= 0
  ) {
    var payMessage = `Payday - ready`;
  } else {
    var payMessage = `Payday - **${timePayday.hours}h ${timePayday.minutes}m ${timePayday.seconds}s**`;
  }

  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cooldowns")
    .setDescription(`${workMessage}\n${payMessage}`)
    .setTimestamp();
  message.channel.send(embed);
};
