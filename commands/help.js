const config = require("../config.json");
const Discord = require("discord.js");
module.exports = {
  name: "help", // Command Name.
  aliases: ["h"], // Aliases.
  usage: " ", // Usage.
  cooldown: 5, // Cooldown In Seconds.
  guildOnly: false, // If Command In DMs. (true/false)
  admin: false, // Bot Admin Only. (true/false)
  async execute(message, args, client) {    
      let prefix = config.prefix
    
    
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    .setTitle(`${message.author.tag} | Help Menu!`)
    .setDescription('My Prefix Is: `'+`${config.prefix}`+'`')
    .addField(`General commands:`, `${prefix}help - Shows all the commands you can use!\n${prefix}ban - Bans a User from the Server.\n${prefix}kick - Kicks a User from the Server.\n${prefix}lock - Locks the current channel.\n${prefix}unlock - Unlocks the current channel.\n${prefix}slowmode - Sets the channels slowmode.`)
    .setFooter('Made with ❤️ By: Stealthy#3408')
    message.channel.send(embed)
  }
};
