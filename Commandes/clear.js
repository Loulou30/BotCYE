const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission `MANAGE_MESSAGES`").catch(console.error);
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas faire ça !").catch(console.error);

    if(!args[0]) return message.channel.send("Erreur : vous devez entrer un nombre.");

    if(isNaN(args[0])) return message.channel.send(`Veuillez spécifier un nombre.`);
    

    message.channel.bulkDelete(args[0]);

    message.channel.send(`<a:checkmark:714777216507969587> J'ai correctement supprimé ${args[0]} messages !`);


};

module.exports.help = {
    name: "clear"
}