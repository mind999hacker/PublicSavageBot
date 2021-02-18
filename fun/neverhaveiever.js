const Discord = require("discord.js");
var fs = require("fs");


module.exports.run = async (client, message, args, config, nsfw) => {
    if(nsfw)
    {
        var file = require(`../jsonFiles/neverhaveievernsfw.json`);
        message.channel.send(file[Math.floor(Math.random()*file.length)]);
    }
    else{

        var file = require(`../jsonFiles/neverhaveiever.json`);
        message.channel.send(file[Math.floor(Math.random()*file.length)]);

    }


    
};
