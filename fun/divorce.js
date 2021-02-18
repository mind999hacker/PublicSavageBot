const Discord = require("discord.js");
//const Couples = require('./models/couples');
const CoupleDb = require("../server");
const couple = new CoupleDb();

module.exports.run = async (client, message, args, config) => {
  let id1 = message.author;

  couple.findFinal().then((coupless) => {
    for (i = 0; i < coupless.length; i++) {
      var tmp = coupless[i].dbID.split(" ");
      if (tmp[0] === id1.id) {
        var tmpId = `${tmp[0]} ${tmp[1]}`;
        couple.delete(tmpId);
        console.log("first one" + tmpId);
        return message.reply(`You just divorced <@${tmp[1]}>`);
      } else if (tmp[1] === id1.id) {
        var tmpId = `${tmp[0]} ${tmp[1]}`;
        couple.delete(tmpId);
        console.log("secnd one");
        return message.reply(`You just divorced <@${tmp[0]}>`);
      } else {
        return message.reply("You arent maried to anyone poor bby");
      }
    }
    if (coupless.length === 0) {
      return message.reply("You arent maried to anyone poor bby");
    }
  });
};
