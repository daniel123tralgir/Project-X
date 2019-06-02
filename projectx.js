const Discord = require('discord.js');


const Welcome = require("./welcome.js");
const bot = new Discord.Client();
require('events').EventEmitter.defaultMaxListeners = 0

const responseObject = {

  "bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  
    "Bewerber": "Danke für die Bewerbung! Die @/Clan-Anführer und @/Clan-Vice-Anführer werden sich so bald wie möglich darum kümmern.",  

  
};
const thisWord = "something";
const sayObject = {
  "play": "nein",
    "Play": "nein",
    "PLAY": "NEIN",
    "haha": "witzig...",
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
  "schau Katzenvideos": "ok",
  "oof": "big oof",
  "tja": "kaTJA",
    "TJA": "kaTJA",
      "ik": "terIK",
      "IK": "terIK",
      "Ik": "terIK",
      "werner": "Werner will dir nicht antworten",
      "Werner": "Werner will dir nicht antworten",
        "WERNER": "Werner will dir nicht antworten",
        "werner?": "Werner will dir nicht antworten",
      "Werner?": "Werner will dir nicht antworten",
        "WERNER?": "Werner will dir nicht antworten",
     "Tja": "kaTJA",
              "koala?": "= Noob",
        "alisa": "mag Fisch",
        "Alisa": "mag Fisch",
        "oh": "yeah nahui",
        "ach komm": "ja",
  "hahaha": "rofl",
    "Hahaha": "rofl",
    "HAHAHA": "ROFL LMAO XD LOL"
  
  
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
  if(message.content.toLowerCase().includes(thisWord)) {
    message.channel.send('is geil');
}

  }
);

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
  if (message.content.toLowerCase() === 'katja') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('ich liebe dich');
}else{
    message.channel.send('is geil');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'gn') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Nein');
}else{
    message.channel.send('Gute Nacht Schätzchen;)');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'gn8') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Nein');
}else{
    message.channel.send('Gute Nacht Schätzchen;)');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'bb') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Geh weg');
}else{
    message.channel.send('Tschüss;)');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'bye') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Geh weg');
}else{
    message.channel.send('auf wiederhören');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'afk') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('halts maul Koala');
}else{
    message.channel.send('halts maul Werner');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'spiel fortnite') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('okay');
          bot.user.setActivity("Fortnite",{type: "PLAYING"} )
}else{
    message.channel.send('kein Bock');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'spiel night dream') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('okay');
          bot.user.setActivity("NIGHT DREAM",{type: "PLAYING"} )
}else{
    message.channel.send('kein Bock');
}

  }
});
//new
bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'pass auf koala auf') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('Gerne;))))');
          bot.user.setActivity("Koala",{type: "WATCHING"} )}
    else if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('Koala, hör auf damit');
}else{
    message.channel.send('kein Bock');
}

  }
});
//new
  bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'schau xxx') {
    if(message.member.roles.find(x => x.name === "Admin")){
    message.channel.send('Gerne!');
          bot.user.setActivity("Pornos",{type: "WATCHING"} )
}else{
    message.channel.send('kein Bock');
}

  }
});
//new
  bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'nö') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('DOCH');
}else{
    message.channel.send('nein');
}

  }
});
//new
  bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'nein') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('doch');
}else{
    message.channel.send('nö');
}

  }
});
//new
  bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'ja') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('nö');
}else{
    message.channel.send('ja');
}

  }
});
//new
  bot.on('message', (message) => {
  if (message.content.toLowerCase() === 'xd') {
    if(message.member.roles.find(x => x.name === "Mod")){
    message.channel.send('hdf Koala');
}else{
    message.channel.send('witzig...');
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
