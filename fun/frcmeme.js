const Discord = require("discord.js");
const Money = require("discord-xp");
var cheerio = require("cheerio");
var request = require("request");

module.exports.run = async (client, message, args, config) => {
  image(message);
};

function image(message) {
  /* extract search query from message */
  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + "frcmeme",
    method: "GET",
    headers: {
      Accept: "text/html",
      "User-Agent": "Chrome",
    },
  };
  request(options, function (error, response, responseBody) {
    if (error) {
      // handle error
      return;
    }

    $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)

    var links = $(".image a.link");

    var urls = new Array(links.length)
      .fill(0)
      .map((v, i) => links.eq(i).attr("href"));
    if (!urls.length) {
      return message.reply("Error try again or contact mind.hacker999");
    }
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
  });
}
