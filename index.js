const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set();
const prefix = "!"
let cd = 5;

client.login("NzE0NTM0MTEyODExMTU1NTE3.XswD-Q.-vPjIVqcqjMFDmIfApxIxsu__Dk")

client.commands = new Discord.Collection();

const fs = require('fs');

fs.readdir("./Commandes/", (error, f) => {
    if (error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if (commandes.length <= 0) return console.log("Aucune commande trouvée.");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée`)

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});

client.on("messageReactionAdd", (reaction, user) => {
    if (user.bot) return;
    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.find(role => role.name.toLocaleLowerCase() === roleName.toLocaleLowerCase())
    var member = reaction.message.guild.members.find(member => member.id === user.id)

    member.addRole(role.id)
    member.createDM().then(channel => {
        channel.send(`***Le rôle a été ajouté avec succès.***`)
    })
})
client.on("messageReactionRemove", (reaction, user) => {
    if (user.bot) return;
    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.find(role => role.name.toLocaleLowerCase() === roleName.toLocaleLowerCase())
    var member = reaction.message.guild.members.find(member => member.id === user.id)

    member.removeRole(role.id)
    member.createDM().then(channel => {
        channel.send(`***Le rôle a été retiré avec succès.***`)
    })
})

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = client.commands.get(command);

    if (!cmd) return;
    if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) cmd.run(client, message, args);

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
    if (talkedRecently.has(message.author.id) && !cmd.name === "help") {
        return message.channel.send("Tu ne peux pas faire ça trop vite, tu dois attendre !");
    } else if (!talkedRecently.has(message.author.id)) {
        talkedRecently.add(message.author.id)
        cmd.run(client, message, args)

        setTimeout(() => {
            talkedRecently.delete(message.author.id)
        }, cd * 30 * 1000)
    } else {
        cmd.run(client, message, args)
    }
}



})















