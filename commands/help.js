exports.run = (client, message, args, prettyMs) => {
  (message.author.send(`= HELP =
• HELP       :: FIND OUT ALL OF THE AVAILABLE COMMANDS 
• UPTIME     :: HOW LONG I HAVE BEEN ONLINE
• INVITE     :: GET A LINK TO INVITE ME TO YOUR SERVER
• PING       :: MY FIRST COMMAND (STILL FUNCTIONAL)
• STATS      :: VIEW BOT STATISTICS
• BRSTATS    :: GET A FORTNITE PLAYER'S LIFETIME STATS BY USERNAME AND CONSOLE(e.g "%brstats ProInsaneGamer xbl (that is an l as in elephant))
• BRGAMES    :: GET A FORTNITE PLAYER'S GAMES PLAYED BY USERNAME AND CONSOLE (e.g "%brgames ninja pc")
• BRWINS     :: GET A FORTNITE PLAYER'S GAMES PLAYED BY USERNAME AND CONSOLE (e.g "%brgames Tdogz90 psn")
• BRKD       :: GET A FORTNITE PLAYER'S KILL DEATH RATION BY USERNAME AND CONSOLE (e.g "%brstats ProInsaneGamer xbl (that is an l as in elephant))
• MUSICHELP  :: GET THE MUSIC COMMANDS`, {code: "asciidoc"}))
  .then(message.channel.send("✓"));
};