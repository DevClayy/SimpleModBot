const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  name: "kick", // Command Name
  aliases: ["km"], // Aliases
  usage: "<user>", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {    
      let prefix = config.prefix
    
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You don't have the permission to preform this action!**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**I Dont Have Permissions To Kick Users! | [KICK_MEMBERS]**");
            if (!args[0]) return message.channel.send('You must mention a `User` to **kick**.')

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
                 if (banMember === message.member) return message.channel.send("You can't kick yourself.")

            var reason = args.slice(1).join(" ");

            if (!banMember.kickable) return message.channel.send("It appears that the specified user can not be kicked.")
            try {
            message.guild.members.kick(banMember)
            banMember.send(`**Hello, You Have Been Kicked From ${message.guild.name} for - ${reason || "Reason was not Specified"}**`).catch(() => null)
            } catch {
                message.guild.members.kick(banMember)
            }
            if (reason) {
            var sembed = new Discord.MessageEmbed()
                .setColor("YELLOW")
            .setThumbnail(message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** Was kicked ${reason}`)
            message.channel.send(sembed)
            } else {
                var sembed2 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                            .setThumbnail(message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** Was kicked. **No Reason was Specified.**`)
            message.channel.send(sembed2)
            }
  }}