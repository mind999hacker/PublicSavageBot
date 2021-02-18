const Discord = require("discord.js");


module.exports.run = async (client, message, args, config) => {

    const everyoneEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("gay r8 machine")
  .setDescription(
    `You are ${Math.round(Math.random() * 99) + 1}% gay :gay_pride_flag:`
  );

  const mindhacker999Embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("gay r8 machine")
  .setDescription(
    'You are 0% gay :gay_pride_flag:'
  );
  const connerEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("gay r8 machine")
  .setDescription(
    'You are 1000% gay :gay_pride_flag:'
  );

  if (message.author.id === '766812992411009034')
  {
      message.channel.send(mindhacker999Embed);
  }
  else if(message.author.id === '783903062333849600')
  {
    message.channel.send(connerEmbed);
  }
  else{
    message.channel.send(everyoneEmbed);  
}
  };