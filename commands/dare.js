const Discord = require('discord.js');

var truthQuestions = ['','Show the most embarrassing photo on your phone','Show the last five people you texted and what the messages said','Let the rest of the group DM someone from your Instagram account','Eat a raw piece of garlic','Do 100 squats','Show us your screen time report','Keep three ice cubes in your mouth until they melt','Say something dirty to the person on your left','Give a foot massage to the person on your right','Put 10 different available liquids into a cup and drink it','Yell out the first word that comes to your mind','Give a lap dance to someone of your choice','Remove four items of clothing','Like the first 15 posts on your any social media feed','Eat a spoonful of mustard','Keep your eyes closed until its your go again','Seductively eat a banana','Empty out your wallet/purse and show everyone whats inside','Pretend to be the person to your right for 10 minutes','Eat a snack without using your hands','Say two honest things about everyone else in the group','Twerk for a minute','Try and make the group laugh as quickly as possible','Try to put your whole fist in your mouth','Tell everyone an embarrassing story about yourself','Try to lick your elbow','Post the oldest selfie on your phone on Instagram Stories','Tell the saddest story you know','Howl like a wolf for two minutes','Dance without music for two minutes','Pole dance with an imaginary pole','Let someone else tickle you and try not to laugh','Put as many snacks into your mouth at once as you can','Scroll through your phone book until someone says stop. You either have to call or delete that person.','Down your drink (responsibly)','Try and make yourself cry in front of the group','Tell the group two truths and a lie, and they have to guess which one the lie is','Show off your secret talent','Reply to the first five Instagram Stories on your timeline','Share the first celebrity on your timelines Instagram to your Story','Put on as many layers as possible in 60 seconds','Fill your mouth with drink and gargle your answer to the next Truth','Smile as widely as you can and hold it for two minutes'];
var questionAsked = [];
module.exports.run = async (client, message, args, config) => {

    message.reply(truthQuestions[getNumber()]);
};

function getNumber()
{
    let question = Math.floor(Math.random() * truthQuestions.length) + 1;
    if(questionAsked.length < 11)
    {
        for(var i = 0;i<questionAsked.length;i++)
        {
            let tmp = questionAsked[i];
            if(tmp === question)
            {
                i = questionAsked.length;

                return getNumber();
            }
        }
    }
    if(questionAsked.length === 10)
    {
        questionAsked.splice(0,11);
    }
    questionAsked[questionAsked.length] = question;
    return question;
}