const Discord = require('discord.js');
const moment = require('moment');
moment.locale('fr')

module.exports.run = async(client, message, args) => {

        const member = message.mentions.members.first() || message.member;

        message.channel.send({
                    embed: {
                        color: 0xe43333,
                        title: `Statistiques du membre **${member.user.tag}**`,
                        thumbnail: {
                            url: member.user.displayAvatarURL
                        },
                        fields: [{
                                    name: "Identifiant de L'utilisateur :",
                                    value: member.id
                                },
                                {
                                    name: "Inscrit depuis le :",
                                    value: moment.utc(member.user.createdAt).format("LL")
                                },
                                {
                                    name: "Activité :",
                                    value: `${member.user.presence.game ? `${member.user.presence.game.name}` : "Aucun jeu"}`
               }
            ]
       } 
    });

};

module.exports.help = {
    name: "info"
}