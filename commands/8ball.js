exports.run = (client, message, args, prettyMs) => {
const eightball = require('8ball')()
message.channel.send(eightball)
}