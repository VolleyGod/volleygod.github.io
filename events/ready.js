exports.run = (client) => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setGame(`In ${client.guilds.size} server(s) with  ${client.users.size} users.`)
}