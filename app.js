const c = console.log
const fs = require('fs')
const TelegramApi = require('node-telegram-bot-api')

const TOKEN = '5965701331:AAG21HoAObaJtCGqB-KeVNx1hlabD8e8TB8'
//5965701331:AAG21HoAObaJtCGqB-KeVNx1hlabD8e8TB8

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
    return `
<<< Содержимое папки :
${fs.readdirSync(__dirname).join().replace(/,/gi, "\n")}

<<< Содержимое файла ${fileName} :
${fs.readFileSync( fileName )}
    `
}