let handler =  m => m.reply(` ❰𝘿𝗘𝘼𝘿 𝗖𝙐𝗦𝗧𝗢𝗠𝗘𝙍 ❱
https://chat.whatsapp.com/EQvnnd8wBny82wpWuETOpg
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
