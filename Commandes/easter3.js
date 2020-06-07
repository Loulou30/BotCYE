const Discord = require('discord.js');
    
 module.exports.run = async(client, message) => {
    message.delete()
    message.channel.send("C'est #**SteveInShape** qui a le plus de muscles !");
    };

 module.exports.help = {
    name: "muscle"
}
