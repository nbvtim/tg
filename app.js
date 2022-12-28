const c = console.log
const fs = require('fs')
const TelegramApi = require('node-telegram-bot-api')

const TOKEN = '5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE'
const bot = new TelegramApi(TOKEN, {polling: true})
bot.on('message', function(msg){
    
    bot.sendMessage(msg.chat.id, eval(msg.text))
    //bot.sendMessage(-1001840929833, output) // напишет в группу

})

c(`
https://api.telegram.org/bot${TOKEN}/getUpdates
https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=2037585811&text=bot_napiwet_sebe
 - ${"Содержимое папки : " + fs.readdirSync(__dirname)}
`)

function nbv(fileName = "./app.js"){
    return fs.readFileSync( fileName )
}