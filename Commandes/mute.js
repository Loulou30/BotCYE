const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission `MANAGE_MESSAGES` ");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un membre !")
    }

    let mute = message.guild.member(message.mentions.users.first());

    if(!mute) {
        return message.channel.send("L'utilisateur n'existe pas !");
    }

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas mute ce membre !");

    mute.addRole("715279349472952363").then(member => {
        message.channel.send(`<a:checkmark:714777216507969587> L'utilisateur ${member.user.username} a bien été mute !`), member.createDM().then(channel => {
            channel.send(`***Vous avez été mute de CraftYourEmpire.***`)
        })
    });
};
module.exports.help = {
    name: "mute"
}
//<a:checkmark:714777216507969587> 