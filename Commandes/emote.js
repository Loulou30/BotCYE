const Discord = require('discord.js');
    
 module.exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Emotes du Serveur`,
            fields: [
                {
                    name: "Normaux :",
                    value: "<:PepeNoNitro:715248145503748096> <:viande_crue:714859782724386818> <:issou:715080689460183101>  <:lave:714859782770655334> <:Farmeur:714859782594494536> <:check:714777679957590016> <:arc:714859782900678727> <:bl:714859782795952133>  <:ender_pearl:714859783018250270> <:emeraude:714859782741426267> <:charbon:714859783097942026> <:canne_sucre:714859782988759042> <:PvPeur:714880661730754631> <:Redstonneur:714869092086972597>"
                },
                {
                    name: "Animés [Requiert Nitro] :",
                    value:  "<a:checkmark:714777216507969587> [Autres plus tard]"
                },

             ]
        } 
     });
    };

 module.exports.help = {
    name: "emotes"
}
