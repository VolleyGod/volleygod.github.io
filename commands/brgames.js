exports.run = (client, message, args, prettyMs) => {
const Fortnite = require('fortnite');
const cl = new Fortnite('df9e960d-6ffb-443d-99f6-753ed50201f5');
  try {
cl.getInfo(args[0], args[1]).then(data => message.channel.send(args[0] + " has played " + data.lifetimeStats[7].value + " games in Fortnite: Battle Royale"));
  }
  catch(err){
   message.channel.send("Player Not Found"); 
  }
  
}