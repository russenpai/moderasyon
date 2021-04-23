const isimler = require("../models/isimler.js")
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(member) {
        if (member.roles.cache.has("759257818867564564")) return
        if (member.roles.cache.has("729122774873800741")) return
        if (member.roles.cache.has("727881553815928943")) return
        isimler.findOne({ user: member.id }, async (err, res) => {
            if (!res) {
                let arr = []
                arr.push({ isim: member.displayName, state: "Sunucudan Ayrılma", yetkili: "Yok" })
                let newData = new isimler({
                    user: member.id,
                    isimler: arr
                })
                newData.save().catch(e => console.log(e))
            } else {
                res.isimler.push({ isim: member.displayName, state: "Sunucudan Ayrılma", yetkili: "Yok" })
                res.save().catch(e => console.log(e))
            }
        })
    }
};
