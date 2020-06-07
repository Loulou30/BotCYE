const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let debut = Date.now();
    await message.channel.send({

        embed: {
            color: 0xe43333,
            title: `Attente du résultat...`
        }
    }).then(async(m) => await m.edit({
        embed: {
            color: 0xe43333,
            title: `Pong : ${Date.now() - debut} ms.`
        }
    }));
};


module.exports.help = {
    name: "ping"
}