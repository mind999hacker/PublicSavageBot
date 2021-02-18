const Discord = require("discord.js");
const Money = require("discord-xp");


module.exports.run = async (client, message, args, config) => {

    var ogUser = message.author.id;

    const filter = (user) => {
        console.log(user)
         return user.id === message.author.id;
    };
   
   const item = [
       {"item":"PINGER","price":10000},
       {"item":"EVERYONE","price":100000}
    ];
   var displayItem = ``;
   for(var i = 0;i<item.length;i++)
   {
       displayItem+= `${i} - ${item[i].item} $${item[i].price}\n`
   }
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Store")
    .setDescription(displayItem);

    let msg =  await message.channel.send(embed);

    reactionHandler(msg, ogUser, async function(tmp){

        var itemReact = parseFloat(tmp)
        if(itemReact > item.length - 1 || isNaN(itemReact))
        {
            message.channel.send("That is not a valid item try again please");
        }
        else{
            let money = await Money.fetch(message.author.id, message.guild.id);
            if(money.xp>item[itemReact].price)
            {
            var store = item[itemReact].item;

            if (message.member.roles.cache.find(role => role.name === store)){
                return message.reply(`You alr have ${store}`);
            } 
            var role = message.guild.roles.cache.find(role => role.name === store);
            if(role === undefined)
            {
                return message.channel.send("That is not a item created yet plz contact server mod or admin to create it!");
            }
            await Money.subtractXp(message.author.id, message.guild.id, item[itemReact].price);
            message.member.roles.add(role);
            message.channel.send(`Success! You bought ${store}!`);
        }
        else{
            message.channel.send("Sorry you dont have enough money for that..");
        }
        }

    });

};

async function reactionHandler(msg,ogUser,callback)
{

    const filter = m => m.author.id === ogUser;//m.content.includes('discord') && m.author.id === ogUser;
    const collector = msg.channel.createMessageCollector(filter, { max: 1, time: 15000 });
     collector.on('collect', m => {
        return callback(m.content);
    });

    collector.on('end', collected => {
        if(collected.size == 0)
        {
            msg.delete();
            msg.channel.send("No response shop closed");
        }
       
    });


}