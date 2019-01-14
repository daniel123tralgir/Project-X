const Discord = require('discord.js');
const Welcome = require("discord-welcome");
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
      console.log("ProjectX ist Online!");



    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})


bot.on('message', (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }


 }

  
 

);
Welcome(bot, {

  publicmsg : "Willkommen bei Project:x: @MEMBER, nun bist du Teil der :x:-Gemeinschaft :heart: \nBitte stelle dich bei #vorstellung  kurz vor:fire:",
  publicchannel : "523054754113257483"
  })
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
