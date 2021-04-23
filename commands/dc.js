const Command = require("../base/Command.js");
class DoğrulukCesaret extends Command {
    constructor(client) {
        super(client, {
            name: "dc",
            aliases: ["dc"]
        });
    }

    async run(message, args, perm) {
        if (!message.member.roles.cache.some(r => ["731236849825349693", "740233526724526156", "727881580751880294"].includes(r.id)) && !message.member.hasPermission("ADMINISTRATOR")) return
        let user = message.mentions.members.first() || await this.client.üye(args[1], message.guild)
        if (!user) return this.client.yolla("Rol verip/almak istediğin kullanıcıyı belirt ve tekrar dene!", message.author, message.channel)
        if (!args[0]) return this.client.yolla("Rol verme biçimini belirt ve tekrar dene. \`Örnek kullanım: d!vk sorumlu @Tokuchi/ID - d!vk cezalı @Tokuchi/ID\`", message.author, message.channel)

        if (args[0] == "sorumlu") {
            if (!message.member.roles.cache.has("731236849825349693") && !message.member.hasPermission("ADMINISTRATOR")) return
            if (!user.roles.cache.has("727881580751880294")) {
                await this.client.yolla(`${user} kişisine <@&727881580751880294> rolü verildi.`, message.author, message.channel)
                user.roles.add("727881580751880294")
            } else {
                await this.client.yolla(`${user} kişisine <@&727881580751880294> rolü alındı.`, message.author, message.channel)
                user.roles.remove("727881580751880294")
            }
        }

        if (args[0] == "denetleyici") {
            if (!message.member.roles.cache.has("731236849825349693") && !message.member.hasPermission("ADMINISTRATOR")) return
            if (!user.roles.cache.has("740233526724526156")) {
                await this.client.yolla(`${user} kişisine <@&740233526724526156> rolü verildi.`, message.author, message.channel)
                user.roles.add("740233526724526156")
            } else {
                await this.client.yolla(`${user} kişisine <@&740233526724526156> rolü alındı.`, message.author, message.channel)
                user.roles.remove("740233526724526156")
            }
        }

        if (args[0] == "elit") {
            if (!message.member.roles.cache.some(r => ["727881580751880294", "731236849825349693"]) && !message.member.hasPermission("ADMINISTRATOR")) return
            if (!user.roles.cache.has("740233528741986331")) {
                await this.client.yolla(`${user} kişisine <@&740233528741986331> rolü verildi.`, message.author, message.channel)
                user.roles.add("740233528741986331")
            } else {
                await this.client.yolla(`${user} kişisine <@&740233528741986331> rolü alındı.`, message.author, message.channel)
                user.roles.remove("740233528741986331")
            }
        }


        if (args[0] == "cezalı") {
            if (!user.roles.cache.has("727881583352217670")) {
                await this.client.yolla(`${user} kişisine <@&727881583352217670> rolü verildi.`, message.author, message.channel)
                user.roles.add("727881583352217670")
            } else {
                await this.client.yolla(`${user} kişisine <@&731236315923873972> rolü alındı.`, message.author, message.channel)
                user.roles.remove("727881583352217670")
            }
        }
    }
}

module.exports = DoğrulukCesaret;
