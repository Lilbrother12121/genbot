let Discord = require('discord.js');

exports.run = (client, message) => {
	
	
let memberToFind = message.mentions.members.first();

  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.hug @User``');
  }
	
message.reply(`***${message.member.displayName} hugs ${message.mentions.members.first()}***`)
}

module.exports.help = {
	name: "hug",
	alias: "HUG"
}
