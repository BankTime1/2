const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

let score = 0;

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome to TIMEcoin Game! Type /click to click.");
});

bot.onText(/\/click/, (msg) => {
  score += 1;
  bot.sendMessage(msg.chat.id, `You clicked! Your score is now ${score}.`);
});

bot.onText(/\/score/, (msg) => {
  bot.sendMessage(msg.chat.id, `Your current score is ${score}.`);
});

// Express server to serve static files and handle webhooks if needed
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve your static files from the "public" directory

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
