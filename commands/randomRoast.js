module.exports = {
  name: "randomRoast",
  description: "random roast",
  execute(message, args) {
    function getRandomInt(tmp) {
      return Math.floor(Math.random() * Math.floor(tmp));
    }

    var roasts = [
      "You're the reason God created the middle finger",
      "You are more disappointing than an unsalted pretzel",
      "Your face makes onions cry",
      "I’m not a nerd, I’m just smarter than you",
      "darn it",
      "Keep rolling your eyes, you might eventually find a brain",
      "Dum dum",
      "Idot",
      "Deserve nothing",
      "I thought of you today. It reminded me to take out the trash",
    ];
    return roasts[getRandomInt(roasts.length)];
  },
};
