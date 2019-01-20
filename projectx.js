const Discord = require('discord.js');
const Welcome = require("discord-welcome");
const bot = new Discord.Client();
const responseObject = {
  
  ",xp ix9ine_PX": "ix9ine_PX: 18398xp",
  ",xp PX_TopCrits": "PX_TopCrits: 58443xp",
  ",xp PX_Jxssx_": "PX_Jxssx_: 57690xp",
  ",xp PX_Shanilla": "PX_Shanilla: 70661xp",
  ",xp JokerHD": "JokerHD: 55519xp",
  ",xp RiRiJane": "RiRiJane: 263844xp",
  ",xp PX_Shanilla": "PX_Shanilla: 70756xp",
   ",xp xSilentPainx": "xSilentPainx: 156519xp",
     ",xp PX_MacJakob": "PX_MacJakob: 1689xp",
  ",xp PX_ToniStark": "PX_ToniStark: 60264xp",
  ",xp flavia": "flavia: 275356xp",  
    ",xp PX_WolfoLP": "PX_WolfoLP: 4000xp", 
    ",xp aa5z17": "aa5z17: 56707xp",  
      ",xp Structure": "Structure: 55067xp",  
 ",info CR_Pexxes": "WAS DAS?", 
    ",xp PX_Mxlandrs": "PX_Mxlandrs: 30128xp"
  
};
const sayObject = {
  "hi ProjectX": "Hi!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "schau Katzenvideos": "ok",
  "spiel Fortnite": "Nö",
  "oof": "big oof",
  "aaa": "nerv nicht",
  "hahaha": "rofl",
  
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
    message.reply(responseObject[message.content]);
  }
  
   if(sayObject[message.content]) {
    message.channel.send(sayObject[message.content]);
  }


 }

  
 

);
Welcome(bot, {

  publicmsg : "Willkommen bei Project:x: @MEMBER, nun bist du Teil der :x:-Gemeinschaft :heart: \nBitte stelle dich bei <#523059031603150849>  kurz vor:fire:",
  publicchannel : "523054754113257483"
  })
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
