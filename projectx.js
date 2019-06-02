const Discord = require('discord.js');
const Welcome = require("./welcome.js");
const bot = new Discord.Client();
const responseObject = {

  "bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  
    "Bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  

  
};
const sayObject = {
  "afk": "halts maul werner",
    "Afk": "halts maul werner",
      "AFK": "halts maul werner",
  "play": "nein",
    "Play": "nein",
    "PLAY": "NEIN",
  "xD": "witzig...",
    "Xd": "witzig...",
    "XD": "witzig...",
    "haha": "witzig...",
  "deutschland": "Lebt",
    "Deutschland": "Lebt",
    "DEUTSCHLAND": "LEBT",
  "spiel Fortnite": "Nö",
    "Spiel Fortnite": "Nö",
    "spiel fortnite": "Nö",
    "SPIEL FORTNITE": "NÖ",
  "oof": "big oof",
    "Oof": "big oof",
    "OOF": "BIG OOF",
  "aaa": "nerv nicht",
    "Aaa": "nerv nicht",
    "AAA": "NERV NICHT",
  "ouf": "big ouf",
    "Ouf": "big ouf",
    "OUF": "BIG OUF",
  "alter": "9",
    "Alter": "8",
    "ALTER": "7",
  "nerv nicht": "ok cool",
    "Nerv nicht": "ok cool",
    "NERV NICHT": "OK COOL",
  "was das": "Pizza?",
    "WAS DAS": "PIZZA?",
      "Was das": "Pizza?",
    "was Das": "Pizza?",
  "Ja": "ja",
    "ja": "ja",
    "JA": "NEIN",
  "Nein": "nö",
    "nein": "nö",
      "NEIN": "NÖ",
  "nö": "nein",
    "Nö": "nein",
    "NÖ": "NEIN",
  "bye": "auf wiederhören",
    "Bye": "auf wiederhören",
    "BYE": "auf wiederhören",
  "bb": "schüss",
  "gn": "Gute Nacht Schätzchen;)",        
  "gn8": "Gute Nacht",
  "wow": "sry ich kann nix",
  "hellwach": "ok cool",
  "wow": "sry ich kann nix",
  "wow": "sry ich kann nix",
  "wow": "sry ich kann nix",
  "wow": "sry ich kann nix",
  "?play": "kein Bock"
  
};


bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    bot.user.setActivity("DAY DREAM",{type: "PLAYING"} )
      console.log("Deutschland Nervt ist Online!");



    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})
//testmessage.content.toLowerCase()
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'koala') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('is geil');
}else{
    message.channel.send('stinkt');
}

  }
});
//test




bot.on('message', (message) => {

  if(message.author.bot) return;

  else{

    
    if(responseObject[message.content]) {
      message.reply(responseObject[message.content]);
    }
  
    if(sayObject[message.content]) {
    message.channel.send(sayObject[message.content]);
    }

  }
}
)
;

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
