const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  name: "slowmode", // Command Name
  description: "List all of my commands/info about a specific command.", // Description
  aliases: ["h"], // Aliases
  usage: " ", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {    
      let prefix = config.prefix

       const amount = parseInt(args[0]);
    if (message.member.hasPermission("MANAGE_CHANNELS"))
      if (isNaN(amount))
        return message.channel.send("The value you specified does not seem to provide a number, please try again.");
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}s\` `)
        message.channel.send(embed);
        return;
      } else {
        const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}s\` `)

        message.channel.send(embed1);
        return;
      }
    }
    if (args[0] === amount + "m") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
           const embed2 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}m\` `)

        
        message.channel.send(embed2)
        return;
      } else {
         const embed3 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}m\` `)

        
        message.channel.send(embed3);

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
         const embed4 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}h\` `)

        
        message.channel.send(embed4);
        return;
      } else {
         const embed5 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}h\` `)

        
        message.channel.send(embed5);
        return;
      }
    } else {
      message.channel.send(
        "You can only set seconds(s), minutes(min) and hours(h)"
      );
    }
  }
};