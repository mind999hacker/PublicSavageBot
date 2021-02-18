const ms = require("parse-ms");
const Discord = require("discord.js");
const Money = require("discord-xp");

const PayDayTimeDb = require("../payDayServer");
const PayDayTime = new PayDayTimeDb();

exports.run = async (client, message, args, config) => {
  let timeout = 1800000; // 30 min hours in milliseconds
  let amount = 500;
  // random amount: Math.floor(Math.random() * 1000) + 1;

  let workTime;
  let checkAccount = message.author.id;
  await PayDayTime.findFinal(checkAccount).then((times) => {
    //console.log(times);
    if (times !== undefined) {
      workTime = times;
    } else {
      // console.log("came here");
      workTime = 0;
    }
  });

  if (workTime !== null && timeout - (Date.now() - workTime) > 0) {
    let time = ms(timeout - (Date.now() - workTime));

    message.channel.send(
      `Please wait **${time.hours}h ${time.minutes}m ${time.seconds}s**!`
    );
  } else {
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`**PayDay**`)
      .addField(`Collected 💵`, "$" + amount);

    message.channel.send(embed);
    await Money.appendXp(message.author.id, message.guild.id, amount);
    PayDayTime.set(checkAccount);
  }
};
