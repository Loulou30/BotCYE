const Discord = require('discord.js');
    
 module.exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Commandes disponibles :`,
            fields: [
                {
                    name: "Tous les membres :",
                    value: "**!help** permet d'afficher ce message. \n **!info** permet d'afficher les statistiques d'un utilisateur. \n **!ping** permet d'avoir la latence entre discord et moi. \n **!emotes** permet de voir toutes les emotes du serveur."
                },
                {
                    name: "Modération uniquement :",
                    value:  "**!clear** permet de supprimer des messages. \n **!kick** permet de kick un membre. \n **!ban** permet de bannir un membre."
                },

             ]
        } 
     });
    };

 module.exports.help = {
    name: "help"
}
