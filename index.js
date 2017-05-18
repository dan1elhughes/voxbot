const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');

dotenv.config();

// https://discordapp.com/developers/applications/me
const token = process.env.BOT_TOKEN;

client.on('ready', () => console.log('Ready'));

client.on('message', message => {
	if (message.content === 'ping') {
		message.channel.send('pong');
	}
});

client.login(token);
