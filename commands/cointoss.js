exports.run = (client, message, args, prettyMs) => {
const coin = require("tossacoin");
  message.channel.send(coin.toss())
}///////////