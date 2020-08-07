if (Number(process.version.slice(1).split(".")[0]) < 10) throw new Error("Node 10.0.0 or higher is required. Update Node on your system.");
const os = require('os')
if (!os) console.warn("Some commands may not work properly if you don't install the 'os' package! To correct this problem, install this package.");
const moment = require('moment')
if (!moment) console.warn("Some commands may not work properly if you don't install the 'moment' package! To correct this problem, install this package.");
const Discord = require("discord.js")
const DiscordVersion = Discord.version.split(".")[0]
if (!DiscordVersion) console.warn("Some commands may not work properly if you don't install the 'discord.js' package! To correct this problem, install this package.")
if (DiscordVersion != undefined && DiscordVersion < 11) throw new RangeError("You must install discord.js 11.5.1 or higher!")
if (DiscordVersion != undefined && DiscordVersion > 12) throw new RangeError("You must install discord.js 11.5.1 or higher!")
if (DiscordVersion != undefined) console.log(`Running discord-bot-info with version ${DiscordVersion} of discord.js!`);

function testOs () {
    if (!os) console.warn("This command might work badly if you don't install the 'os' package! To correct this problem, install this package.");
}

function testDiscord () {
    if (!DiscordVersion) console.warn("This command might work badly if you don't install the 'discord.js' package! To correct this problem, install this package.")
}

function platform () {
    testOs()
    return os.platform()
}

function release () {
    testOs()
    return os.release()
}

function totalmemory () {
    testOs()
    return os.totalmem()
}

function freememory () {
    testOs()
    return os.freemem()
}

function memoryUsage (option) {
    testOs()
    let memoryUsed = os.totalmem() - os.freemem()
    let memoryTotal = os.totalmem()
    if (option != undefined && option.toLowerCase() != "kb" && option.toLowerCase() != "mb" && option.toLowerCase() != "gb") {
        option = undefined
        console.warn("Invalid memoryUsage option! Using default option!")
    }
    if (!option) return memoryUsed + "/" + memoryTotal + " bytes"
    if (!option.toLowerCase() == "kb") return memoryUsed/1000 + "/" + memoryTotal/1000 + " KB"
    if (!option.toLowerCase() == "mb") return memoryUsed/1000000 + "/" + memoryTotal/1000000 + " MB"
    if (!option.toLowerCase() == "gb") return memoryUsed/1000000000 + "/" + memoryTotal/1000000000 + " GB"
}

function version () {
    testOs()
    return os.version()
}

function uptime () {
    testOs()
    return os.uptime()
}

function uptimeFormated () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let hours = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[0]-1
    let minutes = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[1]
    let seconds = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[2].substr(0, 2)
    return hours + "h " + minutes + "m " + seconds + "s "
}

function uptimeHours () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let hours = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[0]-1
    return hours
}

function uptimeMinutes () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let minutes = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[1]
    return minutes
}

function uptimeSeconds () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let seconds = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[2].substr(0, 2)
    return seconds
}

function cpus () {
    testOs()
    return os.cpus()
}

function cpu (id) {
    if (!id) throw new SyntaxError("You must specify a CPU ID! Use cpu(0) for the first CPU!")
    if (isNaN(id)) throw new SyntaxError("You must specify a valid CPU ID! Use cpu(0) for the first CPU!")
    if (id < 0) throw new RangeError("You must specify a valid CPU ID! Use cpu(0) for the first CPU!")
    testOs()
    let cpu = os.cpus()[id]
    if (!cpu) throw new Error("No CPU found at this ID! Try cpu(0)!")
    return (cpu.model, cpu.speed, cpu.times)
}

function discordGuilds (client) {
    testDiscord()
    if (DiscordVersion == 11) return client.guilds.size
    if (DiscordVersion == 12) return client.guilds.cache.size
}

function discordChannels (client) {
    testDiscord()
    if (DiscordVersion == 11) return client.channels.size
    if (DiscordVersion == 12) return client.channels.cache.size
}

function discordUsers (client) {
    testDiscord()
    if (DiscordVersion == 11) return client.users.size
    if (DiscordVersion == 12) return client.users.cache.size
}

function discordVersion () {
    testDiscord()
    return DiscordVersion
}

function nodeVersion () {
    testDiscord()
    return process.version
}

module.exports = {
    discordGuilds: discordGuilds,
    discordChannels: discordChannels,
    discordUsers: discordUsers,
    discordVersion: discordVersion,
    nodeVersion: nodeVersion,
    platform: platform,
    release: release,
    totalmemory: totalmemory,
    freememory: freememory,
    memoryUsage: memoryUsage,
    uptime: uptime,
    uptimeFormated: uptimeFormated,
    uptimeHours: uptimeHours,
    uptimeMinutes: uptimeMinutes,
    uptimeSeconds: uptimeSeconds,
    version: version,
    cpus: cpus,
    cpu: cpu
}