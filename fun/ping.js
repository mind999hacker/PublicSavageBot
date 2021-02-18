const Discord = require("discord.js");


module.exports.run = async (client, message, args, config) => {
    if(message.mentions.members.first()){
        const role = message.member.roles.cache.find(role => role.name === "PINGER");
    if (role !== undefined){
        message.member.roles.remove(role);
        let userPinged = `<@${message.mentions.members.first().user.id}>`;
        for(var i = 0;i<5;i++)
        {
            message.channel.send(userPinged);
        }

    }
    else{
        message.reply("Sorry you need to buy that first by using +shop");
    }}
    else{
        message.reply("please @ someone");
    }
};