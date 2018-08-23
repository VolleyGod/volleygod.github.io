exports.run = (client, message, args, prettyMs) => {
  if (!message.guild) return;
   
    if (message.member.voiceChannel) {
      const connection = message.member.voiceChannel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  };
