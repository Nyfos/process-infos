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
if (DiscordVersion != undefined) console.log(`Running process-infos with version ${DiscordVersion} of discord.js!`);

var testOs = function () {
    if (!os) console.warn("This command might work badly if you don't install the 'os' package! To correct this problem, install this package.");
}

var testDiscord = function () {
    if (!DiscordVersion) console.warn("This command might work badly if you don't install the 'discord.js' package! To correct this problem, install this package.")
}

const chalk = require('chalk')
var bilan = function () {
    if (!chalk) {
        console.log(nodeVersion())
        console.log(platform())
        console.log(release())
        console.log(memoryUsage())
        console.log(uptimeFormated())
        console.log(version())
        console.log(cpu(0))
        console.log("La génération du bilan a été épurée car vous ne possédez pas le package 'chalk'!")
    }
    console.log(chalk.hex("#1387de").bold("Bilan process-infos"))
    console.log("-----------------------")
    var color = function (value=0, text="") {
        if (value > 70) return chalk.red(text)
        if (value > 30 && value <= 70) return chalk.yellow(text)
        if (value <= 30) return chalk.green(text)
        return chalk.magenta(text)
    }
    var color2 = function (value, text) {
        if (value > 2000) return chalk.red(text)
        if (value > 1000 && value <= 2000) return chalk.yellow(text)
        if (value >= 0 && value <= 1000) return chalk.green(text)
    }
    var classic = function (key, text) { return chalk.blue(key +" : "+ text) }
    console.log(classic("Node.js", nodeVersion()))
    console.log(classic("Plateforme", platform()))
    console.log(classic("Release", release()))
    console.log(chalk.blue("Usage mémoire : ") + color((100*(os.totalmem() - os.freemem())/totalmemory()), ((100*(os.totalmem() - os.freemem())/totalmemory())) + "%"))
    console.log(classic("Uptime", uptimeFormated()))
    console.log(classic("Version", version()))
    console.log("-----------------------")
    console.log(chalk.hex("#1387de").bold("Bilan CPU process-infos"))
    console.log("-----------------------")
    console.log(classic("Modèle CPU", cpu("0").model))
    console.log(chalk.blue("Vitesse CPU : ") + color2(cpu("0").speed, cpu("0").speed + " MHZ"))
}

var platform = function () {
    testOs()
    return os.platform()
}

var release = function () {
    testOs()
    return os.release()
}

var totalmemory = function () {
    testOs()
    return os.totalmem()
}

var freememory = function () {
    testOs()
    return os.freemem()
}

var memoryUsage = function (option) {
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

var shortMemoryUsage = function () {
    testOs()
    let memoryUsed = os.totalmem() - os.freemem().toString().substr(0, 1) + "." + os.totalmem() - os.freemem().toString().substr(0, 1)
    let memoryTotal = os.totalmem().toString().substr(0, 1) + "." + os.totalmem().toString().substr(1, 9)
    return memoryUsed + "/" + memoryTotal + " GB"
}

var version = function () {
    testOs()
    return os.version()
}

var uptime = function () {
    testOs()
    return os.uptime()
}

var uptimeFormated = function () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let hours = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[0]-1
    let minutes = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[1]
    let seconds = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[2].substr(0, 2)
    return hours + "h " + minutes + "m " + seconds + "s "
}

var uptimeHours = function () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let hours = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[0]-1
    return hours
}

var uptimeMinutes = function () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let minutes = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[1]
    return minutes
}

var uptimeSeconds = function () {
    testOs()
    if (!moment) console.warn("This command might work badly if you don't install the 'moment' package! To correct this problem, install this package.");
    let seconds = moment().subtract(Date.now() - os.uptime(), "milliseconds").format("LTS").toString().split(":")[2].substr(0, 2)
    return seconds
}

var cpus = function () {
    testOs()
    return os.cpus()
}

var cpu = function (id=0) {
    if (!id) id = 0
    if (isNaN(id)) throw new SyntaxError("You must specify a valid CPU ID! Use cpu(0) for the first CPU!")
    if (id < 0) throw new RangeError("You must specify a valid CPU ID! Use cpu(0) for the first CPU!")
    testOs()
    let cpu2 = os.cpus()[id]
    if (!cpu2) throw new Error("No CPU found at this ID! Try cpu(0)!")
    return ({"model":cpu2.model, "speed":cpu2.speed, "times":cpu2.times})
}

var discordGuilds = function (client) {
    testDiscord()
    if (DiscordVersion == 11) return client.guilds.size
    if (DiscordVersion == 12) return client.guilds.cache.size
}

var discordChannels = function (client) {
    testDiscord()
    if (DiscordVersion == 11) return client.channels.size
    if (DiscordVersion == 12) return client.channels.cache.size
}

var discordUsers = function (client) {
    testDiscord()
    if (DiscordVersion == 11) return client.users.size
    if (DiscordVersion == 12) return client.users.cache.size
}

var discordVersion = function () {
    testDiscord()
    return Discord.version
}

var nodeVersion = function () {
    testDiscord()
    return process.version
}

module.exports = {
    bilan: bilan,
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
    shortMemoryUsage: shortMemoryUsage,
    uptime: uptime,
    uptimeFormated: uptimeFormated,
    uptimeHours: uptimeHours,
    uptimeMinutes: uptimeMinutes,
    uptimeSeconds: uptimeSeconds,
    version: version,
    cpus: cpus,
    cpu: cpu
}