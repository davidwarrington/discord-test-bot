const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client();

const commands = {
    insult: () => 'Bugger off.',
    welcome: () => 'Now then.'
}

const checkForCommands = message => {
    const commandIds = Object.keys(commands);

    return commandIds.find(command =>
        message.content.startsWith(`!${command}`)
    );
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    const command = checkForCommands(message);
    if (!command) return;

    message.reply(commands[command](message));
});

client.login(process.env.DISCORD_BOT_TOKEN);
