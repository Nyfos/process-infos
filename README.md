<div align="center">
  <p>
    <a href="https://discord.gg/q6eMWS2"><img src="https://discordapp.com/api/guilds/616371260569681930/embed.png" alt="Serveur Discord" /></a>
    <a href="https://www.npmjs.com/package/process-infos"><img src="https://img.shields.io/npm/v/process-infos.svg?maxAge=3600" alt="Version NPM" /></a>
    <a href="https://www.npmjs.com/package/process-infos"><img src="https://img.shields.io/npm/dt/process-infos.svg?maxAge=3600" alt="Téléchargements NPM" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/process-infos/"><img src="https://nodei.co/npm/process-infos.png?downloads=true&stars=true" alt="Informations NPM" /></a>
  </p>
</div>

## À propos
process-infos est un module NPM permettant de récupérer toutes les informations relatives à vos modules NPM et à votre process. Compatible avec Discord.js !

Disponible avec Discord.js V11 et V12.

- Simple d'utilisation
- Utile
- Rapide mise en place

## Installation

`npm install process-infos`

## Exemple d'utilisation Discord

```js
const Discord = require("discord.js")
const client = new Discord.Client();

const processinfos = require("process-infos");

console.log(processinfos.discordVersion()) // -> 11.x.x ou 12.x.x
console.log(processinfos.discordGuilds(client)) // -> Number

client.login("token")
```

## Autres exemples d'utilisation

```js
const processinfos = require('process-infos')

console.log(processinfos.nodeVersion()) // -> 10.x.x ou supérieur
console.log(processinfos.memoryUsage()) // -> ./. bytes
console.log(processinfos.memoryUsage("kb")) // -> ./. KB
console.log(processinfos.uptimeFormated()) // -> .h .m .s
```

## Méthodes

| Méthode                    | Description                                | Retourne   |
| :------------------------- | :----------------------------------------- | :--------- |
| `.bilan()`                 | Envoie un bilan dans la console            | Console    |
| `.discordGuilds(client)`   | Nombre de serveurs du bot                  | Number     |
| `.discordChannels(client)` | Nombre de salons du bot                    | Number     |
| `.discordUsers(client)`    | Nombre d'utilisateurs du bot               | Number     |
| `.discordVersion()`        | Version de Discord.js installée            | Number     |
| `.nodeVersion()`           | Version de Node.js installée               | Number     |
| `.platform()`              | Plateforme                                 | String     |
| `.release()`               | Sortie                                     | Number     |
| `.totalmemory()`           | Mémoire totale en bytes                    | Number     |
| `.freememory()`            | Mémoire libre en bytes                     | Number     |
| `.memoryUsage([type])`     | Usage mémoire( bytes par défaut )          | String     |
| `.uptime()`                | Durée d'exécution du programme actuel      | String     |
| `.uptimeFormated()`        | Durée d'exécution du programme formatée    | String     |
| `.uptimeHours()`           | Durée d'exécution du programme en heures   | Number     |
| `.uptimeMinutes()`         | Durée d'exécution du programme en minutes  | Number     |
| `.uptimeSeconds()`         | Durée d'exécution du programme en secondes | Number     |
| `.version()`               | Version                                    | Number     |
| `.cpus()`                  | Liste des CPUs                             | Object     |
| `.cpu(id)`                 | Informations d'un CPU en particulier       | Voir "1    |

"1 : **Renvoie {model, speed, times}**

## Arguments

| Méthode                    | Argument                  | Obligatoire |
| :------------------------- | :------------------------ | :---------- |
| `.discordGuilds(client)`   | Discord.Client()          | Oui         |
| `.discordChannels(client)` | Discord.Client()          | Oui         |
| `.discordUsers(client)`    | Discord.Client()          | Oui         |
| `.memoryUsage([type])`     | String : "kb", "mb", "gb" | Non         |
| `.cpu(id)`                 | Number                    | Oui         |

## Liens

* [GitHub](https://github.com/Nyfos/process-infos)
* [NPM](https://www.npmjs.com/package/process-infos)