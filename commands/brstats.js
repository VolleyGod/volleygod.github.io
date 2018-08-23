exports.run = (client, message, args, prettyMs) => {
const Fortnite = require('fortnite');
const cl = new Fortnite('df9e960d-6ffb-443d-99f6-753ed50201f5');
cl.getInfo(args[0], args[1]).then(data => message.channel.send(`${args[0]} has ${data.lifetimeStats[10].value} kills, ${data.lifetimeStats[8].value} wins, has played ${data.lifetimeStats[7].value} games, has a KDR of ${data.lifetimeStats[11].value}, gets ${data.lifetimeStats[12].value} kills per minute, has played for ${data.lifetimeStats[13].value}, and has an average survival time of ${data.lifetimeStats[14].value} in Fortnite: Battle Royale`))
  
}