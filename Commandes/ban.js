const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission `BAN_MEMBERS` ");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un membre !")
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send("L'utilisateur n'existe pas !");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("Je ne peux pas bannir ce membre !");

    ban.ban().then(member => {
        message.channel.send(`<a:checkmark:714777216507969587> L'utilisateur ${member.user.username} a bien été banni !`), member.createDM().then(channel => {
            channel.send(`***Vous avez été banni de CraftYourEmpire.***`)
        })
    });
};
module.exports.help = {
    name: "ban"
}