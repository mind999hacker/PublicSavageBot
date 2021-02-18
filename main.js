
const Discord = require("discord.js");
const config = require("./commands/config");
const HangmanGame = require("./fun/hangman-game");
const giveMeAJoke = require("discord-jokes");
const mongoose = require("mongoose");
const Money = require("discord-xp");
const TicTacToe = require("discord-tictactoe");
const client = new Discord.Client(["MANAGE_MESSAGES"]);

if(process.env.mongoDb)
{
  mongoose.connect(
    process.env.mongoDb,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  Money.setURL(
    process.env.mongoDb
  );  
}
else{
  const tokenFile = require("../config/default.json");

  mongoose.connect(
    tokenFile.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  Money.setURL(
    tokenFile.mongoURI
  );  
}

const hangman = new HangmanGame(client);

const prefix = "+";

const fs = require("fs");
const { fetch } = require("discord-xp"); 
const CoupleDb = require("./server");
const couple = new CoupleDb();
const MoneyServerDb = require("./moneySever");
const moneySever = new MoneyServerDb();

//const { find } = require("./server")

//const getFind = find();

client.commands = new Discord.Collection();

const commandsFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandsFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  new TicTacToe(
    {
      language: "en",
      command: "+ttt",
    },
    client
  );
  console.log("active");
  moneySever.connect();
  couple.connect();
  client.user.setActivity('+help', { type: 'LISTENING' });

  //couple.newSave();
});

client.on("message", (message) => {
  if (message.attachments.size == 0 && message.channel.id === '806753181118758974') {
    message.delete();
}
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //unoFile.run(client, message, command, args, config);

  if (
    !message.content.startsWith(prefix) &&
    message.author.id !== "155149108183695360"
  ){
    return;}

  if (command === "helpkoh") {
    const tmp = client.commands.get("randomRoast").execute(message, args);
    client.commands.get("bullykoh").execute(message, args, tmp);
  } 
  else if (command === "helpsidd") {
    const tmp = client.commands.get("randomRoast").execute(message, args);
    client.commands.get("bullysidd").execute(message, args, tmp);
  } else if (command === "helpshahmir") {
    const tmp = client.commands.get("randomRoast").execute(message, args);
    client.commands.get("bullyshahmir").execute(message, args, tmp);
  } else if (command === "helpjeff") {
    const tmp = client.commands.get("randomRoast").execute(message, args);
    client.commands.get("bullyjeff").execute(message, args, tmp);
  } else if (command === "helpethan") {
    const tmp = client.commands.get("randomRoast").execute(message, args);
    client.commands.get("bullyethan").execute(message, args, tmp);
  } else if (command === "helpsahil") {
    const tmp = client.commands.get("randomRoast").execute(message, args);
    client.commands.get("bullysahil").execute(message, args, tmp);
  } else if (command === "help") {
    let commandFile = require(`./commands/help.js`);
    commandFile.run(client, message, args, config);
  } 
  else if(command === 'gayrate')
{
    let commandFile = require(`./fun/gayrate.js`);
    commandFile.run(client, message, args, config);
} 
else if(command === 'shop')
{
    let commandFile = require(`./fun/shop.js`);
    commandFile.run(client, message, args, config);
} 
else if(command === 'wyr')
{
    let commandFile = require(`./fun/wouldyourather.js`);
    commandFile.run(client, message, args, config);
}
  else if(command === 'truth')
{
    let commandFile = require(`./commands/truth.js`);
    commandFile.run(client, message, args, config);
}
else if(command === 'dare')
{
    let commandFile = require(`./commands/dare.js`);
    commandFile.run(client, message, args, config);
}
else if (command === "m") {
    const embed = new Discord.MessageEmbed()
      .setColor("#fc2eff")
      .setTitle("Help - Make Money")
      .setDescription(
        "+work - work every 6hrs to get money\n+payday - get $500 every 30 min\n+cooldowns - check how long to wait to make money\n+flip number t or h ex. +flip 500 h - get double the money you bet if coin lands correct"
      )
      .setTimestamp();
    message.channel.send(embed);
  } else if (command === "u") {
    const embed = new Discord.MessageEmbed()
      .setColor("#fc2eff")
      .setTitle("Help - UseFull")
      .setDescription(
        "+poll question - make a new poll\n+editpoll ID question\n+endpoll ID - get the results of a poll"
      )
      .setTimestamp();
    message.channel.send(embed);
  } else if (command === "r") {
    const embed = new Discord.MessageEmbed()
      .setColor("#fc2eff")
      .setTitle("Help - Roasts")
      .setDescription(
        "+helpkoh - roast Koh\n +helpsidd - roast Sidd\n +helpshahmir - roast Shahmir\n +helpethan - roast Ethan\n +helpjeff - roast Jeff\n +helpsahil - roast Sahil"
      )
      .setTimestamp();
    message.channel.send(embed);
  } else if (command === "f") {
    const embed = new Discord.MessageEmbed()
      .setColor("#fc2eff")
      .setTitle("Help - Fun")
      .setDescription("+dadjokes - get a random dad joke")
      .setTimestamp();
    message.channel.send(embed);
  } else if (command === "g") {
    //message.channel.send('helpcommand');
    const embed = new Discord.MessageEmbed()
      .setColor("#fc2eff")
      .setTitle("Help - Games")
      .setDescription(
        "+hangman - hangman game\n+ttt - tic tac toe\n+ttt @user - play with someone else"
      )
      .setTimestamp();
    message.channel.send(embed);
  } else if (command === "e") {
    //message.channel.send('helpcommand');
    const embed = new Discord.MessageEmbed()
      .setColor("#fc2eff")
      .setTitle("Help - Economy")
      .setDescription(
        "+bal - check balance\n+bal @user - check someone else balance\n+leaderboard or lb - see the rich people of the server\n+t amount @user - transfer your specific amount of money to someone else"
      )
      .setTimestamp();
    message.channel.send(embed);
  } else if (command === "hangman") {
    hangman.newGame(message);
    client.on("message", (wordTry) => {});
  } else if (command === "bal") {
    let commandFile = require(`./economy/balance.js`);
    commandFile.run(client, message, args, config);
  } 
  else if (command === "ping") {
    let commandFile = require(`./fun/ping.js`);
    commandFile.run(client, message, args, config);
  }
  else if (command === "add") {
    let commandFile = require(`./economy/add-money.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "remove") {
    let commandFile = require(`./economy/remove-money.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "t") {
    let commandFile = require(`./economy/transfer.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "work") {
    let commandFile = require(`./economy/work.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "ttt") {
    let commandFile = require(`./fun/ttt.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "leaderboard" || command === "lb") {
    let commandFile = require(`./economy/leaderboard.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "payday") {
    let commandFile = require(`./economy/pay-day.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "cooldowns") {
    let commandFile = require(`./economy/cooldowns.js`);
    commandFile.run(client, message, args, config);
  } else if ((command === "flip") & !message.author.bot) {
    let commandFile = require(`./economy/flip.js`);
    commandFile.run(client, message, args, config);
  } else if (command === "dj") {
    giveMeAJoke.getRandomDadJoke(function (joke) {
      message.channel.send(joke);
    });
  } else if (command === "frc") {
    let commandFile = require(`./fun/frcmeme.js`);
    commandFile.run(client, message, args, config);
  } else if (args[0] === "Watch") {
    let user2 = message.mentions.members.first();
    sendDmBadWord(user2);
    let commandFile = require(`./commands/badword.js`);
    commandFile.run(client, message, args, config);
  } 
  else if(command === 'everyone')
  {
    let commandFile = require(`./fun/everyone.js`);
    commandFile.run(client, message, args, config);
  }
  else if(command === 'send')
  {
    let commandFile = require(`./commands/secretMessage.js`);
    commandFile.run(client, message, args, config, false);
  }
  else if(command === 'resetsend' && (message.author.id === '766812992411009034' || message.author.id === '746541027502063667'))
  {
    let commandFile = require(`./commands/secretMessage.js`);
    commandFile.run(client, message, args, config, true);
  }

  else if(command === 'nhie')
  {
    let commandFile = require(`./fun/neverhaveiever.js`);
    commandFile.run(client, message, args, config, false);
  }
  else if(command === 'nhiensfw')
  {
    let commandFile = require(`./fun/neverhaveiever.js`);
    commandFile.run(client, message, args, config, true);
  }

  else if (command === "editpoll") {
    if (args[0].length !== 18) {
      return message.reply("Correct format is +editpoll ID question");
    }
    const embed = new Discord.MessageEmbed()
      .setColor("#fc2eff")
      .setTitle("Yes or no")
      .setDescription(`${message.content.slice(command.length + 21)}`)
      .addFields({ name: "ID to +editpoll or +endpoll", value: `${args[0]}` })
      .setTimestamp();
    message.channel.messages
      .fetch({ around: `${args[0]}`, limit: 1 })
      .then((msg) => {
        const fetchedMsg = msg.first();

        //console.log(fetchedMsg.embeds[0].title);
        fetchedMsg.edit(embed);
      });
  } else if (command === "endpoll") {
    if (args[0] === undefined) {
      return message.reply("Correct format is +endpoll ID");
    }

    message.channel.messages
      .fetch({ around: `${args[0]}`, limit: 1 })
      .then((msg) => {
        const fetchedMsg = msg.first();

        var tick = fetchedMsg.reactions.cache.get("✅").count;
        var cross = fetchedMsg.reactions.cache.get("❌").count;
        if (tick > cross) {
          const embed = new Discord.MessageEmbed()
            .setColor("#fc2eff")
            .setTitle(`${fetchedMsg.embeds[0].description}`)
            .setDescription(`✅ won by **${tick - cross}** votes more`)
            .setTimestamp();
          message.channel.send(embed);
        } else if (tick === cross) {
          const embed = new Discord.MessageEmbed()
            .setColor("#fc2eff")
            .setTitle(`${fetchedMsg.embeds[0].description}`)
            .setDescription("Its a tie")
            .setTimestamp();
          message.channel.send(embed);
        } else {
          const embed = new Discord.MessageEmbed()
            .setColor("#fc2eff")
            .setTitle(`${fetchedMsg.embeds[0].description}`)
            .setDescription(`❌ won by **${cross - tick}** votes`)
            .setTimestamp();
          message.channel.send(embed);
        }
      });
  } else if (command === "poll") {
    if (args.length === 0) {
      return message.reply("Proper format is +poll question");
    }
    yesNoPollEmbed(message, args, command);
  } else if (command === "hug") {
    let commandFile = require("./fun/hug.js");
    commandFile.run(client, message, args, config);
  } 
  else if (command === "kiss") {
    let commandFile = require("./fun/kiss.js");
    commandFile.run(client, message, args, config);
  }else if (command === "marry") {
    let commandFile = require("./fun/marry.js");
    commandFile.run(client, message, args, config);
  } else if (command === "divorce") {
    let commandFile = require("./fun/divorce.js");
    commandFile.run(client, message, args, config);
  }
});


async function sendDmBadWord(username)
{
   let user = await client.users.fetch('766812992411009034');
   user.send(`${username} sent a bad word... Thank you!`);
}

async function yesNoPollEmbed(message, args, command) {
  const embed = new Discord.MessageEmbed()
    .setColor("#fc2eff")
    .setTitle(`Yes or no by ${message.author.username}`)
    .setDescription(`${message.content.slice(command.length + 1)}`)
    .addFields({ name: "ID to +editpoll or +endpoll", value: "checking..." })
    .setTimestamp();
  let sent = await message.channel.send(embed);
  let id = sent.id;
  const embed2 = new Discord.MessageEmbed()
    .setColor("#fc2eff")
    .setTitle(`Yes or no by ${message.author.username}`)
    .setDescription(`${message.content.slice(command.length + 1)}`)
    .addFields({ name: "ID to +editpoll or +endpoll", value: `${id}` })
    .setTimestamp();

  message.channel.messages.fetch({ around: `${id}`, limit: 1 }).then((msg) => {
    const fetchedMsg = msg.first();
    fetchedMsg.edit(embed2);
    fetchedMsg.react("✅");
    fetchedMsg.react("❌");
    //fetchedMsg.edit('test');
  });
}
if(process.env.token)
{
client.login(process.env.token);
}
else{
  const tokenFile = require("../config/default.json");
 client.login(tokenFile.token);

}


