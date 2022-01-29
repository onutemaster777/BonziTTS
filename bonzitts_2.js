const Discord = require('discord.js');
const client = new Discord.Client();
var os 	= require('os-utils');
const fs = require('fs');
const puppeteer = require('puppeteer');
const { exec } = require('child_process');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.find(channel => channel.name === 'general').send("I am BonziTTS. We will read anything whatever if you want (wrapper).");
  client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Generating voices | Use tts!help',
        type: 'PLAYING',
        url: 'http://ius.bonkeyword.tk'
    }
})
});
client.on('message', (message) => {
	var emojis = ["😀","😁","😂","😃","😄","😅","😆","😇","😈","👿","😉","😊","☺️","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","👣","👤","👥","👶","👶🏻","👶🏼","👶🏽","👶🏾","👶🏿","👦","👦🏻","👦🏼","👦🏽","👦🏾","👦🏿","👧","👧🏻","👧🏼","👧🏽","👧🏾","👧🏿","👨","👨🏻","👨🏼","👨🏽","👨🏾","👨🏿","👩","👩🏻","👩🏼","👩🏽","👩🏾","👩🏿","👪","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👫","👬","👭","👯","👰","👰🏻","👰🏼","👰🏽","👰🏾","👰🏿","👱","👱🏻","👱🏼","👱🏽","👱🏾","👱🏿","👲","👲🏻","👲🏼","👲🏽","👲🏾","👲🏿","👳","👳🏻","👳🏼","👳🏽","👳🏾","👳🏿","👴","👴🏻","👴🏼","👴🏽","👴🏾","👴🏿","👵","👵🏻","👵🏼","👵🏽","👵🏾","👵🏿","👮","👮🏻","👮🏼","👮🏽","👮🏾","👮🏿","👷","👷🏻","👷🏼","👷🏽","👷🏾","👷🏿","👸","👸🏻","👸🏼","👸🏽","👸🏾","👸🏿","💂","💂🏻","💂🏼","💂🏽","💂🏾","💂🏿","👼","👼🏻","👼🏼","👼🏽","👼🏾","👼🏿","🎅","🎅🏻","🎅🏼","🎅🏽","🎅🏾","🎅🏿","👻","👹","👺","💩","💀","👽","👾","🙇","🙇🏻","🙇🏼","🙇🏽","🙇🏾","🙇🏿","💁","💁🏻","💁🏼","💁🏽","💁🏾","💁🏿","🙅","🙅🏻","🙅🏼","🙅🏽","🙅🏾","🙅🏿","🙆","🙆🏻","🙆🏼","🙆🏽","🙆🏾","🙆🏿","🙋","🙋🏻","🙋🏼","🙋🏽","🙋🏾","🙋🏿","🙎","🙎🏻","🙎🏼","🙎🏽","🙎🏾","🙎🏿","🙍","🙍🏻","🙍🏼","🙍🏽","🙍🏾","🙍🏿","💆","💆🏻","💆🏼","💆🏽","💆🏾","💆🏿","💇","💇🏻","💇🏼","💇🏽","💇🏾","💇🏿","💑","👩‍❤️‍👩","👨‍❤️‍👨","💏","👩‍❤️‍💋‍👩","👨‍❤️‍💋‍👨","🙌","🙌🏻","🙌🏼","🙌🏽","🙌🏾","🙌🏿","👏","👏🏻","👏🏼","👏🏽","👏🏾","👏🏿","👂","👂🏻","👂🏼","👂🏽","👂🏾","👂🏿","👀","👃","👃🏻","👃🏼","👃🏽","👃🏾","👃🏿","👄","💋","👅","💅","💅🏻","💅🏼","💅🏽","💅🏾","💅🏿","👋","👋🏻","👋🏼","👋🏽","👋🏾","👋🏿","👍","👍🏻","👍🏼","👍🏽","👍🏾","👍🏿","👎","👎🏻","👎🏼","👎🏽","👎🏾","👎🏿","☝","☝🏻","☝🏼","☝🏽","☝🏾","☝🏿","👆","👆🏻","👆🏼","👆🏽","👆🏾","👆🏿","👇","👇🏻","👇🏼","👇🏽","👇🏾","👇🏿","👈","👈🏻","👈🏼","👈🏽","👈🏾","👈🏿","👉","👉🏻","👉🏼","👉🏽","👉🏾","👉🏿","👌","👌🏻","👌🏼","👌🏽","👌🏾","👌🏿","✌","✌🏻","✌🏼","✌🏽","✌🏾","✌🏿","👊","👊🏻","👊🏼","👊🏽","👊🏾","👊🏿","✊","✊🏻","✊🏼","✊🏽","✊🏾","✊🏿","✋","✋🏻","✋🏼","✋🏽","✋🏾","✋🏿","💪","💪🏻","💪🏼","💪🏽","💪🏾","💪🏿","👐","👐🏻","👐🏼","👐🏽","👐🏾","👐🏿","🙏","🙏🏻","🙏🏼","🙏🏽","🙏🏾","🙏🏿","🌱","🌲","🌳","🌴","🌵","🌷","🌸","🌹","🌺","🌻","🌼","💐","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🌰","🐀","🐁","🐭","🐹","🐂","🐃","🐄","🐮","🐅","🐆","🐯","🐇","🐰","🐈","🐱","🐎","🐴","🐏","🐑","🐐","🐓","🐔","🐤","🐣","🐥","🐦","🐧","🐘","🐪","🐫","🐗","🐖","🐷","🐽","🐕","🐩","🐶","🐺","🐻","🐨","🐼","🐵","🙈","🙉","🙊","🐒","🐉","🐲","🐊","🐍","🐢","🐸","🐋","🐳","🐬","🐙","🐟","🐠","🐡","🐚","🐌","🐛","🐜","🐝","🐞","🐾","⚡️","🔥","🌙","☀️","⛅️","☁️","💧","💦","☔️","💨","❄️","🌟","⭐️","🌠","🌄","🌅","🌈","🌊","🌋","🌌","🗻","🗾","🌐","🌍","🌎","🌏","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌚","🌝","🌛","🌜","🌞","🍅","🍆","🌽","🍠","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🍔","🍕","🍖","🍗","🍘","🍙","🍚","🍛","🍜","🍝","🍞","🍟","🍡","🍢","🍣","🍤","🍥","🍦","🍧","🍨","🍩","🍪","🍫","🍬","🍭","🍮","🍯","🍰","🍱","🍲","🍳","🍴","🍵","☕️","🍶","🍷","🍸","🍹","🍺","🍻","🍼","🎀","🎁","🎂","🎃","🎄","🎋","🎍","🎑","🎆","🎇","🎉","🎊","🎈","💫","✨","💥","🎓","👑","🎎","🎏","🎐","🎌","🏮","💍","❤️","💔","💌","💕","💞","💓","💗","💖","💘","💝","💟","💜","💛","💚","💙","🏃","🏃🏻","🏃🏼","🏃🏽","🏃🏾","🏃🏿","🚶","🚶🏻","🚶🏼","🚶🏽","🚶🏾","🚶🏿","💃","💃🏻","💃🏼","💃🏽","💃🏾","💃🏿","🚣","🚣🏻","🚣🏼","🚣🏽","🚣🏾","🚣🏿","🏊","🏊🏻","🏊🏼","🏊🏽","🏊🏾","🏊🏿","🏄","🏄🏻","🏄🏼","🏄🏽","🏄🏾","🏄🏿","🛀","🛀🏻","🛀🏼","🛀🏽","🛀🏾","🛀🏿","🏂","🎿","⛄️","🚴","🚴🏻","🚴🏼","🚴🏽","🚴🏾","🚴🏿","🚵","🚵🏻","🚵🏼","🚵🏽","🚵🏾","🚵🏿","🏇","🏇🏻","🏇🏼","🏇🏽","🏇🏾","🏇🏿","⛺️","🎣","⚽️","🏀","🏈","⚾️","🎾","🏉","⛳️","🏆","🎽","🏁","🎹","🎸","🎻","🎷","🎺","🎵","🎶","🎼","🎧","🎤","🎭","🎫","🎩","🎪","🎬","🎨","🎯","🎱","🎳","🎰","🎲","🎮","🎴","🃏","🀄️","🎠","🎡","🎢","🚃","🚞","🚂","🚋","🚝","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚌","🚍","🚎","🚐","🚑","🚒","🚓","🚔","🚨","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🚲","🚏","⛽️","🚧","🚦","🚥","🚀","🚁","✈️","💺","⚓️","🚢","🚤","⛵️","🚡","🚠","🚟","🛂","🛃","🛄","🛅","💴","💶","💷","💵","🗽","🗿","🌁","🗼","⛲️","🏰","🏯","🌇","🌆","🌃","🌉","🏠","🏡","🏢","🏬","🏭","🏣","🏤","🏥","🏦","🏨","🏩","💒","⛪️","🏪","🏫","🇦🇺","🇦🇹","🇧🇪","🇧🇷","🇨🇦","🇨🇱","🇨🇳","🇨🇴","🇩🇰","🇫🇮","🇫🇷","🇩🇪","🇭🇰","🇮🇳","🇮🇩","🇮🇪","🇮🇱","🇮🇹","🇯🇵","🇰🇷","🇲🇴","🇲🇾","🇲🇽","🇳🇱","🇳🇿","🇳🇴","🇵🇭","🇵🇱","🇵🇹","🇵🇷","🇷🇺","🇸🇦","🇸🇬","🇿🇦","🇪🇸","🇸🇪","🇨🇭","🇹🇷","🇬🇧","🇺🇸","🇦🇪","🇻🇳","⌚️","📱","📲","💻","⏰","⏳","⌛️","📷","📹","🎥","📺","📻","📟","📞","☎️","📠","💽","💾","💿","📀","📼","🔋","🔌","💡","🔦","📡","💳","💸","💰","💎","🌂","👝","👛","👜","💼","🎒","💄","👓","👒","👡","👠","👢","👞","👟","👙","👗","👘","👚","👕","👔","👖","🚪","🚿","🛁","🚽","💈","💉","💊","🔬","🔭","🔮","🔧","🔪","🔩","🔨","💣","🚬","🔫","🔖","📰","🔑","✉️","📩","📨","📧","📥","📤","📦","📯","📮","📪","📫","📬","📭","📄","📃","📑","📈","📉","📊","📅","📆","🔅","🔆","📜","📋","📖","📓","📔","📒","📕","📗","📘","📙","📚","📇","🔗","📎","📌","✂️","📐","📍","📏","🚩","📁","📂","✒️","✏️","📝","🔏","🔐","🔒","🔓","📣","📢","🔈","🔉","🔊","🔇","💤","🔔","🔕","💭","💬","🚸","🔍","🔎","🚫","⛔️","📛","🚷","🚯","🚳","🚱","📵","🔞","🉑","🉐","💮","㊙️","㊗️","🈴","🈵","🈲","🈶","🈚️","🈸","🈺","🈷","🈹","🈳","🈂","🈁","🈯️","💹","❇️","✳️","❎","✅","✴️","📳","📴","🆚","🅰","🅱","🆎","🆑","🅾","🆘","🆔","🅿️","🚾","🆒","🆓","🆕","🆖","🆗","🆙","🏧","♈️","♉️","♊️","♋️","♌️","♍️","♎️","♏️","♐️","♑️","♒️","♓️","🚻","🚹","🚺","🚼","♿️","🚰","🚭","🚮","▶️","◀️","🔼","🔽","⏩","⏪","⏫","⏬","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","🔄","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","#⃣","0⃣","1⃣","2⃣","3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣","🔟","🔢","🔤","🔡","🔠","ℹ️","📶","🎦","🔣","➕","➖","〰","➗","✖️","✔️","🔃","™","©","®","💱","💲","➰","➿","〽️","❗️","❓","❕","❔","‼️","⁉️","❌","⭕️","💯","🔚","🔙","🔛","🔝","🔜","🌀","Ⓜ️","⛎","🔯","🔰","🔱","⚠️","♨️","♻️","💢","💠","♠️","♣️","♥️","♦️","☑️","⚪️","⚫️","🔘","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","▪️","▫️","⬛️","⬜️","◼️","◻️","◾️","◽️","🔲","🔳","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"]
	let msgArray = message.content.split(" "); // Splits the message content with space as a delimiter
  let prefix = "tts!";
  let command = msgArray[0].replace(prefix, ""); // Gets the first element of msgArray and removes the prefix
  let args = msgArray.slice(1); // Remove the first element of msgArray/command and this basically returns the arguments
  // Now here is where you can create your commands
  if(command === "scratch") {
    if(!args[0]) return message.channel.send("https://scratch.mit.edu/projects/" + Math.floor(Math.random()*496724229));
    if(args[1]) return message.reply("array error");
  }
  if(command === "ip") {
    if(!args[0]) return message.channel.send("Here's a random IP: http://" + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254));
    if(args[1]) return message.reply("array error");
  }
  if(command === "web") {
    if(!args[0]) return message.channel.send("http://www." + Math.random().toString(36).slice(Math.floor(Math.random()*-10)) + ".com");
    if(args[1]) return message.reply("array error");
  }
  if(command === "search") {
    if(!args[0]) return message.channel.send("https://www.google.com/search?q=" + Math.random().toString(36).slice(-9) + Math.random().toString(36).slice(-9));
    if(args[1]) return message.reply("array error");
  }
  if(command === "web2") {
	  var httpheader = ["http","https"]
	  var www = ["www.",""]
	  var toplevel = ["ch","lt","lv","ee","de","ru","uk","co","com","net","gov","org","world","online","jp","in","rs","ae","xyz","gq","tk","cf","ml","ga","ua","tr","pt","fr","np","no","kr","it","id","fm","cx","ca","br","bd","au","as","gg","ai","al","ar","bb","gr","hr","edu","biz","club","dev","eco","game","gift","gay","guru","info","wiki","link","one","pro","site","tech","wtf","zone","cat"]
    if(!args[0]) return message.channel.send(httpheader[Math.floor(Math.random()*httpheader.length)] + "://" + www[Math.floor(Math.random()*www.length)] + Math.random().toString(36).slice(-5) + "." + toplevel[Math.floor(Math.random()*toplevel.length)]);
    if(args[1]) return message.reply("array error");
  }
  if(command === "yt") {
    if(!args[0]) return message.channel.send("https://www.youtube.com/channel/UC-qpKEbfivcB74Ju_ftCYpA?sub_confirmation=1");
    if(args[1]) return message.reply("array error");
  }
  if(command === "savetxt") {
    if(!args[0]) return message.reply("Please enter the text to save.");
    if(args[1]) return fs.appendFileSync('discord.txt', args.join(' ') + ' \r\n'); message.channel.send("Saved! " + args.join(' '));
  }
  if(command === "time") {
    if(!args[0]) return message.channel.send(Date());
    if(args[1]) return message.reply("array error");
  }
  if(command === "tts") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #2, American English (TruVoice)" -w "voice.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["voice.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #2, American English (TruVoice)" -w "voice.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["voice.wav"]})}, 3000);
  }
  if(command === "tts-peter") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #1, American English (TruVoice)" -w "peter_genie.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["peter_genie.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #1, American English (TruVoice)" -w "peter_genie.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["peter_genie.wav"]})}, 3000);
  }
  if(command === "tts-eddie") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #3, American English (TruVoice)" -w "eddie_merlin.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["eddie_merlin.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #3, American English (TruVoice)" -w "eddie_merlin.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["eddie_merlin.wav"]})}, 3000);
  }
  if(command === "tts-douglas") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #4, American English (TruVoice)" -w "douglas.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["douglas.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #4, American English (TruVoice)" -w "douglas.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["douglas.wav"]})}, 3000);
  }
  if(command === "tts-biff") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #5, American English (TruVoice)" -w "biff.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["biff.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #5, American English (TruVoice)" -w "biff.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["biff.wav"]})}, 3000);
  }
  if(command === "tts-amos") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #6, American English (TruVoice)" -w "amos.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["amos.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #6, American English (TruVoice)" -w "amos.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["amos.wav"]})}, 3000);
  }
  if(command === "tts-melvin") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #7, American English (TruVoice)" -w "melvin_robby.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["melvin_robby.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #7, American English (TruVoice)" -w "melvin_robby.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["melvin_robby.wav"]})}, 3000);
  }
  if(command === "tts-alex") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #8, American English (TruVoice)" -w "voice.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["alex.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Adult Male #8, American English (TruVoice)" -w "voice.wav" -s 150 -p 40 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["alex.wav"]})}, 3000);
  }
  if(command === "tts-mike") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Mike" -w "mike.wav" -s 150 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["mike.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Mike" -w "mike.wav" -s 150 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["mike.wav"]})}, 3000);
  }
  if(command === "tts-sam") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Sam" -w "sam.wav" -s 150 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["sam.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Sam" -w "sam.wav" -s 150 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["sam.wav"]})}, 3000);
  }
  if(command === "tts-mary") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Mary" -w "mary.wav" -s 150 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["mary.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Mary" -w "mary.wav" -s 150 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["mary.wav"]})}, 3000);
  }
  if(command === "tts-david") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral David" -w "david_caillou.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["david_caillou.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral David" -w "david_caillou.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["david_caillou.wav"]})}, 3000);
  }
   if(command === "tts-duchess") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Duchess" -w "duchess.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["duchess.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Duchess" -w "duchess.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["duchess.wav"]})}, 3000);
  }
   if(command === "tts-duncan") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Duncan" -w "duncan.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["duncan.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Duncan" -w "duncan.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["duncan.wav"]})}, 3000);
  }
   if(command === "tts-lawrence") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Lawrence" -w "lawrence_creeper.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["lawrence_creeper.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Lawrence" -w "lawrence_creeper.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["lawrence_creeper.wav"]})}, 3000);
  }
   if(command === "tts-damien") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Damien" -w "damien_scaryvoice.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["damien_scaryvoice.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Damien" -w "damien_scaryvoice.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["damien_scaryvoice.wav"]})}, 3000);
  }
   if(command === "tts-shouty") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Shouty" -w "shouty.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["shouty.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Shouty" -w "shouty.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["shouty.wav"]})}, 3000);
  }
   if(command === "tts-walter") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Walter" -w "walter.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["walter.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Walter" -w "walter.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["walter.wav"]})}, 3000);
  }
   if(command === "tts-whispery") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Whispery" -w "whispery.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["whispery.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Cepstral Whispery" -w "whispery.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["whispery.wav"]})}, 3000);
  }
   if(command === "tts-espeakcy") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-cy" -w "espeak_cy.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_cy.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-cy" -w "espeak_cy.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_cy.wav"]})}, 3000);
  }
   if(command === "tts-espeakru") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-ru" -w "espeak_russian.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_russian.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-ru" -w "espeak_russian.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_russian.wav"]})}, 3000);
  }
   if(command === "tts-espeakde") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-de" -w "espeak_german.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_german.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-de" -w "espeak_german.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_german.wav"]})}, 3000);
  }
   if(command === "tts-espeakee") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-ee" -w "espeak_estonia.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_estonia.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-ee" -w "espeak_estonia.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_estonia.wav"]})}, 3000);
  }
   if(command === "tts-espeaken") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en" -w "espeak_english.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_english.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en" -w "espeak_english.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_english.wav"]})}, 3000);
  }
   if(command === "tts-espeaksc") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en-sc" -w "espeak_scottish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_scottish.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en-sc" -w "espeak_scottish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_scottish.wav"]})}, 3000);
  }
   if(command === "tts-espeakwm") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en-wm" -w "espeak_westenglish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_westenglish.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en-wm" -w "espeak_westenglish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_westenglish.wav"]})}, 3000);
  }
   if(command === "tts-espeakus") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en-us" -w "espeak_americanenglish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_americanenglish.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en-us" -w "espeak_americanenglish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_americanenglish.wav"]})}, 3000);
  }
   if(command === "tts-espeakfemale") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en+f2" -w "espeak_english_f.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_english_f.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-en+f2" -w "espeak_english_f.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_english_f.wav"]})}, 3000);
  }
   if(command === "tts-espeakfr") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-fr" -w "espeak_french.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_french.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-fr" -w "espeak_french.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_french.wav"]})}, 3000);
  }
   if(command === "tts-espeakit") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-it" -w "espeak_italian.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_italian.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-it" -w "espeak_italian.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_italian.wav"]})}, 3000);
  }
   if(command === "tts-espeaklt") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-lt" -w "espeak_lithuanian.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_lithuanian.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-lt" -w "espeak_lithuanian.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_lithuanian.wav"]})}, 3000);
  }
   if(command === "tts-espeaktr") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-tr" -w "espeak_turkish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_turkish.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-tr" -w "espeak_turkish.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_turkish.wav"]})}, 3000);
  }
   if(command === "tts-espeakzh") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-zh" -w "espeak_chinese.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_chinese.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-zh" -w "espeak_chinese.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_chinese.wav"]})}, 3000);
  }
   if(command === "tts-espeakzhyue") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-zhyue" -w "espeak_chinese_yue.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_chinese_yue.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-zhyue" -w "espeak_chinese_yue.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_chinese_yue.wav"]})}, 3000);
  }
   if(command === "tts-espeaklv") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-lv" -w "espeak_latvia.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_latvia.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "eSpeak-lv" -w "espeak_latvia.wav" -s 150 -p 2 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["espeak_latvia.wav"]})}, 3000);
  }
   if(command === "tts-eric") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Eric" -w "eric_boris.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["eric_boris.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Eric" -w "eric_boris.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["eric_boris.wav"]})}, 3000);
  }
   if(command === "tts-ivy") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Ivy" -w "ivy_caillou.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ivy_caillou.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Ivy" -w "ivy_caillou.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ivy_caillou.wav"]})}, 3000);
  }
   if(command === "tts-kendra") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Kendra" -w "kendra_msmartin.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kendra_msmartin.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Kendra" -w "kendra_msmartin.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kendra_msmartin.wav"]})}, 3000);
  }
   if(command === "tts-kimberly") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Kimberly" -w "kimberly_clementine.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kimberly_clementine.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Kimberly" -w "kimberly_clementine.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kimberly_clementine.wav"]})}, 3000);
  }
   if(command === "tts-salli") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Salli" -w "salli_rosie.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["salli_rosie.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Salli" -w "salli_rosie.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["salli_rosie.wav"]})}, 3000);
  }
   if(command === "tts-jennifer") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Jennifer" -w "jennifer_uolliac.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jennifer_uolliac.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Jennifer" -w "jennifer_uolliac.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jennifer_uolliac.wav"]})}, 3000);
  }
   if(command === "tts-jacek") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Jacek" -w "jacek_pl.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jacek_pl.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Jacek" -w "jacek_pl.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jacek_pl.wav"]})}, 3000);
  }
   if(command === "tts-russell") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Russell" -w "russell_au.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["russell_au.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Russell" -w "russell_au.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["russell_au.wav"]})}, 3000);
  }
   if(command === "tts-joey") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Joey" -w "joey_adam.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["joey_adam.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Joey" -w "joey_adam.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["joey_adam.wav"]})}, 3000);
  }
   if(command === "tts-michael") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "LH Michael" -w "michael.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["michael.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "LH Michael" -w "michael.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["michael.wav"]})}, 3000);
  }
   if(command === "tts-michelle") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "LH Michelle" -w "michelle.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["michelle.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "LH Michelle" -w "michelle.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["michelle.wav"]})}, 3000);
  }
   if(command === "tts-microsoftdavid") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft David Desktop" -w "MicrosoftDavid.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftDavid.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft David Desktop" -w "MicrosoftDavid.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftDavid.wav"]})}, 3000);
  }
   if(command === "tts-microsoftzira") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Zira Desktop" -w "MicrosoftZira.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftZira.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Zira Desktop" -w "MicrosoftZira.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftZira.wav"]})}, 3000);
  }
   if(command === "tts-microsoftharuka") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Haruka Desktop" -w "MicrosoftHaruka_Japanese.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftHaruka_Japanese.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Haruka Desktop" -w "MicrosoftHaruka_Japanese.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftHaruka_Japanese.wav"]})}, 3000);
  }
   if(command === "tts-microsofthedda") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Hedda Desktop" -w "MicrosoftHedda_Germany.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftHedda_Germany.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Hedda Desktop" -w "MicrosoftHedda_Germany.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftHedda_Germany.wav"]})}, 3000);
  }
   if(command === "tts-daniel") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Daniel_Full_22kHz" -w "daniel_mlg.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["daniel_mlg.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Daniel_Full_22kHz" -w "daniel_mlg.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["daniel_mlg.wav"]})}, 3000);
  }
   if(command === "tts-emily") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Emily_Dri40_16kHz" -w "emily.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["emily.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Emily_Dri40_16kHz" -w "emily.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["emily.wav"]})}, 3000);
  }
   if(command === "tts-tom") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Tom_Full_22kHz" -w "tom.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["tom.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Tom_Full_22kHz" -w "tom.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["tom.wav"]})}, 3000);
  }
   if(command === "tts-jill") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Jill_Full_22kHz" -w "jill.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jill.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Jill_Full_22kHz" -w "jill.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jill.wav"]})}, 3000);
  }
   if(command === "tts-karen") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Karen_Full_22kHz" -w "karen.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["karen.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Karen_Full_22kHz" -w "karen.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["karen.wav"]})}, 3000);
  }
   if(command === "tts-julie") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "VW Julie" -w "julie_excited.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["julie_excited.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "VW Julie" -w "julie_excited.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["julie_excited.wav"]})}, 3000);
  }
  if(command === "tts-abuela") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Spanish-Castilian: Abuela (Elderly Female), 6.1" -w "abuela_es.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["abuela_es.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Spanish-Castilian: Abuela (Elderly Female), 6.1" -w "abuela_es.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["abuela_es.wav"]})}, 3000);
  }
	if(command === "tts-ania") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ania B." -w "ania_pl.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ania_pl.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ania B." -w "ania_pl.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ania_pl.wav"]})}, 3000);
  }
	if(command === "tts-avpt") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Portuguese-Brazilian: Av? (Elderly Male), 6.1" -w "av_pt.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["av_pt.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Portuguese-Brazilian: Av? (Elderly Male), 6.1" -w "av_pt.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["av_pt.wav"]})}, 3000);
  }
	if(command === "tts-brutus") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Brutus" -w "brutus_monster.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["brutus_monster.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Brutus" -w "brutus_monster.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["brutus_monster.wav"]})}, 3000);
  }
	if(command === "tts-carsten") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Carsten" -w "carsten_danish.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["carsten_danish.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Carsten" -w "carsten_danish.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["carsten_danish.wav"]})}, 3000);
  }
	if(command === "tts-freddy") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Freddy" -w "freddy_high.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["freddy_high.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Freddy" -w "freddy_high.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["freddy_high.wav"]})}, 3000);
  }
	if(command === "tts-gisela") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "German-Standard: Gisela (Adult Female), 6.1" -w "gisela_de.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["gisela_de.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "German-Standard: Gisela (Adult Female), 6.1" -w "gisela_de.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["gisela_de.wav"]})}, 3000);
  }
    if(command === "tts-giselatel") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "German-Standard: Gisela-Tel (Adult Female for Telephone), 6.1" -w "gisela_de_telephone.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["gisela_de_telephone.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "German-Standard: Gisela-Tel (Adult Female for Telephone), 6.1" -w "gisela_de_telephone.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["gisela_de_telephone.wav"]})}, 3000);
  }
    if(command === "tts-gramps") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Gramps (Elderly Male), 6.1" -w "gramps_en.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["gramps_en.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Gramps (Elderly Male), 6.1" -w "gramps_en.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["gramps_en.wav"]})}, 3000);
  }
    if(command === "tts-grandma") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-American: Grandma (Elderly Female), 6.1" -w "grandma_us.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["grandma_us.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-American: Grandma (Elderly Female), 6.1" -w "grandma_us.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["grandma_us.wav"]})}, 3000);
  }
    if(command === "tts-grandpa") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-American: Grandpa (Elderly Male), 6.1" -w "grandpa_us.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["grandpa_us.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-American: Grandpa (Elderly Male), 6.1" -w "grandpa_us.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["grandpa_us.wav"]})}, 3000);
  }
    if(command === "tts-hanako") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Japanese-Standard: Hanako (Adult Female), 6.1" -w "hanako_jp.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["hanako_jp.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Japanese-Standard: Hanako (Adult Female), 6.1" -w "hanako_jp.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["hanako_jp.wav"]})}, 3000);
  }
    if(command === "tts-ye2ye0") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Chinese-Simplified: Ye2ye0 (Elderly Male), 6.1" -w "ye2ye0_ch.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ye2ye0_ch.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Chinese-Simplified: Ye2ye0 (Elderly Male), 6.1" -w "ye2ye0_ch.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ye2ye0_ch.wav"]})}, 3000);
  }
    if(command === "tts-jane") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Jane (Adult Female), 6.1" -w "jane_f_uk.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jane_f_uk.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Jane (Adult Female), 6.1" -w "jane_f_uk.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jane_f_uk.wav"]})}, 3000);
  }
    if(command === "tts-janetel") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Jane-Tel (Adult Female for Telephone), 6.1" -w "jane_f_uk_tel.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jane_f_uk_tel.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Jane-Tel (Adult Female for Telephone), 6.1" -w "jane_f_uk_tel.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["jane_f_uk_tel.wav"]})}, 3000);
  }
    if(command === "tts-justin") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Justin (Adult Male), 6.1" -w "justin_uk.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["justin_uk.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-British: Justin (Adult Male), 6.1" -w "justin_uk.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["justin_uk.wav"]})}, 3000);
  }
    if(command === "tts-keithbell") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Keith Bell" -w "keithbell.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["keithbell.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Keith Bell" -w "keithbell.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["keithbell.wav"]})}, 3000);
  }
    if(command === "tts-maciejm") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Maciej M." -w "maciejm_lv.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["maciejm_lv.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Maciej M." -w "maciejm_lv.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["maciejm_lv.wav"]})}, 3000);
  }
    if(command === "tts-reed") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-American: Reed (Adult Male), 6.1" -w "reed_us.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["reed_us.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "English-American: Reed (Adult Male), 6.1" -w "reed_us.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["reed_us.wav"]})}, 3000);
  }
    if(command === "tts-syntalk") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Neurosoft SynTalk - neutralny" -w "syntalk_standard_pl.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["syntalk_standard_pl.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Neurosoft SynTalk - neutralny" -w "syntalk_standard_pl.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["syntalk_standard_pl.wav"]})}, 3000);
  }
    if(command === "tts-syntalktel") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Neurosoft SynTalk - neutralny (dla telefonu)" -w "syntalk_standard_pl_tel.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["syntalk_standard_pl_tel.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Neurosoft SynTalk - neutralny (dla telefonu)" -w "syntalk_standard_pl_tel.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["syntalk_standard_pl_tel.wav"]})}, 3000);
  }
    if(command === "tts-betty") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Betty" -w "betty.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["betty.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Betty" -w "betty.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["betty.wav"]})}, 3000);
  }
    if(command === "tts-bodek") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "bodek" -w "bodek_pl.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["bodek_pl.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "bodek" -w "bodek_pl.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["bodek_pl.wav"]})}, 3000);
  }
    if(command === "tts-dennis") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Dennis" -w "dennis.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["dennis.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Dennis" -w "dennis.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["dennis.wav"]})}, 3000);
  }
    if(command === "tts-frank") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Frank" -w "frank.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["frank.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Frank" -w "frank.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["frank.wav"]})}, 3000);
  }
    if(command === "tts-harry") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Harry" -w "harry.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["harry.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Harry" -w "harry.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["harry.wav"]})}, 3000);
  }
    if(command === "tts-brian") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Brian" -w "brian_guy.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["brian_guy.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "IVONA 2 Brian" -w "brian_guy.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["brian_guy.wav"]})}, 3000);
  }
    if(command === "tts-kasia") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "kasia" -w "kasia_pl.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kasia_pl.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "kasia" -w "kasia_pl.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kasia_pl.wav"]})}, 3000);
  }
    if(command === "tts-kit") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Kit" -w "kit.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kit.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Kit" -w "kit.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["kit.wav"]})}, 3000);
  }
    if(command === "tts-microsoftanna") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Anna" -w "MicrosoftAnna.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftAnna.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Anna" -w "MicrosoftAnna.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftAnna.wav"]})}, 3000);
  }
    if(command === "tts-microsoftlili") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Lili" -w "MicrosoftLili.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftLili.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Lili" -w "MicrosoftLili.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftLili.wav"]})}, 3000);
  }
    if(command === "tts-paul") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Paul" -w "paul_synt.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["paul_synt.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Paul" -w "paul_synt.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["paul_synt.wav"]})}, 3000);
  }
    if(command === "tts-rita") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Rita" -w "rita.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["rita.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Rita" -w "rita.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["rita.wav"]})}, 3000);
  }
    if(command === "tts-isabel") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Isabel_Dri40_16kHz" -w "isabel.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["isabel.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Isabel_Dri40_16kHz" -w "isabel.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["isabel.wav"]})}, 3000);
  }
    if(command === "tts-steffi") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Steffi_Dri40_16kHz" -w "steffi.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["steffi.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ScanSoft Steffi_Dri40_16kHz" -w "steffi.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["steffi.wav"]})}, 3000);
  }
    if(command === "tts-toshiba") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "TOSHIBA male adult (U.S.)" -w "toshiba_m.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["toshiba_m.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "TOSHIBA male adult (U.S.)" -w "toshiba_m.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["toshiba_m.wav"]})}, 3000);
  }
    if(command === "tts-ursula") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ursula" -w "ursula.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ursula.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ursula" -w "ursula.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["ursula.wav"]})}, 3000);
  }
    if(command === "tts-wendy") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Wendy" -w "wendy.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["wendy.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Wendy" -w "wendy.wav" -s 150 -p 0 -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["wendy.wav"]})}, 3000);
  }
	if(command === "tts-readboard") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "ReadBoard - Polska mowa" -w "readboard.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["readboard.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "ReadBoard - Polska mowa" -w "readboard.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["readboard.wav"]})}, 3000);
  }
  if(command === "tts-microsoftmark") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Mark" -w "MicrosoftMark.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftMark.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Mark" -w "MicrosoftMark.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["MicrosoftMark.wav"]})}, 3000);
  }
  if(command === "tts-microsofteva") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Eva" -w "Cortana.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Cortana.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Microsoft Eva" -w "Cortana.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Cortana.wav"]})}, 3000);
  }
  if(command === "tts-ekhoyue") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Cantonese" -w "Ekho_Voice_YUE.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_YUE.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Cantonese" -w "Ekho_Voice_YUE.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_YUE.wav"]})}, 3000);
  }
  if(command === "tts-ekhoen") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho English" -w "Ekho_Voice_EN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_EN.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho English" -w "Ekho_Voice_EN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_EN.wav"]})}, 3000);
  }
  if(command === "tts-ekhohakka") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Hakka" -w "Ekho_Voice_CH_HAKKA.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_CH_HAKKA.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Hakka" -w "Ekho_Voice_CH_HAKKA.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_CH_HAKKA.wav"]})}, 3000);
  }
  if(command === "tts-ekhokr") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Korean" -w "Ekho_Voice_KR.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_KR.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Korean" -w "Ekho_Voice_KR.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_KR.wav"]})}, 3000);
  }
  if(command === "tts-ekhocn") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Mandarin" -w "Ekho_Voice_CN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_CN.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Mandarin" -w "Ekho_Voice_CN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_CN.wav"]})}, 3000);
  }
  if(command === "tts-ekhongn") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Ngangien" -w "Ekho_Voice_NGN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_NGN.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Ngangien" -w "Ekho_Voice_NGN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_NGN.wav"]})}, 3000);
  }
  if(command === "tts-ekhotb") {
    if(!args[0]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Tibetan" -w "Ekho_Voice_TBN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_TBN.wav"]})}, 3000);
    if(args[1]) return; var text = args.join(' '); var eura = `balcon.exe -n "Ekho Tibetan" -w "Ekho_Voice_TBN.wav" -t "${text}" `; exec(eura, (err, stdout, stderr) => {if (err) {console.log("Error occurred: ", err);return;}});setTimeout(function(){message.channel.send("OK. Your text: " + text, {files: ["Ekho_Voice_TBN.wav"]})}, 3000);
  }
  if(command === "help") {
    if(!args[0]) return message.channel.send("**Commands**:\ntts!tts-help - gets a text-to-speech list available of voices\ntts!scratch - searches a random Scratch project\ntts!ip - dumps a random IP address\ntts!web - input name to website link\ntts!search - search automatically\ntts!web2 - input name to advanced website names\ntts!yt - checks Discord World\ntts!savetxt - saves the text\ntts!time - tells the host time\ntts!tts - generates Bonzi speech\ntts!site - gets a official website link\ntts!invite - gets a official server\ntts!bot - gets the link to connect a bot\ntts!status - lookup host's PC status");
    if(args[1]) return message.reply("array error");
  }
  if(command === "tts-help") {
    if(!args[0]) return message.channel.send("**BonziTTS Text-to-speech list**:\ntts\ntts-peter\ntts-eddie\ntts-douglas\ntts-biff\ntts-amos\ntts-melvin\ntts-alex\ntts-mike\ntts-sam\ntts-mary\n**Exclusive voices**\ntts-david\ntts-duchess\ntts-damien\ntts-duncan\ntts-lawrence\ntts-shouty\ntts-walter\ntts-whispery\ntts-espeakcy\ntts-espeakru\ntts-espeakde\ntts-espeakee\ntts-espeaken\ntts-espeaksc\ntts-espeakwm\ntts-espeakus\ntts-espeakfemale\ntts-espeakfr\ntts-espeakit\ntts-espeaklt\ntts-espeakzh\ntts-espeakzhyue\ntts-espeaklv\ntts-espeaktr\ntts-eric\ntts-ivy\ntts-kendra\ntts-kimberly\ntts-jennifer\ntts-jacek\ntts-joey\ntts-salli\ntts-russell\ntts-michael\ntts-michelle\ntts-microsoftdavid\ntts-microsoftzira\ntts-microsoftharuka\ntts-microsofthedda\ntts-daniel\ntts-emily\ntts-tom\ntts-jill\ntts-karen\ntts-julie\n**chat tts!tts-help-2 for more voices**");
    if(args[1]) return message.reply("array error");
  }
  if(command === "tts-help-2") {
    if(!args[0]) return message.channel.send("**BonziTTS Text-to-speech list - page 2**:\ntts-abuela\ntts-ania\ntts-avpt\ntts-brutus\ntts-carsten\ntts-freddy\ntts-gisela\ntts-giselatel\ntts-gramps\ntts-grandma\ntts-grandpa\ntts-hanako\ntts-ye2ye0\ntts-jane\ntts-janetel\ntts-justin\ntts-keithbell\ntts-maciejm\ntts-reed\ntts-syntalk\ntts-syntalktel\ntts-betty\ntts-bodek\ntts-dennis\ntts-frank\ntts-harry\ntts-brian\ntts-kasia\ntts-kit\ntts-microsoftanna\ntts-microsoftlili\ntts-paul\ntts-rita\ntts-isabel\ntts-steffi\ntts-toshiba\ntts-ursula\ntts-wendy\ntts-readboard\ntts-microsoftmark\ntts-microsofteva\ntts-ekhoyue\ntts-ekhoen\ntts-ekhohakka\ntts-ekhokr\ntts-ekhocn\ntts-ekhongn\ntts-ekhotb\n**end of voices**");
    if(args[1]) return message.reply("array error");
  }
  if(command === "bt") {
    if(!args[0]) return message.channel.send("**BonziTTS**\nWelcome to BonziTTS discord bot!\nThis bot will let you to generate many voices and languages, the languages and other engines, it's more fun!\n**How I do it?**\nuse tts!tts [text], if you enter the text, BonziTTS will prepare a TTS engine reader to read your text and sends audio file further that.\n**Do you have any complicated voices?**\nYes! We do have many voices on this local computer. If you need to get list of voices, do tts!tts-help.\nEnjoy generating voices!");
    if(args[1]) return message.reply("array error");
  }
  if(command === "site") {
    if(!args[0]) return message.channel.send("http://ius.bonkeyword.tk");
    if(args[1]) return message.reply("array error");
  }
  if(command === "prefix") {
    if(!args[0]) return message.channel.send("**My prefix here is** ``tts!``");
    if(args[1]) return message.reply("array error");
  }
  if(command === "invite") {
    if(!args[0]) return message.channel.send("https://discord.gg/DpBBJkBuzQ");
    if(args[1]) return message.reply("array error");
  }
  if(command === "bot") {
    if(!args[0]) return message.channel.send("https://discord.com/api/oauth2/authorize?client_id=890990327194869761&permissions=8&scope=bot");
    if(args[1]) return message.reply("array error");
  }
  if(command === "status") {
    if(!args[0]) return message.channel.send("Host Status:\nPlatform: " + os.platform() + "\nNumber of cores: " + os.cpuCount() + " cores \nFree memory: " + Math.floor(os.freemem()) + " MB per RAM (" + os.freememPercentage() + "%)\nTotal memory: " + Math.floor(os.totalmem()) + " MB \nKernel OS uptime: " + os.sysUptime() + " seconds \nServer process uptime: " + Math.floor(os.processUptime()) + " seconds");
    if(args[1]) return message.reply("array error");
  }
});
client.login('yourtoken');