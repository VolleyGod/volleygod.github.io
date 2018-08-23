exports.run = (client, message, args, prettyMs) => {
var memes = require('dankmemes');
memes('day', 1, function(err, data) {
    console.log("Dankest memes of the day: " + JSON.stringify(data.1.value))
});
}