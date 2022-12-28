const c = console.log
const fs = require('fs')
const TelegramApi = require('node-telegram-bot-api')
const TOKEN = '5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE'
const bot = new TelegramApi(TOKEN, {polling: true})
bot.on('message', function(msg){
    
    bot.sendMessage(msg.chat.id, eval(msg.text))
    //bot.sendMessage(-1001840929833, output)

})

c(`
https://api.telegram.org/bot${TOKEN}/getUpdates
https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=2037585811&text=bot_napiwet_sebe
 - ${"Содержимое папки : " + fs.readdirSync(__dirname)}
`)




/*
            function sendTelegramm(text){
                // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/getUpdates - переходим по адресу
                // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=бот_напишет_себе
                // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=-842465935&text=бот_напишет_в_группу
                let xhttp = new XMLHttpRequest()
                xhttp.open("GET", "https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=" + text, true)
                xhttp.send()
            }sendTelegramm("<<<>>>")



            const TOKEN = '5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE'
            let c = console.log
            const fs = require("fs")
            const TelegramApi = require('node-telegram-bot-api')

            const bot = new TelegramApi(TOKEN, {polling: true})

            //--------------------------------------------
            let packageJson = JSON.stringify(JSON.parse(fs.readFileSync("./package.json","utf-8")), null, "       ")

            function sendTxt (txt){
                bot.on('message', async function(msg){
                    await bot.sendMessage(msg.chat.id, `${Date()}\n\nЧат ID : ${msg.chat.id}\n\nВы ввели : ${msg.text}`)
                    await bot.sendMessage(msg.chat.id, `Результат : `)
                    await bot.sendMessage(msg.chat.id, `${txt}`)
                    
                })
            }
            sendTxt(packageJson)
*/