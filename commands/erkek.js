const Command = require("../base/Command.js");
const Discord = require("discord.js")
const kayıtlar = require("../models/kayıt.js")
const isimler = require("../models/isimler.js")

class Erkek extends Command {
    constructor(client) {
        super(client, {
            name: "erkek",
            usage: "erkek",
            aliases: ["e"]
        });
    }

    async run(message, args, level) {
        if(!message.member.roles.cache.has("727881541073502270") && !message.member.hasPermission("VIEW_AUDIT_LOG")) return
        let user = this.client.kayıtlar.has(message.author.id) ? await this.client.üye(this.client.kayıtlar.get(message.author.id), message.guild) : message.mentions.members.first() || await this.client.üye(args[0], message.guild)
        if (!user) return this.client.yolla("Kaydetmek istediğin kullanıcıyı düzgünce belirt ve tekrar dene!", message.author, message.channel)
        if (user.roles.cache.some(x => ["727881569330528347", "728204860671131661", "749380214668132362", "727881570761048065", "749380325074796594", "728204858288766986"].includes(x.id))) {
            if (this.client.kayıtlar.has(message.author.id)) {
                this.client.kayıtlar.delete(message.author.id)
            }
            return this.client.yolla("<@" + user.id + "> kullanıcısı zaten kayıtlı olduğundan dolayı kayıt işlemi iptal edildi.", message.author, message.channel)
        }
        if (!args[1]) return this.client.yolla("Kaydetmek istediğin isim ve yaşı belirtmelisin.", message.author, message.channel)
        if (!args[2]) return this.client.yolla("Kaydetmek istediğin isim ve yaşı belirtmelisin.", message.author, message.channel)
        await kayıtlar.findOne({ user: message.author.id }, async (err, res) => {
            if (res) {
                if (res.kayıtlar.includes(user.id)) {
                    res.erkek = res.erkek
                    res.save().catch(e => console.log(e))
                } else {
                    res.kayıtlar.push(user.id)
                    res.erkek = res.erkek + 1
                    res.save().catch(e => console.log(e))
                }
            } else if (!res) {
                let arr = []
                arr.push(user.id)
                const data = new kayıtlar({
                    user: message.author.id,
                    erkek: 1,
                    kadın: 0,
                    kayıtlar: arr
                })
                data.save().catch(e => console.log(e))
            }
            if (!user.roles.cache.has("727881570761048065")) {
                let isim = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase()
                let yaş = args[2];
                user.user.username.includes("☨") ? await user.setNickname(`☨ ${isim} | ${yaş}`) : await user.setNickname(`✦ ${isim} | ${yaş}`)
                await user.roles.add(["727881570761048065", "749380325074796594", "728204858288766986"])
                await user.roles.remove(["759257818867564564", "747553063082000434"])
                const emux = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${user} kullanıcısı başarıyla erkek olarak kayıt edildi.`)
                    .setColor("RANDOM")
                    message.channel.send(emux)
                if (this.client.kayıtlar.has(message.author.id)) {
                    this.client.kayıtlar.delete(message.author.id)
                }
                this.client.channels.cache.get("759566000378871828").send("Aramıza yeni biri katıldı! <@" + user.id + "> ona hoş geldin diyelim! <:utandm:754423920261595306>")
            }
            isimler.findOne({ user: user.id }, async (err, res) => {
                let isim = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase()
                let yaş = args[2];
                if (!res) {
                    let arr = []
                    arr.push({ isim: `${isim} | ${yaş}`, state: "<@&727881570761048065>", yetkili: message.author.id })
                    let newData = new isimler({
                        user: user.id,
                        isimler: arr
                    })
                    newData.save().catch(e => console.log(e))
                } else {
                    res.isimler.push({ isim: `${isim} | ${yaş}`, state: "<@&727881570761048065>", yetkili: message.author.id })
                    res.save().catch(e => console.log(e))
                }
            })
        })
    }
}

module.exports = Erkek;
