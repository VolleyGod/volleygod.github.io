exports.run = (client, message, args, prettyMs) => {
   message.member.voicechannel.leave();
}