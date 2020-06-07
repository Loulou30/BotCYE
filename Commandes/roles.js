const Discord = require('discord.js');
    
 module.exports.run = async(client, message) => {

    message.delete()



    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous ne pouvez pas faire ça !");
    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Rôles`,
            fields: [
                
                {
                    name: "Rôles In Game",
                    value:  "Réagissez avec <:Farmeur:714859782594494536> si vous êtes plutôt Farmeur. \n Réagissez avec <:PvPeur:714880661730754631> si vous êtes plutôt PvPeur. \n Et réagissez avec <:Buildeur:714880794946043985> si vous êtes plutôt buildeur. \n Enfin, réagissez avec <:Redstonneur:714869092086972597> si vous êtes plutôt redstonneur !"
                },

             ]
        } 
     }).then(async msg => 
        {await msg.react("714880661730754631"), await msg.react("714859782594494536"), await msg.react("714880794946043985"), await msg.react("714869092086972597")
    });
     
    };

 module.exports.help = {
    name: "roles"
}