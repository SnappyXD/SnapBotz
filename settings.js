// BASE RUZTANXD 

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

//========== Setting Owner ==========//
global.owner = "628813100198"
global.idsaluran = "-"
global.namaowner = "snapdxkz"
global.namabot = "おさらぎ"
global.linkyt = 'https://www.youtube.com/' 
global.mail = 'snappyisreal@gmail.com' // 
global.packname = 'SnapBotz'
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: QyuuNee\nBot: 0895-3253-44177`
//========== Setting Event ==========//
global.autoread = true
global.anticall = true
global.autoreadsw = false

//========== Setting Foto ===========//
global.imgreply = "https://files.catbox.moe/jss5aj.jpeg"
global.thumb = "https://files.catbox.moe/yvt8u1.jpeg"
//global.imgmenu = fs.readFileSync("./media/Menu.jpg")

global.domainn = "-"
global.apikeyy = "-"
global.capikeyy = "-"

//========== Setting Panell ==========//
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
global.limitawal = 5

global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu

//========= Setting Payment =========//
global.dana = ""
global.gopay = ""
global.ovo = ""
global.qris = ""
                             

//========= Setting Message =========//

global.msg = {
    done: '🤗 Done, Oke Desu~',
    wait: '⏳Memproses . . .',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    adminbot: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 10k Permanen',
    developer: 'Command Ini Hanya Untuk Developer Bot!'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})