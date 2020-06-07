const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission `MANAGE_MEMBERS` ");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un membre !")
    }

    let mute = message.guild.member(message.mentions.users.first());

    if(!mute) {
        return message.channel.send("L'utilisateur n'existe pas !");
    }

    

    mute.addRole("716984892243836970").then(member => {
        message.channel.send(`<a:checkmark:714777216507969587> L'utilisateur ${member.user.username} a bien été vérifié !`), member.createDM().then(channel => {
            channel.send(`***Vous avez été bien vérifié de CraftYourEmpire ! Bon jeu !***`)
        })
    });
};
module.exports.help = {
    name: "verify"
}
//<a:checkmark:714777216507969587> 