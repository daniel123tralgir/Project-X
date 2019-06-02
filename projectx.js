const Discord = require('discord.js');


const Welcome = require("./welcome.js");
const bot = new Discord.Client();
require('events').EventEmitter.defaultMaxListeners = 0

const responseObject = {

  "bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  
    "Bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  

  
};
const thisWord = "koala";
const thisWordone = "werner";
const thisWordtwo = "haha";
const sayObject = {
  "play": "nein",
    "Play": "nein",
    "PLAY": "NEIN",
  "deutschland": "Lebt",
    "Deutschland": "Lebt",
    "DEUTSCHLAND": "LEBT",
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
  "wow": "sry ich kann nix",
  "hellwach": "ok cool",
  "wow": "sry ich kann nix",
  "Wow": "sry ich kann nix",
  "WOW": "SRY ICH KANN NIX",
  "?play": "kein Bock",
   "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "oof": "big oof",
  "tja": "kaTJA",
    "TJA": "kaTJA",
      "ik": "terIK",
      "IK": "terIK",
      "Ik": "terIK",
        "wtf": "hö",
        "WTF": "HÖ",
        "Wtf": "hö",
          "huh": "hö",
        "HUH": "HÖ",
        "Huh": "hö",
     "Tja": "kaTJA",
              "koala?": "= Noob",
        "alisa": "mag Fisch",
        "Alisa": "mag Fisch",
        "oh": "yeah nahui",
        "ach komm": "ja",
      "halts maul": "sry",
        "halts Maul": "sry",
        "Halts Maul": "sry",     
        "HALTS MAUL": "SRY",
        "why you bully me": "weil du ein Noob bist",
        "why you bully me?": "weil du ein Noob bist",
          "Why you bully me?": "weil du ein Noob bist",
          "WHY YOU BULLY ME?": "weil du ein NOOB bist",
            "Why you bully me": "weil du ein Noob bist",
          "WHY YOU BULLY ME": "weil du ein NOOB bist",
  "aha": "achso",
  "Aha": "achso",
    "AHA": "ACHSO",
    "LOL": "HDF",
    "lol": "hdf",
    "Lol": "hdf",
      "wann?": "in 20 Jahren",
      "Wann?": "in 20 Jahren",
      "WANN?": "IN 20 JAHREN",
        "wann": "in 20 Jahren",
        "WANN": "IN 20 JAHREN",
        "Wann": "in 20 Jahren",
        "OK": "NICHT OKAY...",
        "ok": "nicht okay...",
        "Ok": "nicht okay...",
          "OKAY": "NICHT OKAY...",
        "okay": "nicht okay...",
        "Okay": "nicht okay...",
          "OKII": "NICHT OKAY...",
        "okii": "nicht okay...",
        "Okii": "nicht okay...",
            "OKI": "NICHT OKAY...",
        "oki": "nicht okay...",
        "Oki": "nicht okay...",
        "ka": "zu dumm für eine Antwort...",
      "tf": "hö",
        "Tf": "hö",
        "TF": "HÖ",
          "KA": "ZU DUMM FÜR EINE ANTWORT...",
          "Ka": "zu dumm für eine Antwort...",
          "doch": "nein",
          "Doch": "nein",
          "DOCH": "NEIN",
          "hellwach": "ok cool",
            "Hellwach": "ok cool",
            "HELLWACH": "OK COOL",
              "187": "Die Helden von Gestern"
  
  
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
//wordcontain
bot.on('message', (message) => {
   if(message.author.bot) return;

  else{
  if(message.content.toLowerCase().includes(thisWordtwo)) {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('hahaha');
}else{
    message.channel.send('ROFL LMAO XD LOL');
}
}}

  }
);
//wordcontain
bot.on('message', (message) => {
   if(message.author.bot) return;

  else{
  if(message.content.toLowerCase().includes(thisWord)) {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('Koala is geil');
}else{
    message.channel.send('Koala stinkt');
}
}}

  }
);
//wordcontain
bot.on('message', (message) => {
   if(message.author.bot) return;

  else{
  if(message.content.toLowerCase().includes(thisWordone)) {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('Werner  muss dir antworten');
}else{
    message.channel.send('Werner will dir nicht antworten');
}
}}

  }
);


//testmessage.content.toLowerCase()
//test
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'rom') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('ROMeo');
}else{
    message.channel.send('ROMeo');
}

  }}
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'ko') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Kotflügel');
}else{
    message.channel.send('KOala');
}

  }}
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'katja') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('ich liebe dich');
}else{
    message.channel.send('is geil');
}

  }}
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'gn') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Nein');
}else{
    message.channel.send('Gute Nacht Schätzchen;)');
}}

  }
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'gn8') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Nein');
}else{
    message.channel.send('Gute Nacht Schätzchen;)');
}

  }}
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'bb') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Geh weg');
}else{
    message.channel.send('Tschüss;)');
}

  }}
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'bye') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Geh weg');
}else{
    message.channel.send('auf wiederhören');
}
  }
  }
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'afk') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('halts maul Koala');
}else{
    message.channel.send('halts maul Werner');
}

  }}
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'spiel fortnite') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('okay');
          bot.user.setActivity("Fortnite",{type: "PLAYING"} )
}else{
    message.channel.send('kein Bock');
}}

  }
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'spiel night dream') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('okay');
          bot.user.setActivity("NIGHT DREAM",{type: "PLAYING"} )
}else{
    message.channel.send('kein Bock');
}}

  }
});
//new
bot.on('message', (message) => {
     if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'pass auf koala auf') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('Gerne;))))');
          bot.user.setActivity("Koala",{type: "WATCHING"} )}
    else if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Koala, hör auf damit');
}else{
    message.channel.send('kein Bock');
}

  }}
});
//new
  bot.on('message', (message) => {
       if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'schau xxx') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('Gerne!');
          bot.user.setActivity("Pornos",{type: "WATCHING"} )
}else{
    message.channel.send('kein Bock');
}

  }}
});
//new
  bot.on('message', (message) => {
       if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'nö') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('DOCH');
}else{
    message.channel.send('nein');
}
  }
  }
});
//new
  bot.on('message', (message) => {
       if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'nein') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('doch');
}else{
    message.channel.send('nö');
}}

  }
});
//new
  bot.on('message', (message) => {
       if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'ja') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('nö');
}else{
    message.channel.send('ja');
}
  }
  }
});
//new
  bot.on('message', (message) => {
       if(message.author.bot) return;

  else{
  if (message.content.toLowerCase() === 'xd') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('hdf Koala');
}else{
    message.channel.send('witzig...');
}
  }
  }
});
//new


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
