const Discord = require('discord.js');
const bot = new Discord.Client();
const responseObject = {
  "hi ProjectX": "Hi!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "schau Katzenvideos": "ok"
};


bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    bot.user.setActivity("Project X",{type: "PLAYING"} )



    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})


bot.on('message', (message) => {
    if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }


 



   

);
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
