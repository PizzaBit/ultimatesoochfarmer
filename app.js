const Discord = require('discord.js')
const client = new Discord.Client()

const token = // Your bot/user token here

var command = ""

var server
var channel

client.on('ready', () => {
  console.log('Payday bot is now online :D\n')
  client.user.setActivity('https://discord.gg/cy33kkW')
  server = client.guilds.get("Server ID")
  channel = server.channels.find('name', 'bot/sooch channel name')
  sooch()
})

function sooch() {
  channel.send("s!c")
  command = "c"
  setTimeout(sooch, 900000)
}

client.on('message', message => {
  if (message.author.id == "411256293051858944" && command == "c") {
    try {
      if (message.embeds[0].fields[8].value.endsWith("Ascension.") || message.embeds[0].fields[8].value.endsWith("apply.")) {
        channel.send("s!a confirm")
        command = "a"
      }
    }
    catch (err) {
      channel.send("s!b")
      command = "b"
    }
  }
  else if (message.author.id == "411256293051858944" && command == "b") {
    var highest = 0
    let split1 = message.embeds[0].fields[0].value.split("\n")
    let split2 = message.embeds[0].fields[1].value.split("\n")
    for (i = 0; i < split1.length; i++) {
      if (split1[i].endsWith("(Affordable)")) {
        highest = i + 1
      }
    }
    for (i = 0; i < split2.length; i++) {
      if (split2[i].endsWith("(Affordable)")) {
        highest = i + 11
      }
    }
    if (highest > 0) message.channel.send(`s!b ${highest} max`)
    command = ""
  }
  else if (message.author.id == "411256293051858944" && command == "a") {
    if (!message.embeds[0].fields[0].value.endsWith("!")) {
      command = ""
      return
    }
    message.channel.send("s!b 1")
    command = ""
  }
})

client.login(token)
