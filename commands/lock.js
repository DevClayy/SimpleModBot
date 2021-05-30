const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  name: "lock", // Command Name
  aliases: ["clock"], // Aliases
  usage: " ", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {    
      let prefix = config.prefix
      
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You don't have the permission to preform this action!**");

     const type = message.channel.type === 'text' ? 'SEND_MESSAGES' : 'CONNECT';
message.channel.overwritePermissions([
  {
     id: message.guild.roles.everyone,
     deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
  },
]);
    return message.channel.send(`Channel Locked, ${message.author.tag}`)
  
  
  
  
  }
}