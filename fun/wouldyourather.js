const Discord = require("discord.js");
const request = require('node-superfetch');



module.exports.run = async (client, message, args, config) => {

    let totalResult;
    let option1Perc;
    let option2Perc;
    let URLresult;
    let option1;
    let option2;
   
    const { text } = await request.get('http://either.io/');
     URLresult = await JSON.parse(text.match(/window.initial_question = (\{.+\})/)[1]).question;

     const url = `http://either.io/${URLresult.id}/${URLresult.slug}`;

     option1 = await URLresult.option_1;
     option2 = await URLresult.option_2;

     totalResult = parseFloat(URLresult.option1_total) + parseFloat(URLresult.option2_total);

     option1Perc = (parseFloat(URLresult.option1_total)/totalResult) * 100;
     option2Perc =  (parseFloat(URLresult.option2_total)/totalResult) * 100;
    

    if(option1Perc >= option2Perc)
    {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Would You Rather')
    .setAuthor(`By ${URLresult.display_name}`)
    .setURL(url)
	.setDescription(`${ option1} **or** ${ option2}?`)
	.addField(
		'Global Results', `First one won by ${Math.round(option1Perc)}% with ${URLresult.option1_total} votes` 
    );
    
    message.channel.send(exampleEmbed);

    }
    else{
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Would You Rather')
    .setAuthor(`By ${URLresult.display_name}`)
    .setURL(url)
	.setDescription(`${ option1} **or** ${ option2}?`)
	.addField(
		'Global Results', `Second one won by ${Math.round(option2Perc)}% with ${URLresult.option2_total} votes` 
    );
    
    message.channel.send(exampleEmbed);

    }


}