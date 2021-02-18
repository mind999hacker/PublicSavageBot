const Discord = require("discord.js");


module.exports.run = async (client, message, args, config) => {
        const role = message.member.roles.cache.find(role => role.name === "EVERYONE");
    if (role !== undefined){
        message.member.roles.remove(role);
        let userPinged = `@everyone`;
        for(var i = 0;i<5;i++)
        {
            message.channel.send(userPinged);
        }

    }
    else{
        message.reply("Sorry you need to buy that first by using +shop");
    }
      
};