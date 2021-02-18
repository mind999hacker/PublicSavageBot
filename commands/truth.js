const Discord = require('discord.js');

var truthQuestions = ['','When was the last time you lied?','When was the last time you cried?','Whats your biggest fear?','Whats your biggest fantasy?','Do you have any fetishes?','Whats something youre glad your mum doesnt know about you?','Have you ever cheated on someone?','Whats the worst thing youve ever done?','Whats a secret youve never told anyone?','Do you have a hidden talent?','Who was your first celebrity crush?','What are your thoughts on polyamory?','Whats the worst intimate experience youve ever had?','Have you ever cheated in an exam?','Whats the most drunk youve ever been?','Have you ever broken the law?','Whats the most embarrassing thing youve ever done?','Whats your biggest insecurity?','Have you ever stayed friends with someone because it benefitted you beyond just the friendship?','Whats the biggest mistake youve ever made?','Whats the most disgusting thing youve ever done?','Who would you like to kiss in this room?','Whats the worst thing anyones ever done to you?','Have you ever had a run in with the law?','Whats your worst habit?','Whats the worst thing youve ever said to anyone?','Have you ever peed in the shower?','Whats the strangest dream youve had?','Have you ever been caught doing something you shouldnt have?','Whats the worst date youve been on?','Whats your biggest regret?','Whats the biggest misconception about you?','Have you ever said something you regret about someone in this room?','Whats one thing you wish people knew about you?','Why did your last relationship break down?','Have you ever lied to get out of a bad date?','Whats the most trouble youve been in?','Whats the worst thing youve ever lied about?','Whats the best piece of advice youve ever been given?','Whats your guilty pleasure?','Whats one thing you only do when youre alone?','If you had to get back with an ex, who would you choose?','If you had to cut one friend out of your life, who would it be?','Do you have a favorite friend?'];
var questionAsked = [];
module.exports.run = async (client, message, args, config) => {

    message.channel.send(truthQuestions[getNumber()]);
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