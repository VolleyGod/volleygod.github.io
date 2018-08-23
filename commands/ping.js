exports.run = (client, message, args, prettyMs) => {
    message.channel.send("Pong!" + client.ping + "ms.").catch(console.error);
}