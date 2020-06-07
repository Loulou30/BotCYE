const Discord = require('discord.js');
    
 module.exports.run = async(client, message) => {
    message.delete()
    message.channel.send("Le GRRRAND sage de ce royaume est <@!316955790621540363> en toute logique ! Inclinez vous devant **sa puissance** !");
    };

 module.exports.help = {
    name: "lucius-robertus"
}
