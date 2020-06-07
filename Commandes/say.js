const Discord = require('discord.js');

module.exports.run = async(client, message, args) => 
{

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) { 
        message.delete();
}
    if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
    
    var text = message.content.split(' ').slice(1).join(' ');
    if(!text) return message.channel.send(`Vous devez entrer un texte !`);
     message.channel.send(text);
     message.delete();
    message.channel.stopTyping()
   }
}

module.exports.help = {
    name: "say"
}