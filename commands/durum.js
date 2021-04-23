const Command = require("../base/Command.js");

class Durum extends Command {
    constructor(client) {
        super(client, {
            name: "durum",
            aliases: []
        });
    }

    async run(message, args, data) {
        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return
        let rol = message.guild.roles.cache.find(x => x.name == "Mysterious Dark Member").members.size
        let members = message.guild.members.cache.size
        let tag = this.client.users.cache.filter(x => x.username.includes("☨")).size + 10
        let online = message.guild.members.cache.filter(m => m.presence.status !== "offline").size
        message.channel.send("Dark Paradise " + members + " toplam üyeye sahip. %" + parseInt(((members - rol) / members) * 100) + " kayıtlı, %" + parseInt((rol / members) * 100) + " kayıtsız, %" + parseInt((online / members) * 100) + " çevrim içi ve %" + parseInt((tag / members) * 100) + " taglı.");

    }

};

module.exports = Durum;
