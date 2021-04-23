module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(old, nev) {
        if (old.username !== nev.username) {
            if (
                !nev.username.includes("☨") &&
                this.client.guilds.cache
                    .get("727881213406347282")
                    .members.cache.get(nev.id)
                    .roles.cache.has("727881555015499817")
            ) {
                this.client.guilds.cache
                    .get("727881213406347282")
                    .members.cache.get(nev.id)
                    .roles.remove("727881555015499817");
                let tokicham = this.client.guilds.cache
                    .get("727881213406347282")
                    .members.cache.get(nev.id);
                    let name = tokicham.displayName.replace(`☨`, "✦")
                    await tokicham.setNickname(name)
                let roller = ["727881518726381589", "735827989127888966", "736891557680119849", "729415958262710373", "758415750213664778", "727881517715423304", "743255932137373820", "727881519456321616", "730213053747953725", "727881520915808308", "729466637094354974", "727881522236883004", "727881522668896350", "727881526175334429", "727881537277919286", "727881538808709191", "727881537978368024", "771906272064438283", "727881540578574416", "727881541073502270", "773271657582166086", "727881546836607106", "727881549671956560", "727881547528798219", "727881525491925022", "739112558669201549"]
                for (let i = 0; i < roller.length; i++) {
                    if (tokicham.roles.cache.has(roller[i])) {
                        setTimeout(function () { tokicham.roles.remove(roller[i]); }, 1000);
                    }
                }
                let tagsayı = this.client.users.cache.filter(user => user.username.includes("☨")).size + 10
                this.client.channels.cache
                    .get("728947769880084531")
                    .send(
                        `─────────────────\n${this.client.no} ${nev} kişisi tagımızı bırakarak ailemize veda etti.**(Toplam Taglı Üyemiz: ${tagsayı})**\n\nÖnce: \`${old.tag}\`\nSonra: \`${nev.tag}\`\n─────────────────`
                    );
            }
            if (
                nev.username.includes("☨") &&
                !this.client.guilds.cache
                    .get("727881213406347282")
                    .members.cache.get(nev.id)
                    .roles.cache.has("727881555015499817")
            ) {
                let tagsayı = this.client.users.cache.filter(user => user.username.includes("☨")).size + 10
                this.client.channels.cache
                    .get("728947769880084531")
                    .send(
                        `─────────────────\n${this.client.ok} ${nev} kişisi tagımızı alarak ailemize katıldı.**(Toplam Taglı Üyemiz: ${tagsayı})**\n\nÖnce: \`${old.tag}\`\nSonra: \`${nev.tag}\`\n─────────────────`
                    );
                this.client.guilds.cache
                    .get("727881213406347282")
                    .members.cache.get(nev.id)
                    .roles.add("727881555015499817");
                let tokicham = this.client.guilds.cache
                    .get("727881213406347282")
                    .members.cache.get(nev.id);
                    let name = tokicham.displayName.replace(`✦`, "☨")
                    await tokicham.setNickname(name)
            }
        }
    }
};
