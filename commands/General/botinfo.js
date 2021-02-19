const Discord = require("discord.js")

const {
    version
} = require("discord.js");
const humanize = require("humanize-duration");
let os = require('os')
let cpuStat = require("cpu-stat")
const bytes = require('bytes')
const ms = require("ms")


module.exports = {
    name: 'botinfo',
    description: 'Gives detailed information about the bot',
    usage: 'botinfo',
    aliases: ['bot'],
    required: [],
    user: [],
    category: __dirname.split("commands\\")[1],
    
    premium: false,
    guildOnly: false,
    async execute(message, args, client, data) {
      
      let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }

            const duration = humanize(client.uptime, {conjunction: " and ", serialComma: false})
            const createdAt = await client.fetchApplication()

            const botinfo = new Discord.MessageEmbed()
                .setAuthor(message.client.user.username)
                .setTitle("__**Stats:**__")
                .setColor(client.colors.sky)
                .addField("\\⏳ Mem Usage", `${bytes(process.memoryUsage().heapUsed)}`, true)
                .addField("\\⌚️ Uptime ", `${duration}`, true)
                .addField("\\📁 Users", `${message.client.users.cache.size}`, true)
                .addField("\\📁 Servers", `${message.client.guilds.cache.size}`, true)
                .addField("\\📁 Channels ", `${message.client.channels.cache.size}`, true)
                .addField("\\🕰️ Created At", moment(createdAt).format('lll'), true)
                .addField("\\👾 Discord.js", `v${version}`, true)
                .addField("\\🤖 Node", `${process.version}`, true)
                .addField("\\🤖 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("\\🤖 CPU usage", `\`${percent.toFixed(2)}%\``, true)
                .addField("\\🤖 Arch", `\`${os.arch()}\``, true)
                .addField("\\💻 Platform", `\`\`${os.platform()}\`\``, true)
                .addField("API Latency", `${(message.client.ws.ping)}ms`)
         message.channel.send(botinfo)
        });

    }
}