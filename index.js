const { Client } = require("discord.js");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  partials: ["CHANNEL"],
});
require("http").createServer((req, res) => res.end("UWU")).listen(process.env.PORT || 8080)
require("dotenv").config();
const smartestchatbot = require("smartestchatbot");
const scb = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by Anubis`ID");
});
client.on("messageCreate", async (message) => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(NUSCODE GANG)/gi, "NUSCODE GANG");
  if (message.content.includes(`@`)) {
    return message.reply({
      content: `**Ada apa tag tag? orang lagi pada kerja**`,
    });
  }
  if (!message.content)
    return message.reply({
      content: "Please say something.",
      allowedMentions: { repliedUser: true },
    });
  scb
    .chat(
      {
        message: message.content,
        name: client.user.username,
        master: "Anubis`ID | inisial A#6202",
        user: message.author.id,
      },
      "en"
    )
    .then((reply) => {
      message.reply({ content: reply, allowedMentions: { repliedUser: true } });
    });
});
client.login(process.env.TOKEN); //login using the token
