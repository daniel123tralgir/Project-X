const Discord = require('discord.js');
const Welcome = require("./welcome.js");
const bot = new Discord.Client();
const responseObject = {

  "bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  
    "Bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  

  
};
const sayObject = {
  "afk": "	halts maul werner",
  "play": "nein",
  "xd": "witzig...",
  "deutschland": "	Lebt",
  "spiel Fortnite": "Nö",
  "oof": "big oof",
  "aaa": "nerv nicht",
    "ouf": "big ouf",
    "alter": "17",
    "nerv nicht": "ok cool",
    "was das": "Pizza?",

      "Ja": "ja",


        "Nein": "nö",
       
        "nö": "nein",

          "bye": "auf wiederhören",
          "bb": "schüss",
          "gn": "Gute Nacht Schätzchen;)",        
  "gn8": "Gute Nacht",
          "wow": "sry ich kann nix",
  
  "?play": "kein Bock"
  
};


bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    bot.user.setActivity("DEUTSCHLAND NERVT",{type: "PLAYING"} )
      console.log("Deutschland Nervt ist Online!");



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
)

 bot.on('message', (message) => {
  if(message.member.roles.has(581190930950782978)) { // do nothing
 message.reply('bismalstill');
}

else{
  msg.channel.send('bismallut');

}}

);

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
