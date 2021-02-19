
const { Player } = require("../../helpers/music.js")
const Discord = require("discord.js"), Ytdl = require("discord-ytdl-core")

module.exports = {
  name: 'bassboost',
  description: 'Bassboost the music',
  usage: 'bassboost',
  aliases: [],
  required: [],
  user: [],
  category: __dirname.split("commands\\")[1],
  
  premium: true,
  guildOnly: false,
  execute: async (message, args, client, data) => {
    const Channel = message.member.voice.channel;

    if (!Channel) return client.error(message, "Please join a voice channel to continue")

    const Queue = await client.queue.get(message.guild.id);

    if (!Queue)
      return client.error(message, "There are no songs in the queue")


    const Embed = new Discord.MessageEmbed()
      .setColor(client.colors.green)
      .setTitle("Success")
      .setDescription(`🎶 Bassboost has been ${Queue.Filters["bassboost"] ? "Disabled" : "Enabled"}`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setFooter(client.user.username, client.user.displayAvatarURL())

    Queue.Filters["bassboost"] = Queue.Filters["bassboost"] ? false : true;

    await Player(message, Discord, client, Ytdl, { Filter: true, Play: Queue.Songs[0], Color: client.colors.green, });

    return message.channel.send(Embed)
  }
};
