const Discord = require('discord.js');
const Welcome = require("./welcome.js");
const bot = new Discord.Client();
const responseObject = {

  "bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  
    "Bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  
  ",xp ix9ine": "ix9ine_PX: constxp",
  ",xp TopCrits": "PX_TopCrits: constxp",
  ",xp PX_Jxssx_": "PX_Jxssx_: constxp",
  ",xp PX_Shanilla": "PX_Shanilla: constxp",
  ",xp JokerHD": "JokerHD: constxp",
  ",xp RiRiJane": "RiRiJane: constxp",
  ",xp PX_Shanilla": "PX_Shanilla: constxp",
   ",xp xSilentPainx": "xSilentPainx: constxp",
     ",xp PX_MacJakob": "PX_MacJakob: constxp",
  ",xp PX_ToniStark": "PX_ToniStark: constxp",
  ",xp flavia": "flavia: constxp",  
    ",xp PX_WolfoLP": "PX_WolfoLP: constxp", 
    ",xp aa5z17": "aa5z17: constxp",  
      ",xp Structure": "Structure: constxp",  

    ",xp PX_Mxlandrs": "PX_Mxlandrs: constxp"
  
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
  privatemsg : "Willkommen bei Project X!",
  publicmsg : "Willkommen bei Project:x: @MEMBER, nun bist du Teil der :x:-Gemeinschaft :heart: \nBitte stelle dich bei <#523059031603150849>  kurz vor:fire:",
  publicchannel : "523054754113257483",
  publicmsg1 : "@MEMBER hat den Server verlassen. RIP, die Werwölfe haben dich erwischt.:slight_frown:",
  publicchannel1 : "523054754113257483"

  })
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
