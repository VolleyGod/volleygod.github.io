exports.run = (client, message, args, prettyMs) => {
 const latestvid = require('latestvid');
  
  latestvid.getLatest(message.content.slice(11))
  .then(url => {
    message.channel.send(url);
    return latestvid.openUrl(url);
  })
  .catch(e => {
    return console.error(e.message);
  });
}