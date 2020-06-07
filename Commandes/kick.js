const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission `KICK_MEMBERS` ");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un membre !")
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send("L'utilisateur n'existe pas !");
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("Je ne peux pas kick ce membre !");

    kick.kick().then(member => {
        message.channel.send(`<a:checkmark:714777216507969587> L'utilisateur ${member.user.username} a bien été kick !`), member.createDM().then(channel => {
            channel.send(`***Vous avez été kick de CraftYourEmpire.***`)
        })
    });
};
module.exports.help = {
    name: "kick"
}
//<a:checkmark:714777216507969587> 