const Discord = require('discord.js'),
  ms = require('ms'),
  enmap = require('enmap')

module.exports = {
  name: 'disable',
  description: 'Disable a command in either guild or globally',
  usage: 'disable <command> [guildID]',
  aliases: [],
  required: [],
  user: [],
  category: __dirname.split("commands/")[1],
  args: false,
  premium: false,
  guildOnly: false,
  async execute(message, args, client) {
    if (!client.config.owners.includes(message.author.id)) return

    let command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]))

    message.channel.send(`${client.emoji.misc.check} **Disable command globally or guild only?**
      Please reply using \`globally\` or \`guild\``)

    let collector = message.channel.createMessageCollector(m => m.author.id === message.author.id)

    collector.on('collect', async msg => {
      if (msg.content.toLowerCase() === "globally") {
        client.disabled.push("commands", command.name, "global")
        message.channel.send(`${client.emoji.bot.disabled} **\`${command.name}\` has been disabled globally.** \nNo guilds will be able to use this command now `)

        return collector.stop()
      } else if (msg.content.toLowerCase() === "guild") {
        collector.stop()

        let a = await message.channel.send(`${client.emoji.misc.check} **Please provide a guild id to disable \`${command.name}\` in**`)

        let b = await a.channel.awaitMessages(m => m.author.id === message.author.id, {
          time: 60 * 1000,
          max: 1,
          errors: ['time']
        })

        let guildI = b.first().content
        if (!client.guilds.cache.get(guildI)) return client.error(message, "Invalid guild ID provided")

        client.disabled.push("commands", {
          guild: message.guild.id,
          command: command.name
        }, "guild")

        await message.channel.send(`${client.emoji.bot.disabled} **\`${command.name}\` disabled in ${client.guilds.cache.get(guildI).name}**`)

      }
    })
  }
}