exports.run = (client, guildCreate) => {
  guildCreate.createChannel("moderation", "text");
  client.user.setGame(`In ${client.guilds.size} server(s) with ${client.users.size} users.`);

};