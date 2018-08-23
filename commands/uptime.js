exports.run = (client, message, args) => {
  const prettyMs = require("pretty-ms");
    message.channel.send("My Gears have been running successfully for " + prettyMs(client.uptime));
}