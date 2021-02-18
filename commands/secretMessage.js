const Discord = require("discord.js");
//const Couples = require('./models/couples');
const SecretMessageDb = require("../secretMessageServer");
const secret = new SecretMessageDb();
const fetch = require("node-fetch");
const { Promise } = require("mongoose");
var id;

var alrMarried = false;

module.exports.run = async (client, message, args, config, reset) => {

    if(reset)
    {
        let tmp = await secret.findResetFinal()
        for(let i of tmp)
        {
            secret.delete(i.userId);
        }
        message.channel.send("Succesfully made everyone anonymous again!");
    }
    else{
     checkReturnId(message, client);
    }
    
    //check();

}

async function checkReturnId(msg, client)
{
    
    let tmp = await secret.findFinal(`${msg.author.id}`)
        if(tmp.length == 0)
    {
        await secret.newSave(`${msg.author.id}`);
        setTimeout(
            async function() {
                tmp = await secret.findFinal(`${msg.author.id}`);
                return process(tmp[0], msg, client);
            }, 1000);
     }
    else {
        return process(tmp[0], msg, client);
    }
    //console.log(await tmp);
}


function process(id, msg, client)
{
    var tmpId = `${id._id}`;
    const embedSecret = new Discord.MessageEmbed()
  .setColor(id.color)
  .setDescription(`**${tmpId.substring(5, 12)}:** ` + msg.content.substring(5, msg.content.length));

  client.channels.cache.get('803143988696973362').send(embedSecret);  // 803143988696973362  791119368070496266
}

