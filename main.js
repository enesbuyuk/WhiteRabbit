
//THE WHITE RABBIT DISCORD BOT for discord.js v14
//YAPIMCI: GITHUB.COM/ENESBUYUK
const Discord = require('discord.js');


const {Client, ChannelType,Partials, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, GuildMember,GatewayIntentBits,ButtonStyle } = require('discord.js');
const client = new Client({ partials: [Partials.Channel], intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMembers] })

const guildInvites = new Map();

//const fs = require('fs');
const ayar = require('./settings.json')

const { QuickDB } = require("quick.db");
const db = new QuickDB();
//const snekfetch = require('snekfetch');


client.on("guildCreate", async(guild) => {
    await db.set(`gelengidensistemi_${guild.id}`, "0")
    await db.set(`kayitsistemi_${guild.id}`, "0")
    await db.set(`davetsistemi_${guild.id}`, "0")
    await db.set(`logsistemi_${guild.id}`, "0")
    await db.set(`rolsistemi_${guild.id}`, "0")
    await db.set(`chatsistemi_${guild.id}`, "0")
    await db.set(`korumasistemi_${guild.id}`, "0")
    console.log("Yeni sunucuya katıldım: " + guild.name);
})

client.on("guildDelete", guild => {
    console.log("Bir sunucudan çıkarıldım: " + guild.name);
})




client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;

    let choice = interaction.values
    const member = interaction.member

    if (interaction.customId === 'renkler') {
        if (await member.roles.cache.some((role) => role.name.includes('Renk'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Renk'))
            member.roles.remove(olanrenk)
        }

        if(choice == 'kirmizi'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Kırmızı')))
        }else if(choice =="bordo"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Bordo')))
        }else if(choice == "kahverengi"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Kahverengi')))
        }else if(choice == "turuncu"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Turuncu')))
        }else if(choice == "sari"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Sarı')))
        }else if(choice == "acikyesil"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('A. Yeşil')))
        }else if(choice == "yesil"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Yeşil')))
        }else if(choice == "cyan"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Cyan')))
        }else if(choice == "mavi"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Mavi')))
        }else if(choice == "lacivert"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Lacivert')))
        }else if(choice == "mor"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Mor')))
        }else if(choice == "pembe"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Pembe')))
        }else if(choice == "beyaz"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Beyaz')))
        }else if(choice == "gri"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Gri')))
        }else if(choice == "siyah"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Siyah')))
        }

        interaction.deferUpdate();

    }else if (interaction.customId === 'cinsiyet') {
        if (await member.roles.cache.some((role) => role.name.includes('Erkek'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Erkek'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Kız'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Kız'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Belirtmek'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Belirtmek'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Hanımefendi'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Hanımefendi'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Beyefendi'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Beyefendi'))
            member.roles.remove(olancinsiyet)
        }

        if(choice == 'erkek'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Erkek')))
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Beyefendi')))
        }else if(choice =="kiz"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Kız')))
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Hanımefendi')))
        }else if(choice == "belirtmek"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Belirtmek')))
        }

        interaction.deferUpdate();

    }else if (interaction.customId === 'yasaraligi') {
       if (await member.roles.cache.some((role) => role.name.includes('Yaş'))){
            const olanyil = await member.roles.cache.find((role) => role.name.includes('Yaş'))
            member.roles.remove(olanyil)
        }
        if(choice == '1520'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('15-20')))
        }else if(choice =="2025"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('20-25')))
        }else if(choice == "2530"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('25-30')))
        }else if(choice == "3035"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('30-35')))
        }else if(choice == "3540"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('35-40')))
        }else if(choice == "4045"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('40-45')))
        }else if(choice == "4550"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('45-50')))
        }else if(choice == "5055"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('50-55')))
        }

        interaction.deferUpdate();
    }else if (interaction.customId === 'ilgi') {
        if(choice == 'temizle'){
            if (await member.roles.cache.some((role) => role.name.includes('Bilim'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Bilim'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Felsefe'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('felsefe'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Edebiyat'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Edebiyat'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Bibliyofil'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Bibliyofil'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Yazarlık'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Yazarlık'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Müzik'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Müzik'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Resim'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Resim'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Spor'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Spor'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Yazılım'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Yazılım'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Oyunlar'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Oyunlar'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Film/Dizi'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Film/Dizi'))
                member.roles.remove(olan)
            }
        }else if(choice == 'bilim'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Bilim')))
        }else if(choice =="felsefe"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Felsefe')))
        }else if(choice == "edebiyat"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Edebiyat')))
        }else if(choice == "bibliyofil"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Bibliyofil')))
        }else if(choice == "yazarlik"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Yazarlık')))
        }else if(choice == "muzik"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Müzik')))
        }else if(choice == "resim"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Resim')))
        }else if(choice == "spor"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Spor')))
        }else if(choice == "yazilim"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Yazılım')))
        }else if(choice == "oyunlar"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Oyunlar')))
        }else if(choice == "filmdizi"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Film/Dizi')))
        }

        interaction.deferUpdate();
    }else if (interaction.customId === 'oyunlar') {

        if(choice == 'phasmobia'){
            if (member.roles.cache.some(role => role.id == ayar.rolexorcist)) {member.roles.remove(ayar.rolexorcist)}else{member.roles.add(ayar.rolexorcist)}
        }else if(choice =="csgo"){
            if (member.roles.cache.some(role => role.id == ayar.rolcsci)) {member.roles.remove(ayar.rolcsci)}else{member.roles.add(ayar.rolcsci)}
        }else if(choice == "valorant"){
            if (member.roles.cache.some(role => role.id == ayar.rolvalocu)) {member.roles.remove(ayar.rolvalocu)}else{member.roles.add(ayar.rolvalocu)}
        }else if(choice == "satranc"){
            if (member.roles.cache.some(role => role.id == ayar.rolgrandmaster)) {member.roles.remove(ayar.rolgrandmaster)}else{member.roles.add(ayar.rolgrandmaster)}
        }else if(choice == "secrethitler"){
            if (member.roles.cache.some(role => role.id == ayar.rolagent)) {member.roles.remove(ayar.rolagent)}else{member.roles.add(ayar.rolagent)}
        }

        interaction.deferUpdate();

    }else if (interaction.customId === 'siniflar') {
        if (await member.roles.cache.some((role) => role.name.includes('Sınıf'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Sınıf'))
            member.roles.remove(olanrenk)
        }else if (await member.roles.cache.some((role) => role.name.includes('Lisans'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Lisans'))
            member.roles.remove(olanrenk)
        }else if (await member.roles.cache.some((role) => role.name.includes('Mezun'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Mezun'))
            member.roles.remove(olanrenk)
        }else if (await member.roles.cache.some((role) => role.name.includes('Doktora'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Doktora'))
            member.roles.remove(olanrenk)
        }

        if(choice == '5sinif'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('5.Sınıf')))
        }else if(choice =="6sinif"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('6.Sınıf')))
        }else if(choice =="7sinif"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('7.Sınıf')))
        }else if(choice =="8sinif"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('8.Sınıf')))
        }else if(choice =="9sinif"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('9.Sınıf')))
        }else if(choice =="10sinif"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('10.Sınıf')))
        }else if(choice =="11sinif"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('11.Sınıf')))
        }else if(choice =="12sinif"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('12.Sınıf')))
        }else if(choice =="lisemezun"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Lise Mezun')))
        }else if(choice =="onlisans"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Ön Lisans')))
        }else if(choice =="lisans"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Üniversite (Lisans)')))
        }else if(choice =="yukseklisans"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Yüksek Lisans')))
        }else if(choice =="universitemezun"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Üniversite Mezun')))
        }else if(choice =="doktora"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Doktora')))
        }
        interaction.deferUpdate();

    }else if (interaction.customId === 'alanlar') {
        if (await member.roles.cache.some((role) => role.name.includes('Sayısal'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Sayısal'))
            member.roles.remove(olanrenk)
        }else if (await member.roles.cache.some((role) => role.name.includes('Eşit Ağırlık'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Eşit Ağırlık'))
            member.roles.remove(olanrenk)
        }else if (await member.roles.cache.some((role) => role.name.includes('Sözel'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Sözel'))
            member.roles.remove(olanrenk)
        }else if (await member.roles.cache.some((role) => role.name.includes('Yabancı Dil'))){
            const olanrenk = await member.roles.cache.find((role) => role.name.includes('Yabancı Dil'))
            member.roles.remove(olanrenk)
        }

        if(choice == 'sayisal'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Sayısal')))
        }else if(choice =="esitagirlik"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Eşit Ağırlık')))
        }else if(choice == "sozel"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Sözel')))
        }else if(choice == "yabancidil"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Yabancı Dil')))
        }

        interaction.deferUpdate();


    }else if (interaction.customId === 'dersvakit') {
        if(choice == 'temizle'){
            if (await member.roles.cache.some((role) => role.name.includes('Gündüzcü'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Gündüzcü'))
                member.roles.remove(olan)
            }else if (await member.roles.cache.some((role) => role.name.includes('Gececi'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Gececi'))
                member.roles.remove(olan)
            }
        }else if(choice == 'gunduz'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Gündüzcü')))
        }else if(choice =="gece"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Gececi')))
        }

        interaction.deferUpdate();

    }else if (interaction.customId === 'duyurular') {
        if(choice == 'temizle'){
            if (await member.roles.cache.some((role) => role.name.includes('Duyuruları'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Duyuruları'))
                member.roles.remove(olan)
            }
        }else if(choice == 'sunucu'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Sunucu Duyuruları')))
        }else if(choice =="egitim"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Eğitim Duyuruları')))
        }else if(choice =="kutuphane"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Kütüphane Duyuruları')))
        }else if(choice =="bakkal"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Bakkal Duyuruları')))
        }else if(choice =="etkinlik"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Etkinlik Duyuruları')))
        }else if(choice =="cekilis"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Çekiliş Duyuruları')))
        }

        interaction.deferUpdate();
    }else if (interaction.customId === 'asdasd') {
        if (await member.roles.cache.some((role) => role.name.includes('Erkek'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Erkek'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Kız'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Kız'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Belirtmek'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Belirtmek'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Hanımefendi'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Hanımefendi'))
            member.roles.remove(olancinsiyet)
        }else if (await member.roles.cache.some((role) => role.name.includes('Beyefendi'))){
            const olancinsiyet = await member.roles.cache.find((role) => role.name.includes('Beyefendi'))
            member.roles.remove(olancinsiyet)
        }

        if(choice == 'erkek'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Erkek')))
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Beyefendi')))
        }else if(choice =="kiz"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Kız')))
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Hanımefendi')))
        }else if(choice == "belirtmek"){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Belirtmek')))
        }

        interaction.deferUpdate();

    }else if (interaction.customId === 'etkinlikler') {
        if(choice == 'temizle'){
            if (await member.roles.cache.some((role) => role.name.includes('Pomodoro K'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('Pomodoro K'))
                member.roles.remove(olan)
            }
            if (await member.roles.cache.some((role) => role.name.includes('DC Oyuncusu'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('DC Oyuncusu'))
                member.roles.remove(olan)
            }
            if (await member.roles.cache.some((role) => role.name.includes('VK Oyuncusu'))){
                const olan = await member.roles.cache.find((role) => role.name.includes('VK Oyuncusu'))
                member.roles.remove(olan)
            }
        }else if(choice == 'pomodorokatilimcisi'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('Pomodoro K')))
        }else if(choice == 'dogrulukcesaret'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('DC Oyuncusu')))
        }else if(choice == 'vampirkoylu'){
            member.roles.add(await interaction.guild.roles.cache.find((role) => role.name.includes('VK Oyuncusu')))
        }
        interaction.deferUpdate();
    }
});


//DAVET SİSTEMİ
client.on('guildMemberAdd', async(member) =>{
    if(await db.get(`davetsistemi_${member.guild.id}`) == "0") return false;
    const cachedInvites = guildInvites.get(member.guild.id)
    const newInvites = await member.guild.invites.fetch();
    guildInvites.set(member.guild.id, newInvites)
    try{
        const invite = newInvites.find(i => cachedInvites.get(i.code).uses < i.uses);
     //   const inviter = client.users.cache.get(invite.inviter.id);
        const embed = new EmbedBuilder()
        .setTitle(`Bir Davet Linki Kullanıldı!`)
        .setAuthor({name: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setThumbnail(`${member.user.displayAvatarURL()}`)
        .setDescription(`
        Davet Edilen: **${member.user.tag}**\n
        Davet Eden: **${invite.inviter.tag}**\n
        Davet Kodu: **${invite.code}**\n
        Davet Kullanım: **${invite.uses}**\n
        Sunucudaki Toplam Kişi: **${member.guild.memberCount}**`)

        const davetkanaliid =  await db.get(`davetkanali_${member.guild.id}`)
        const davetkanali = member.guild.channels.cache.get(davetkanaliid)
        if(davetkanali){davetkanali.send({embeds:[embed]})}
    }catch(err){
        console.log(err);
    }
});


client.on('guildMemberUpdate', async(oldMember, newMember) => {
    if(newMember.pending == false && newMember.user.bot == false){
        newMember.roles.add("987612025012248596")  
    }
})

client.on('guildMemberAdd', async(member) => {
    let role =  member.guild.roles.cache.find(r => r.name.includes('Üye'))
    if(await db.get(`gelengidensistemi_${member.guild.id}`) == "0") return false;
    let hosgeldinfotosu;
    const hosgeldinfoto = await db.get(`hosgeldinfoto_${member.guild.id}`)
    if(hosgeldinfoto == null){
        hosgeldinfotosu = ayar.hosgeldinfoto
    }else{
        hosgeldinfotosu = hosgeldinfoto
    }
    const embed = new EmbedBuilder()
    .setTitle(member.user.tag +' sunucumuza hoş geldin!')
    .setDescription(`**${member}, sunucumuza hoş geldin! :boom:  :boom:  :boom:**`)
    .setAuthor({name: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
    .setColor(ayar.botrenk)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setImage(hosgeldinfotosu)
    const hosgeldinkanali = member.guild.channels.cache.get(await db.get(`hosgeldinkanali_${member.guild.id}`));
    hosgeldinkanali.send({embeds:[embed]});

});

client.on('guildMemberRemove', async(member) => {
    if(await db.get(`gelengidensistemi_${member.guild.id}`) == "0") return false;
    let gulegulefotosu;
    const gulegulefoto = await db.get(`gulegulefoto_${member.guild.id}`)
    if(gulegulefoto == null){
        gulegulefotosu = ayar.gulegulefoto
    }else{
        gulegulefotosu = gulegulefoto
    }
    const embed = new EmbedBuilder()
    .setTitle(member.user.tag +' sunucumuzdan ayrıldı!')
    .setDescription(`**${member}, sunucumuzdan ayrıldı! :cry: :cry: :cry:  **`)
    .setAuthor({name: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
    .setColor(ayar.botrenk)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addFields()
    .setImage(gulegulefotosu)
    const gulegulekanal = member.guild.channels.cache.get(await db.get(`gulegulekanali_${member.guild.id}`));
    gulegulekanal.send({embeds:[embed]});

});


//KAYIT SİSTEMİ
client.on('guildMemberAdd', async(member) => {
    if(await db.get(`kayitsistemi_${member.guild.id}`) == "0") return false;

    const kayitsiz =  await db.get(`kayitsizrolu_${member.guild.id}`)
    const kayitcirolu = await db.get(`kayitcirolu_${member.guild.id}`)
    const kayitkanali = member.guild.channels.cache.get(await db.get(`kayitkanali_${member.guild.id}`))
    member.roles.add(kayitsiz);

    const hesaptarihi = new Date(member.user.createdTimestamp);

        const turkceay = {
            0  : 'Ocak',
            1  : 'Şubat',
            2  : 'Mart',
            3  : 'Nisan',
            4  : 'Mayıs',
            5  : 'Haziran',
            6  : 'Temmuz',
            7  : 'Ağustos',
            8  : 'Eylül',
            9 : 'Ekim',
            10 : 'Kasım',
            11 : 'Aralık'
        }

    const kayitsizembed = new EmbedBuilder()
        .setTitle(member.user.tag+' sunucumuza hoş geldin!')
        .setDescription(`**${member}, sunucumuza hoş geldin! :boom:  :boom:  :boom:\n
> ${ayar.emojihesaptarih} Hesap Tarihi: `+hesaptarihi.getDate()+` `+turkceay[hesaptarihi.getMonth()]+` `+hesaptarihi.getFullYear()+` || `+hesaptarihi.getHours()+`:`+hesaptarihi.getMinutes()+`:`+hesaptarihi.getSeconds() +`\n
 ${ayar.emojibekle} Kayıt olmak için isminizi yazın ve yetkililerin sizi kayıt etmesini bekleyin.**`)
            .setAuthor({name: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .addFields()
  kayitkanali.send({content:`**<@&`+kayitcirolu+`>, ${member} sunucuya giriş yaptı.**`, embeds: [kayitsizembed]})
});


client.on("messageDelete", async(message) => {
    if(message.author == null) return false;
    if(message.author.bot) return false;
    if(await db.get(`logsistemi_${message.guild.id}`) == "0") return false;

    if(message.author.avatarURL() == null){
        var avatarurl = ayar.defaultavatar;
    }else{
        var avatarurl = message.author.avatarURL({dynamic: true});
    }

    if(message.content.startsWith(".")) return;
    const embed = new EmbedBuilder()
    .setColor(ayar.botrenk)
    .setTitle(":pencil: Mesaj Silindi!")
    .addFields(
      { name: "__Kanal:__", value: `<\#${message.channel.id}>` },
      { name: "__Mesajı Yazan:__", value: `${message.author.tag} - <\@${message.author.id}>`, },
      { name: "__Mesajın İçeriği:__", value: message.content }
    )
    .setTimestamp()
    .setThumbnail(avatarurl)
    .setFooter({ text: ayar.botisim, iconURL: client.user.avatarURL()});
    const log = message.guild.channels.cache.get(await db.get(`logkanal_${message.guild.id}`));
    log.send({ embeds: [embed] });
});



client.on("messageUpdate", async(oldMessage,newMessage) => {
    if(!oldMessage.guild) return false;
    if(oldMessage.author == null) return false;
    if(oldMessage.author.bot) return false;
    if(await db.get(`logsistemi_${newMessage.guild.id}`) == "0") return false;

    if(newMessage.author.avatarURL() == null){
        var avatarurl = ayar.defaultavatar;
    }else{
        var avatarurl = newMessage.author.avatarURL({dynamic: true});
    }

    if(oldMessage.content.toLowerCase().includes("http://") || oldMessage.content.toLowerCase().includes("https://")) return;
    if(oldMessage.content.startsWith("http:")) return;
    if(oldMessage.content.startsWith("https:")) return;
    const embed = new EmbedBuilder()
    .setColor(ayar.botrenk)
    .setTitle(":pencil: Mesaj Düzenlendi!")
    .addFields(
      { name: "__Kanal:__", value: `<\#${newMessage.channel.id}>` },
      { name: "__Mesajı Yazan:__", value: `${newMessage.author.tag} - <\@${newMessage.author.id}>`, },
      { name: "__Orijinal Mesaj:__", value: oldMessage.content },
      { name: "__Mesajın Yeni Hali:__", value: newMessage.content }
    )
    .setTimestamp()
    .setThumbnail(avatarurl)
    .setFooter({ text: ayar.botisim, iconURL: client.user.avatarURL()});
    const log = newMessage.guild.channels.cache.get(await db.get(`logkanal_${newMessage.guild.id}`));
    log.send({ embeds: [embed] });

});


client.on('messageCreate', async(message) => {


    //anonim mesaj
    const botid = client.user.id
    //message.guild==null
    if(message.channel.type == ChannelType.DM && message.author.id!==botid){
    if(message.content.toLowerCase().includes("http") || message.content.toLowerCase().includes("discord.gg")) return message.reply('**Mesajınızda link veya gif olmamalıdır!**');
    if(message.content.toLowerCase().includes("@")) return message.reply('**Mesajınızda etiket olmamalıdır!**');

    const itirafkanali = client.guilds.cache.get(ayar.dhdiscord).channels.cache.get("879012864881483806")
    if(!itirafkanali) return;
   // itirafkanali.bulkDelete(1).then(() => { })

        const anonimlog = client.guilds.cache.get(ayar.dhdiscord).channels.cache.get("880546997671718993")
    if(!anonimlog) return;

    setTimeout(() => {
    const yazan =  message.author.id;



        itirafkanali.send(message.content+"\n------------------------------------------------------").then(sent => {
        //anonimlog.send("Gönderen ID:"+yazan+"\nMesaj ID:"+sent.id)

                const ediembed = new EmbedBuilder()
    .setColor(ayar.botrenk)
    .setTitle(":pencil: Anonim Mesaj Geldi!")
    .addFields(
      { name: "__Mesajı Yazan:__", value: `${message.author.tag} - <\@${message.author.id}>`, },
      { name: "__Mesajın İçeriği:__", value: message.content }
    )
    .setThumbnail(ayar.botgif)
    .setFooter(ayar.botisim);

    anonimlog.send({embeds:[ediembed]});
});



        // itirafkanali.send('**--------------------------------------**\n**İtiraf eden:** Anonim\n**İtiraf: **'+message.content+'\n**--------------------------------------**')
        // itirafkanali.send('> **Kullanım: <@'+botid+'> botuna özel mesaj olarak itirafınızı yazmanız yeterlidir.**');
        message.reply('**Mesajınız anonim olarak "👻 ┊ anonim-mesaj" kanalına başarıyla gönderilmiştir.**');
        }, 1000);
   }


    let onek;
    let onekler = await db.get(`onek_${message.guild.id}`)
    if(onekler == null){onek = ayar.varsayilanonek}else{onek = onekler}

    if(!message.content.startsWith(onek)){
        if(await db.get(`bankabakiye_${message.author.id}`) == null){
            var bakiye = 150
            await db.set(`bankabakiye_${message.author.id}`, 150)

        }else{
            const yenibakiye = Number(await db.get(`bankabakiye_${message.author.id}`)) + Number(ayar.mesajbasinamiktar)
            await db.set(`bankabakiye_${message.author.id}`, yenibakiye)
        }
    }


    const args = message.content.slice(onek.length).trim().split(/\s+/g);
    const komut = args.shift().toLowerCase();
    if (message.author.bot || !message.content.startsWith(onek) || !message.guild) return;



  if(komut == 'yaz'){
        message.delete();
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanabilmeniz için yönetici rolüne sahip olmanız gerekmektedir.');
        if (!args[0]) return message.reply("**mesajı yazmadın.**");
        message.channel.send(message.content.replace(onek+'yaz', ''));

    }else if(komut == 'kayıt' || komut == 'kayit'){
        if(await db.get(`kayitsistemi_${message.guild.id}`) == "0") return false;

        const kayitcirolu = await db.get(`kayitcirolu_${message.guild.id}`)

        if(!message.member.roles.cache.has(kayitcirolu)) return message.reply({content:'kayıt komutunu kullanabilmeniz için `KAYITÇI_ROLÜ` olarak ayarlanan <@&'+kayitcirolu+'> rolüne sahip olmanız gerekmektedir!'});


        if (!args[0] || !args[1]) return message.reply('**Kullanım: '+onek+'kayıt @Etiket İsim**');
        const user = message.mentions.users.first();
        console.log(user)
        if (user) {
            const member = message.guild.members.cache.get(user.id);

                const kayitsiz =  await db.get(`kayitsizrolu_${message.guild.id}`)
                const kayitli =  await db.get(`kayitlirolu_${message.guild.id}`)
                nickiz = args.join(' ').replace(args[0]+' ', '')
                member.setNickname(nickiz);
                setTimeout(() => {member.roles.add(kayitli) }, 1000);
               // setTimeout(() => {member.roles.add(message.guild.roles.cache.find(r=> r.name === ayar.rolekstra)) }, 1000);
             //   setTimeout(() => {member.roles.add(message.guild.roles.cache.find(r=> r.name === ayar.rolhakkinda)) }, 1000);
                setTimeout(() => {

                    if(member.roles.cache.has(kayitsiz)){
                        const kayitsiz =  db.get(`kayitsizrolu_${message.guild.id}`)
                        member.roles.remove(kayitsiz)
                    }
                }, 1500);

                const embed = new EmbedBuilder()
                .setTitle('**Kayıt Başarıyla Gerçekleşti!**')
                .setDescription(`** > Kayıt Bilgileri`
                            +`\n\n ${ayar.emojikayitedilen} • Kayıt Edilen Kişi: ${member}`
                            +`\n\n ${ayar.emojikayiteden} • Kayıt Eden: <@${message.author.id}>`
                            +`\n\n • Verilen Rol: <@&${kayitli}>`
                            +'\n\n • Yeni Nick: `'+nickiz+'`**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
                .setColor(ayar.botrenk)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .addFields()
                .setImage(ayar.kayitfoto)
                message.channel.send({ embeds: [embed] });


        }else{message.reply("**Kayıt edilecek kişiyi yazmadın!**")}

    }else if(komut == 'sil'){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply('Bu komutu kullanabilmek için **MESAJLARI YÖNET** yetkisine sahip olmalısınız.');
        if (!args[0]) return message.reply("**kaç tane mesaj sileceğimi belirtmedin!**");
        const deleteCount = parseInt(args[0], 10);
        if(deleteCount > 99) return  message.reply("**Silinecek mesaj sayısı 99'dan büyük olamaz.**");
        if(deleteCount < 1) return message.reply("**Silinecek mesaj sayısı 1'den küçük olamaz.**");

        const logkanali = await db.get(`logkanal_${message.guild.id}`)
        message.channel.bulkDelete(deleteCount+1).then(() => {
            message.channel.send("```Yukarıdaki "+args[0].toString()+" adet mesaj silindi!```")
            .then(message => {
                 message.delete({ timeout: 1500 });
            })
            if(db.get(`logsistemi_${message.guild.id}`) != "0"){

                const logkan = message.guild.channels.cache.get(logkanali);
                logkan.send('**<@'+message.member.id+'> adlı yetkili beni kullanarak <#'+ message.channel.id+'> kanalındaki '+deleteCount.toString()+' mesajı silmiştir!**');
            }

        })

    }else if(komut == 'sifirla'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

        await db.set(`gelengidensistemi_${message.guild.id}`, "0")
        await db.set(`kayitsistemi_${message.guild.id}`, "0")
        await db.set(`davetsistemi_${message.guild.id}`, "0")
        await db.set(`logsistemi_${message.guild.id}`, "0")
        await db.set(`rolsistemi_${message.guild.id}`, "0")
        await db.set(`chatsistemi_${message.guild.id}`, "0")
        await db.set(`korumasistemi_${message.guild.id}`, "0")

        const basarili = new EmbedBuilder()
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setTitle("**Ayarlar sıfırlanmıştır!**")
        .setDescription('Botun bu sunucudaki ayarları varsayılana döndürülmüştür.'
                    +'\n\n**'+onek+'ayarlar** yazarak ayarları görüntüleyebilirsiniz.')
        message.channel.send({ embeds: [basarili] })

    }else if(komut == 'onek'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');
        if (!args[0]) return message.reply("**yeni ön eki yazmadınız!**");

        await db.set(`onek_${message.guild.id}`, args[0])
        message.channel.send("Bu sunununun ön eki **"+args[0]+"** olarak değişti!")

    }else if(komut == 'gelengiden'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

    const embed = new EmbedBuilder()
    .setColor(ayar.botrenk)
    .setThumbnail(ayar.botgif)
    .setTitle("**Hoş geldin ve güle güle mesajlarının atılmasını istediğiniz kanalı etiketleyiniz.**")
    .setDescription('Örnek: **'+onek+'gelengiden #hosgeldin #gulegule**\n(Aynı kanal istiyorsanız aynı kanalı iki defa etiketleyin.)')

        if (!args[0]) return message.reply({embeds:[embed]});
        if (!args[1]) return message.reply({embeds:[embed]});
        let hosgeldinkanali = args[0].replace("<#","").replace(">","");
        let gulegulekanali = args[1].replace("<#","").replace(">","");

        await db.set(`hosgeldinkanali_${message.guild.id}`, hosgeldinkanali)
        await db.set(`gulegulekanali_${message.guild.id}`, gulegulekanali)
        await db.set(`gelengidensistemi_${message.guild.id}`, "1")

        const basarili = new EmbedBuilder()
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setTitle("**Gelen-Giden Sistemi Aktifleştirilmiştir!**")
        .setDescription('Hoş geldin kanalı: '+args[0]
                    +'\nGüle güle kanalı: '+args[1])
        message.channel.send({ embeds: [basarili] })

 }else if(komut == 'gelengidenfoto'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

    const embed = new EmbedBuilder()
    .setColor(ayar.botrenk)
    .setThumbnail(ayar.botgif)
    .setTitle("**Hoş geldin ve güle güle mesajlarında olmasını istediğiniz fotoğrafın linkini yazın.**")
    .setDescription('Örnek: **'+onek+'gelengidenfoto https://ornek.com/hosgeldin.gif https://ornek.com/gulegule.gif**\n(Aynı fotoğraf istiyorsanız aynı fotoğrafın linkini iki defa yazınız.)')

        if (!args[0]) return message.reply({embeds:[embed]});
        if (!args[1]) return message.reply({embeds:[embed]});
        let hosgeldinkanali = args[0].replace("<#","").replace(">","");
        let gulegulekanali = args[1].replace("<#","").replace(">","");

        await db.set(`hosgeldinfoto_${message.guild.id}`, args[0])
        await db.set(`gulegulefoto_${message.guild.id}`, args[1])


        const basarili = new EmbedBuilder()
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setTitle("**Gelen-Giden Fotoğrafları Değiştirilmiştir!**")
        .setDescription('Hoş geldin fotoğrafı: '+args[0]
                    +'\nGüle güle fotoğrafı: '+args[1])
        message.channel.send({ embeds: [basarili] })


    }else if(komut == 'kayitsistemi'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

    const embed = new EmbedBuilder()
    .setColor(ayar.botrenk)
    .setThumbnail(ayar.botgif)
    .setTitle("**Kayıt sistemini açmak için gerekli parametreleri girmelisiniz!**")
    .setDescription('Örnek: **'+onek+'kayitsistemi #kayitchat @KAYITCI_ROLU @KAYITSIZ_UYE_ROLU @KAYITLI_UYE_ROLU**')

        if (!args[0]) return message.reply({embeds:[embed]});
        if (!args[1]) return message.reply({embeds:[embed]});
        if (!args[2]) return message.reply({embeds:[embed]});
        if (!args[3]) return message.reply({embeds:[embed]});

        let kayitkanali = args[0].replace("<#","").replace(">","");
        let kayitcirolu = args[1].replace("<@&","").replace(">","");
        let kayitsizrolu = args[2].replace("<@&","").replace(">","");
        let kayitlirolu = args[3].replace("<@&","").replace(">","");


        await db.set(`kayitkanali_${message.guild.id}`, kayitkanali)
        await db.set(`kayitcirolu_${message.guild.id}`, kayitcirolu)
        await db.set(`kayitsizrolu_${message.guild.id}`, kayitsizrolu)
        await db.set(`kayitlirolu_${message.guild.id}`, kayitlirolu)
        await db.set(`kayitsistemi_${message.guild.id}`, "1")

        const basarili = new EmbedBuilder()
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setTitle("**Kayıt Sistemi Aktifleştirilmiştir!**")
        .setDescription('Kayıt Kanalı: '+args[0]
                    +'\nKayıtçı Rolü: '+args[1]
                    +'\nKayıtsız Üye Rolü: '+args[2]
                    +'\nKayıtlı Üye Rolü: '+args[3])
        message.channel.send({ embeds: [basarili] })

    }else if(komut == 'davet'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

         const embed = new EmbedBuilder()
         .setColor(ayar.botrenk)
         .setThumbnail(ayar.botgif)
         .setTitle("**Davet sistemini açmak için davet kanalını etiketleyin.**")
         .setDescription('**Örnek: '+onek+'davet #davet-kanali**')

        if (!args[0]) return message.reply({embeds:[embed]});
        let logkanali = args[0].replace("<#","").replace(">","");

        await db.set(`davetkanali_${message.guild.id}`, logkanali)
        await db.set(`davetsistemi_${message.guild.id}`, "1")

        const basarili = new EmbedBuilder()
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setTitle("**Davet Sistemi Aktifleştirilmiştir!**")
        .setDescription('Davet kanalı: '+args[0])
        message.channel.send({embeds: [basarili]})

    }else if(komut == 'log'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

         const embed = new EmbedBuilder()
         .setColor(ayar.botrenk)
         .setThumbnail(ayar.botgif)
         .setTitle("**Log sistemini açmak için log kanalını etiketleyin.**")
         .setDescription('**Örnek: '+onek+'log #log-kanali**')

        if (!args[0]) return message.reply({embeds:[embed]});
        let logkanali = args[0].replace("<#","").replace(">","");


        const logkanalikontrol = message.guild.channels.cache.get(logkanali)
        if(!logkanalikontrol) return message.channel.send("**Kanka böyle bi' kanal yok.**");

        await db.set(`logkanal_${message.guild.id}`, logkanali)
        await db.set(`logsistemi_${message.guild.id}`, "1")

        const basarili = new EmbedBuilder()
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setTitle("**Log Sistemi Aktifleştirilmiştir!**")
        .setDescription('Log kanalı: '+args[0])
        message.channel.send({ embeds: [basarili] })

    }else if(komut == 'rol'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

         const embed = new EmbedBuilder()
         .setColor(ayar.botrenk)
         .setThumbnail(ayar.botgif)
         .setTitle("**Rol sistemini açmak için rol kanalını etiketleyin.**")
         .setDescription('**Örnek: '+onek+'rol #rol-kanali**')

        if (!args[0]) return message.reply({embeds:[embed]});
        let rolkanali = args[0].replace("<#","").replace(">","");

        await db.set(`rolkanali_${message.guild.id}`, rolkanali)
        await db.set(`rolsistemi_${message.guild.id}`, "1")

        const basarili = new EmbedBuilder()
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setTitle("**Rol Sistemi Aktifleştirilmiştir!**")
        .setDescription('Rol kanalı: '+args[0])
        message.channel.send({ embeds: [basarili] })

    }else if(komut == 'chat'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

        await db.set(`chatsistemi_${message.guild.id}`, "1")

         const basarili = new EmbedBuilder()
         .setColor(ayar.botrenk)
         .setThumbnail(ayar.botgif)
         .setTitle("**Chat Sistemi Aktifleştirilmiştir**")
         .setDescription('Bu sunucuda botun sohbete eşlik etme özelliği aktifleştirilmiştir.\n**(Kapatmak için: '+onek+'kapat chat)**')
        message.channel.send({ embeds: [basarili] })
    }else if(komut == 'koruma'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');


        const embed = new EmbedBuilder()
         .setColor(ayar.botrenk)
         .setThumbnail(ayar.botgif)
         .setTitle("**Koruma sistemini açmak için susturulmuş rolünü etiketleyin.**")
         .setDescription('**Örnek: '+onek+'koruma @muted-rolu**')

        if (!args[0]) return message.reply({embeds:[embed]});
        let korumarolu = args[0].replace("<@&","").replace(">","");

        await db.set(`korumarolu_${message.guild.id}`, korumarolu)
        await db.set(`korumasistemi_${message.guild.id}`, "1")

         const basarili = new EmbedBuilder()
         .setColor(ayar.botrenk)
         .setThumbnail(ayar.botgif)
         .setTitle("**Koruma Sistemi Aktifleştirilmiştir**")
         .setDescription('Susturulmuş rolü: '+args[0]+'\nBu sunucuda koruma sistemi aktifleştirilmiştir. Koruma sistemi discord davet reklam linki gibi şeyleri engeller.\n**(Kapatmak için: '+onek+'kapat koruma)**')
        message.channel.send({ embeds: [basarili] })

    }else if(komut == 'kapat'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');
        if (!args[0]) return message.reply("**Hangi sistemi kapatacağını yazmadın.**");
        if(args[0] == 'gelengiden'){
            await db.set(`gelengidensistemi_${message.guild.id}`, "0")
            const basarili = new EmbedBuilder()
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
            .setTitle("**Gelen-Giden Sistemi Kapatılmıştır!**")
            .setDescription("Bu sunucuda gelen-giden sistemi kapatılmıştır!")
             message.channel.send({ embeds: [basarili] })

        }else if(args[0] == 'kayit'){
            await db.set(`kayitsistemi_${message.guild.id}`, "0")
            const basarili = new EmbedBuilder()
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
            .setTitle("**Kayıt Sistemi Kapatılmıştır!**")
            .setDescription("Bu sunucuda kayıt sistemi kapatılmıştır!")
             message.channel.send({ embeds: [basarili] })

        }else if(args[0] == 'davet'){
            await db.set(`davetsistemi_${message.guild.id}`, "0")
            const basarili = new EmbedBuilder()
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
            .setTitle("**Davet Sistemi Kapatılmıştır!**")
            .setDescription("Bu sunucuda davet sistemi kapatılmıştır!")
             message.channel.send({ embeds: [basarili] })

        }else if(args[0] == 'log'){
            await db.set(`logsistemi_${message.guild.id}`, "0")
            const basarili = new EmbedBuilder()
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
            .setTitle("**Log Sistemi Kapatılmıştır!**")
            .setDescription("Bu sunucuda log sistemi kapatılmıştır!")
             message.channel.send({ embeds: [basarili] })

        }else if(args[0] == 'rol'){
            await db.set(`rolsistemi_${message.guild.id}`, "0")
            const basarili = new EmbedBuilder()
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
            .setTitle("**Rol Sistemi Kapatılmıştır!**")
            .setDescription("Bu sunucuda rol sistemi kapatılmıştır!")
             message.channel.send({ embeds: [basarili] })

        }else if(args[0] == 'chat'){
            await db.set(`chatsistemi_${message.guild.id}`, "0")
            const basarili = new EmbedBuilder()
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
            .setTitle("**Chat Sistemi Kapatılmıştır!**")
            .setDescription("Bu sunucuda chat sistemi kapatılmıştır!")
             message.channel.send({ embeds: [basarili] })

        }else if(args[0] == 'koruma'){
            await db.set(`korumasistemi_${message.guild.id}`, "0")
            const basarili = new EmbedBuilder()
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
            .setTitle("**Koruma Sistemi Kapatılmıştır!**")
            .setDescription("Bu sunucuda koruma sistemi kapatılmıştır!")
             message.channel.send({ embeds: [basarili] })
        }






    }else if(komut == 'ayarlar'){

        if(await db.get(`gelengidensistemi_${message.guild.id}`) == "0"){gelengidensistemi="kapalı"}else{gelengidensistemi="açık"}
        if(await db.get(`kayitsistemi_${message.guild.id}`) == "0"){kayitsistemi="kapalı"}else{kayitsistemi="açık"}
        if(await db.get(`davetsistemi_${message.guild.id}`) == "0"){davetsistemi="kapalı"}else{davetsistemi="açık"}
        if(await db.get(`logsistemi_${message.guild.id}`) == "0"){logsistemi="kapalı"}else{logsistemi="açık"}
        if(await db.get(`rolsistemi_${message.guild.id}`) == "0"){rolsistemi="kapalı"}else{rolsistemi="açık"}
        if(await db.get(`chatsistemi_${message.guild.id}`) == "0"){chatsistemi="kapalı"}else{chatsistemi="açık"}
        if(await db.get(`korumasistemi_${message.guild.id}`) == "0"){korumasistemi="kapalı"}else{korumasistemi="açık"}

        const embed = new Discord.EmbedBuilder()
        .setTitle(`"${message.guild.name}" sunucusu için bot ayarları`)
        .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setThumbnail(ayar.botgif)
        .setColor(ayar.botrenk)
        .setDescription('Şu an **'+ayar.botisim+ '** botunun bu sunucudaki ayarları gösterilmektedir.')
        .addFields(
        {
            name: 'Şu anki Ayarlar',
            value: "Bot Ön Eki: **"+onek
                 +"**\nGelen-giden: **"+gelengidensistemi
                 +"**\nKayıt Sistemi: **"+kayitsistemi
                 +"**\nDavet Sistemi: **"+davetsistemi
                 +"**\nLog Sistemi: **"+logsistemi
                 +"**\nRol Sistemi: **"+rolsistemi
                 +"**\nChat Sistemi: **"+chatsistemi
                 +"**\nKoruma Sistemi: **"+korumasistemi+"**"
        },
        {
            name: ':gear: Ayar Komutları',
            value: ayar.yardimayarlar.replace('/',onek)
        },)
        message.channel.send({ embeds: [embed] });
    }


    if(komut == 'yardim' || komut =='yardım' || komut == 'help'){
        const embed = new EmbedBuilder()
        .setTitle('Selamlar ben '+ayar.botisim)
        .setDescription('Senin için şunları yapabilirim:\n')
        .addFields(
        { name: ':busts_in_silhouette: **Normal Üye Komutları**', value: ayar.yardimnormal.replace('/',onek)+'\n\n' },
        { name: ':bank: **Banka Komutları**', value: ayar.yardimbanka.replace('/',onek)+'\n\n' },
        { name: ':gear: **Yönetici Yetkili Komutlar**', value: ayar.yardimayarlar.replace('/',onek) },)
        .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        message.channel.send({ embeds: [embed] });

     }else if(komut == 'tokatla'){
        if (!args[0]) return message.reply("**Kimi tokatlayacağını yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Tokat manyağı oldun!')
        .setDescription('**'+args[0]+', <@'+message.author.id+'> tarafından tokatlandı!**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif')
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'yumrukla'){
        if (!args[0]) return message.reply("**Kimi yumruklayacağını yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('YUMRUKLANDIN!')
        .setDescription('**'+args[0]+', <@'+message.author.id+'> tarafından yumruklandı!**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://media.tenor.com/images/fb4876b97463c6d7875e62ace978aeb2/tenor.gif')
        message.channel.send({ embeds: [embed] });
    }else if(komut == 'öp' || komut == 'op'){
        if (!args[0]) return message.reply("**Kimi öpeceğini yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Öptü öptü!')
        .setDescription('**'+args[0]+', <@'+message.author.id+'> tarafından öpüldü!**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://media4.giphy.com/media/W1hd3uXRIbddu/200.gif')
        message.channel.send({ embeds: [embed] });
    }else if(komut == 'yala'){
        if (!args[0]) return message.reply("**Kimi yalayacağını yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Hobaa Hocam!')
        .setDescription("**<@"+message.author.id+">, "+args[0]+"'i yaladı!**")
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://i.pinimg.com/originals/cc/08/7a/cc087a0a72dfb9ee31601f672995d86b.gif')
        message.channel.send({ embeds: [embed] });
    }else if(komut == 'hickey'){
        if (!args[0]) return message.reply("**Kimi emeceğini yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Bu işte bi kahbelik olabilir')
        .setDescription("**<@"+message.author.id+">, "+args[0]+"'i emdi!**")
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://thumbs.gfycat.com/PhysicalAstonishingJoey-size_restricted.gif')
        message.channel.send({ embeds: [embed] });
    }else if(komut == 'saril' || komut == 'sarıl'){
        if (!args[0]) return message.reply("**Kime sarılacağını yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Sarıldı sarıldı!')
        .setDescription("**<@"+message.author.id+">, "+args[0]+"'e sarıldı!**")
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://media.tenor.com/images/2d45b2e842cac286aa91cec91a7a17d7/tenor.gif')
        message.channel.send({ embeds: [embed] });
    }else if(komut == 'paspas'){
        if (!args[0]) return message.reply("**Kime paspas çekeceğini yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Paspassss!')
        .setDescription("**<@"+message.author.id+">, "+args[0]+"'i paspasladı!**")
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://cdn-mgsm.akinon.net/products/2020/02/06/93802/83b292d3-3abc-40eb-9a86-ee0a50112f96.jpg')
        message.channel.send({ embeds: [embed] });
    }else if(komut == 'kelepcele' || komut == 'kelepçele'){
        if (!args[0]) return message.reply("**Kimi kelepçeleyeceğini yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Yakalandınnn!')
        .setDescription("**<@"+message.author.id+">, "+args[0]+"'i kelepçeledi!**")
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://d.wattpad.com/story_parts/207348376/images/1428be96afee9dc7.gif')
        message.channel.send({ embeds: [embed] });
    }else if(komut == 'gelhele'){
        if (!args[0]) return message.reply("**Kime gel gel diyeceğini yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Bırakın Gelsin!')
        .setDescription("**<@"+message.author.id+">, "+args[0]+"'i gel gel dedi!**")
        .setAuthor(ayar.botisim, client.user.avatarURL())
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://c.tenor.com/0gAcYpqSG5QAAAAC/bring-it-are-you-ready.gif')
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'özür' || komut == 'ozur'){
        if (!args[0]) return message.reply("**Kimden özür dileyeceğini yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Özür dilerimm!')
        .setDescription('**<@'+message.author.id+'>,'+args[0]+' den özür diliyor!**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://cdn.firespring.com/images/a6984b6d-0f0e-48a9-9ca8-b4bcb92eb527.gif')
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'agla' | komut == 'ağla'){
        let aglagif = ["https://media1.tenor.com/images/fea8a1b63aa0611d3ae7c84d9612944a/tenor.gif",
                      "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
                      "https://media1.giphy.com/media/3DE8eBtxSQsKc/giphy.gif"]
        const embed = new EmbedBuilder()
        .setTitle("Hüü hüüü")
        .setDescription('**<@'+message.author.id+'>, ağlamaya başladı.**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage(aglagif[Math.floor(Math.random() * aglagif.length)])
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'dodge'){
        if (!args[0]) return message.reply("**Kimi dodgelayacağını yazmadın!**");
        let dgif = ["https://media1.tenor.com/images/b2fddc90df44d435876be262501a24d2/tenor.gif?itemid=6183298"]
        const embed = new EmbedBuilder()
        .setTitle("Ohooo Dodgeladı!")
        .setDescription('**<@'+message.author.id+'>, '+args[0]+' den gelen saldırıları dodgeladı.**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage(dgif[Math.floor(Math.random() * dgif.length)])
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'sus'){
       if (!args[0]) return message.reply("**Kime sus diyeceğini yazmadın!**");
        const embed = new EmbedBuilder()
        .setTitle('Aaaa bi sus!')
        .setDescription('**<@'+message.author.id+'>, '+args[0]+' den susmasını rica ediyor!**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage('https://media1.tenor.com/images/15c24f8a685e1b563c249e47e28511d0/tenor.gif?itemid=18438239')
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'cheers'){
        const embed = new EmbedBuilder()
        .setTitle("Şerefeeee!")
        .setDescription('**<@'+message.author.id+'>, bardağı kaldırdı :D**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage("https://media1.tenor.com/images/cc47224b8dcebe5eca1e31e131a29fa7/tenor.gif?itemid=13888211")
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'shot'){
        const embed = new EmbedBuilder()
        .setTitle("Bi' Shot Attın!")
        .setDescription('**<@'+message.author.id+'>, shot attı**')
                .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail(ayar.botgif)
        .setImage("https://i.imgur.com/ZYgXwn9.gif")
        message.channel.send({ embeds: [embed] });
     }else if(komut == 'yak'){
         message.delete({timeout: 1000});
         message.channel.send(':smoking: :cloud: :cloud: :cloud:')
         .then(message => {
              setTimeout(() => {message.edit(':smoking: :cloud: :cloud:')
                    setTimeout(() => {message.edit(':smoking: :cloud:')
                                        setTimeout(() => {message.edit(':smoking:')}, 1500)
            }, 1500)
         }, 1500)
                    message.delete({ timeout: 5000 });
             })

     }else if(komut == 'meme'){
         const subReddits = ["dankmeme", "meme", "me_irl"];
         const random = subReddits[Math.floor(Math.random() * subReddits.length)];
         try {
              const { body } = await snekfetch
              .get(`https://www.reddit.com/r/${random}.json?sort=top&t=week`)
              .query({ limit: 800 });
              const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
              if (!allowed.length) return message.channel.send('It seems we are out of memes');
              const randomnumber = Math.floor(Math.random() * allowed.length)
              const embed = new EmbedBuilder()
              .setColor(ayar.botrenk)
              .setTitle(allowed[randomnumber].data.title)
              .setDescription("Posted by: " + allowed[randomnumber].data.author)
              .setImage(allowed[randomnumber].data.url)
              .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
              .setFooter("r/" + random)
              message.channel.send({embeds:[embed]})
        } catch (err) {return console.log(err);}
     }else if(komut == 'zarat'){
         const zarsayi = Math.floor( Math.random() * 6 ) +1
         message.reply('Senin için zar attım ve **'+zarsayi+'** çıktı!')
     }else if(komut == 'espri'){
        message.channel.send('**'+ayar.espriler[Math.floor(Math.random() * ayar.espriler.length)]+'**');
     }else if(komut == 'söz' || komut == 'soz'){
        if(message.guild.id != ayar.dhdiscord) return false;
        message.channel.send('**'+ayar.sozler[Math.floor(Math.random() * ayar.sozler.length)]+'**');
     }else if(komut == 'özlüsöz' || komut == 'özlüsoz' || komut == 'ozlusoz'){
        message.channel.send('**'+ayar.ozlusozler[Math.floor(Math.random() * ayar.ozlusozler.length)]+'**');
    }else if(komut == 'ters'){
        if (!args[0]) return message.reply("**Tersten yazılacak şeyi yazmadın!**");
        function reverseString(str) {return str.split("").reverse().join("");}
        let sreverse = reverseString(args.join(' '))
        if(args[0] === sreverse) {sreverse = `${args.join(' ')}`}
        message.channel.send(`${sreverse}`)

     }else if(komut == 'emojiyazi' || komut == 'emojiyazı'){
        if (!args[0]) return message.reply("**Emojiye dönüştüreceğin yazıyı yazmadın!**");
       let numWords = ['zero','one','two','three','four','five','six','seven','eight','nine'];

        let charTable = {
          "!": 'exclamation',
          "?": 'question',
          "+": "heavy_plus_sign",
          "-": "heavy_minus_sign",
          "×": "heavy_multiplication_x",
          "*": "asterisk",
          "$": "heavy_dollar_sign",
          "/": "heavy_division_sign"
        };

        function donustur(input){
          input = [...input.toLowerCase()];
          let finalString = '';
          for (let i = 0; i < input.length; i++) {
            let rawChar = input[i];
            let emojiText = '';
            if (rawChar.match(/[a-z]/i)) {
              emojiText = `regional_indicator_${rawChar}`;
            } else if (rawChar.match(/[0-9]/i)) {
              emojiText = `${numWords[parseInt(rawChar)]}`;
            } else if (rawChar !== ' ') {
              let symbol = charTable[rawChar];
              if (!symbol) continue;
              emojiText = symbol;
            } else {
              finalString += `   `;
              continue;
            }
            finalString += `:${emojiText}: `;
          }
          return finalString.trimEnd()
        }

        const emojiyazi = args.join(' ').replace(args[0]+' ', '')
        message.channel.send(donustur(emojiyazi))

    }else if(komut == 'tarot'){
        const embed = new EmbedBuilder()
        .setTitle('Tarot kartın çıktı!')
        .setDescription('**<@'+message.author.id+'> tarot kartın bu.\n\n[Anlamı İçin Tıklayınız](http://sozluk.falderyasi.com/tarot-kartlari-ve-anlamlari)**')
        .setAuthor('')
        .setColor(ayar.botrenk)
        .setThumbnail('')
        .setImage(ayar.tarotkart[Math.floor(Math.random() * ayar.tarotkart.length)])
        message.channel.send({ embeds: [embed] });

    }else if(komut == 'avatar'){
        let kullanıcı = message.mentions.members.first();
        if(kullanıcı){
            const embed = new Discord.EmbedBuilder()
            .setDescription(`${kullanıcı} Kişisinin Profil Resmi`)
            .setColor(ayar.botrenk)
            .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send({ embeds: [embed] })
        }else{
            const embed = new Discord.EmbedBuilder()
            .setDescription(`${message.author} Profil Resmin`)
            .setColor(ayar.botrenk)
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
            message.channel.send({ embeds: [embed] })
        }

    }else if(komut === 'sunucubilgi'){
        const sunucutarihi = new Date(message.guild.createdTimestamp)
        const sunucuolusma = sunucutarihi.getDate()+`/`+sunucutarihi.getMonth()+`/`+sunucutarihi.getFullYear()+` `+sunucutarihi.getHours()+`:`+sunucutarihi.getMinutes()+`:`+sunucutarihi.getSeconds()

        let kayitcirolu = "yok"
        let kayitsizrolu = "yok"
        let kayitlirolu = "yok"
        let korumarolu = "yok"

        if(await db.get(`kayitsistemi_${message.guild.id}`) == "1"){
            kayitcirolu = '<@&'+await db.get(`kayitcirolu_${message.guild.id}`)+'>'
            kayitsizrolu = '<@&'+await db.get(`kayitsizrolu_${message.guild.id}`)+'>'
            kayitlirolu = '<@&'+await db.get(`kayitlirolu_${message.guild.id}`)+'>'
        }

        if(await db.get(`korumasistemi_${message.guild.id}`) == "1"){
            korumarolu = '<@&'+await db.get(`korumarolu_${message.guild.id}`)+'>'
        }

        const bolge = {
            brazil: 'Brazil',
            europe: 'Avrupa',
            hongkong: 'Hong Kong',
            india: 'India',
            japan: 'Japan',
            russia: 'Russia',
            singapore: 'Singapore',
            southafrica: 'South Africa',
            sydeny: 'Sydeny',
            'us-central': 'US Central',
            'us-east': 'US East',
            'us-west': 'US West',
            'us-south': 'US South'
        };

        const seviye = {
            TIER_1 : 'Seviye 1',
            TIER_2 : 'Seviye 2'
        }
        const { guild } = message

            const { name, region, memberCount, owner, afkTimeout } = guild


            const embed = new EmbedBuilder()
              .setTitle(`"${name}" sunucusunun bilgileri`)
              .setThumbnail(guild.iconURL({ dynamic: true }))
              .addFields(

            {
                    name: 'Genel',
                    value: 'Sunucu Bölgesi: **'+bolge[region]
                    +'**\nSunucu ID: **'+message.guild.id
                    +'**\nOluşturulma: **'+sunucuolusma
                    +'**\nAFK Süresi: **'+afkTimeout/60+' dakika**',
                },
                {
                    name: 'İstatistik',
                    value: 'Toplam Üye: **'+ memberCount
                    +'**\nToplam Kategori: **'+message.guild.channels.cache.filter((c) => c.type == "GUILD_CATEGORY").size
                    +'**\nToplam Kanal: **'+message.guild.channels.cache.filter((c) => c.type !== "GUILD_CATEGORY").size
                    +'**\nToplam Rol: **'+message.guild.roles.cache.size
                    +'**\nBoost Seviyesi: **'+(seviye[message.guild.premiumTier] || "Seviye yok")
                    +'**\nBoost Sayısı: **'+(guild.premiumSubscriptionCount || "0")+'**',
                inline: true,
                },
                {
                    name: '----------',
                    value: '----------',
                inline: true,
                },
                {
                    name: 'Diğer',
                    value: 'Sunucu Sahibi: **<@'+message.guild.ownerId +'>'
                        +'**\nKayıtçı Rolü: **'+kayitcirolu
                        +'**\nKayıtlı Üye Rolü: **'+kayitlirolu
                        +'**\nKayıtsız Üye Rolü: **'+kayitsizrolu
                        +'**\nSusturulmuş Rolü: **'+korumarolu+'**',
                inline: true,
                }

              )
        message.channel.send({ embeds: [embed] });

    }else if(komut == 'botbilgi'){
    const owner = message.guild.fetchOwner()


    }else if(komut == 'sunucular'){
        let sunucular = "";
        client.guilds.cache.forEach(guild => {
            sunucular += `**${guild.name}** adlı sunucu ve **${guild.memberCount}** üyesi var.\n`
        })

        const embed = new EmbedBuilder()
            .setTitle('Ekli olduğum sunucular')
            .setDescription(sunucular)
            .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
            .setColor(ayar.botrenk)
            .setThumbnail(ayar.botgif)
        message.channel.send({ embeds: [embed]})

    }else if(komut == 'davetet'){
        const embed = new EmbedBuilder()
        .setTitle('Davet linkleri aşağıda bulunmaktadır.')
        .setDescription('**\n⋙ [Bot Davet Linki]('+ayar.davet+')\n\n'
            +'⋙ [Bot Destek Sunucusu]('+ayar.destek+')\n**')
        .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
        .setColor(ayar.botrenk)
        .setThumbnail("https://cdn.dribbble.com/users/469578/screenshots/3159915/take-your-invite.gif")
        message.channel.send({ embeds: [embed] });


    }else if(komut == 'yapimci' || komut == 'yapımcı'){
        message.channel.send("**Tabii ki <@940637478384197642> yaptı :heart: :heart: :heart:**")


//BANKA KOMUTLARI
    }else if(komut == 'banka'){
        if (!args[0]){
            if(await db.get(`bankabakiye_${message.author.id}`) == null){
                var bakiye = 150
                await db.set(`bankabakiye_${message.author.id}`, 150)

            }else{
                var bakiye = await db.get(`bankabakiye_${message.author.id}`)
            }
            const embed = new EmbedBuilder()
            //.setTitle()
            .setDescription('Banka sistemi komutları aşağıdadır:                             \n')
            .addFields(
            { name: ':bank: **Banka Komutları**', value: ayar.yardimbanka.replace('/',onek)
            +'\n\n'+"**Bakiye: "+bakiye.toLocaleString()+" "+ayar.birim+"**" },)
            .setAuthor({name: message.author.username, iconURL : message.author.displayAvatarURL({ dynamic: true }), url: 'https://dsc.gg/donanim'})
            .setColor(ayar.botrenk)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send({ embeds: [embed] });

        }else{

            if(args[0] == 'gunluk'){
                const simdi = new Date()
                const bugun = simdi.getDay().toString()
                const alinan = await db.get(`bankagunluk_${message.author.id}`)
                if(bugun == alinan){message.reply("**Bugünkü günlük paranızı zaten almışsınız.**")
                }else{
                    const embed = new EmbedBuilder()
                    .setColor(ayar.botrenk)
                    .setThumbnail(ayar.botgif)
                    .setTitle("**Günlük paranızı başarıyla aldınız.**")
                    .setDescription('**'+onek+'banka ya da '+onek+'bakiye komutu ile bakiyenizi görüntüleyebilirsiniz.**')

                    const yenibakiye = Number(await db.get(`bankabakiye_${message.author.id}`)) + Number(ayar.gunlukmiktar)
                    await db.set(`bankabakiye_${message.author.id}`, yenibakiye)
                    await db.set(`bankagunluk_${message.author.id}`, bugun)

                    message.reply({embeds:[embed]})
                }

            }else if(args[0] == 'ekle'){
                if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

                if(!args[1]){
                    message.reply("Ekleyeceğin miktarı girmedin.")
                }else{
                    const yenibakiye = Number(await db.get(`bankabakiye_${message.author.id}`)) + Number(args[1])
                    await db.set(`bankabakiye_${message.author.id}`, yenibakiye)
                }
            }else if(args[0] == 'cikar'){
                if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bunu yapabilmeniz için yönetici yetkinizin olması gerekmektedir.**');

                if(!args[1]){
                    message.reply("Çıkartacağın miktarı girmedin.")
                }else{
                    const yenibakiye = Number(await db.get(`bankabakiye_${message.author.id}`)) - Number(args[1])
                    await db.set(`bankabakiye_${message.author.id}`, yenibakiye)
                }
            }else if(args[0] == 'gonder'){
                if(!args[1] || !args[2] || isNaN(args[2])){
                    message.reply("**Örnek Kullanım: +banka gonder @Etiket 500**")
                }else{
                    const user = message.mentions.users.first();
                    if (user) {
                        const member = message.guild.members.cache.get(user);
                        if (member) {
                            if(Number(args[2]) == 0) return message.reply("**Gerçeği nasıl tanımlarsın? Eğer hissedebildiğin şeylerden bahsediyorsan, koklayabildiğin, tadabildiğin ve görebildiğin, o zaman gerçek, basitçe beynine iletilen elektronik sinyallerdir. ~Morpheus**")
                            if(Number(args[2]) > await db.get(`bankabakiye_${message.author.id}`)) return message.reply("**O kadar gönderebilecek TWR miktarına sahip değilsiniz.**")
                            const yenibakiye = Number(await db.get(`bankabakiye_${message.author.id}`)) - Number(args[2])
                            await db.set(`bankabakiye_${message.author.id}`, yenibakiye)
                            const alanbakiye = Number(await db.get(`bankabakiye_${member.id}`)) + Number(args[2])
                            await db.set(`bankabakiye_${member.id}`, alanbakiye)
                            message.channel.send("**<@"+message.author.id+"> adlı kullanıcı, <@"+ member.id +"> kullanıcısına "+Number(args[2]).toLocaleString()+" "+ayar.birim+" göndermiştir.\n\n(<@"+message.author.id+">) Gönderen Kalan Bakiye: "+yenibakiye.toLocaleString()+" "+ayar.birim+"\n(<@"+member.id+">) Alıcı Son Bakiye: "+alanbakiye.toLocaleString()+" "+ayar.birim+"**")
                        }
                    }
                }
            }
        }

}

//KUR KOMUTLARI
   if (komut === 'kur-rol'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bu komutu kullanma yetkiniz yoktur!**');



        const renkler = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('renkler')
                            .setPlaceholder('İsim renginizi buradan seçiniz.')
                            .addOptions([
                                {
                                    label: 'Kırmızı',
                                    description: 'Nick renginiz kırmızı olur.',
                                    value: 'kirmizi',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Bordo',
                                    description: 'Nick renginiz bordo olur.',
                                    value: 'bordo',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Kahverengi',
                                    description: 'Nick renginiz kahverengi olur.',
                                    value: 'kahverengi',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Turuncu',
                                    description: 'Nick renginiz turuncu olur.',
                                    value: 'turuncu',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Sarı',
                                    description: 'Nick renginiz sarı olur.',
                                    value: 'sari',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Açık Yeşil',
                                    description: 'Nick renginiz açık yeşil olur.',
                                    value: 'acikyesil',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Yeşil',
                                    description: 'Nick renginiz yesil olur.',
                                    value: 'yesil',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Cyan',
                                    description: 'Nick renginiz cyan olur.',
                                    value: 'cyan',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Mavi',
                                    description: 'Nick renginiz mavi olur.',
                                    value: 'mavi',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Lacivert',
                                    description: 'Nick renginiz lacivert olur.',
                                    value: 'lacivert',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Mor',
                                    description: 'Nick renginiz mor olur.',
                                    value: 'mor',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Pembe',
                                    description: 'Nick renginiz pembe olur.',
                                    value: 'pembe',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Beyaz',
                                    description: 'Nick renginiz beyaz olur.',
                                    value: 'beyaz',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Gri',
                                    description: 'Nick renginiz gri olur.',
                                    value: 'gri',
                                    emoji: ayar.rolrenkemoji,
                                },
                                {
                                    label: 'Siyah',
                                    description: 'Nick renginiz siyah olur.',
                                    value: 'siyah',
                                    emoji: ayar.rolrenkemoji,
                                },
                            ]),
                    );


        const cinsiyet = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('cinsiyet')
                            .setPlaceholder('Cinsiyetinizi buradan seçiniz.')
                            .addOptions([
                                {
                                    label: 'Erkek',
                                    description: 'Cinsiyetim erkek.',
                                    value:'erkek',
                                    emoji: '♂️',
                                },
                                {
                                    label: 'Kız',
                                    description: 'Cinsiyetim kız.',
                                    value:'kiz',
                                    emoji: '♀️',
                                },
                                {
                                    label: 'Belirtmek İstemiyorum',
                                    description: 'Cinsiyetimi belirtmek istemiyorum.',
                                    value:'belirtmek',
                                    emoji: '⬜',
                                },
                            ]),
                    );


        const yasaraligi = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('yasaraligi')
                            .setPlaceholder('Yaş aralığınızı buradan seçiniz.')
                            .addOptions([
                                {
                                    label: '15-20 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '1520',
                                    emoji:'📅'
                                },
                                {
                                    label: '20-25 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '2025',
                                    emoji:'📅'
                                },
                                {
                                    label: '25-30 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '2530',
                                    emoji:'📅'
                                },
                                {
                                    label: '30-35 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '3035',
                                    emoji:'📅'
                                },
                                {
                                    label: '35-40 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '3540',
                                    emoji:'📅'
                                },
                                {
                                    label: '40-45 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '4045',
                                    emoji:'📅'
                                },
                                {
                                    label: '50-55 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '5055',
                                    emoji:'📅'
                                },
                                {
                                    label: '55-60 yaşları',
                                    description: 'Bu yaş aralığındayım',
                                    value: '5560',
                                    emoji:'📅'
                                },
                            ]),
                    );


        const ilgi = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('ilgi')
                            .setPlaceholder('İlgi Alanlarınızı buradan seçiniz.')
                            .addOptions([
                                {
                                    label: 'Temizle',
                                    description: 'Seçimlerinizi kaldırır, tekrar seçmeyi unutmayın!',
                                    value:'temizle',
                                    emoji: '❌',
                                },
                                {
                                    label: 'Bilim',
                                    description: 'Bilim ilgi alanımdır.',
                                    value:'bilim',
                                    emoji: '🔬',
                                },
                                {
                                    label: 'Felsefe',
                                    description: 'Felsefe ilgi alanımdır.',
                                    value:'felsefe',
                                    emoji: '🌏',
                                },
                                {
                                    label: 'Edebiyat',
                                    description: 'İlgi alanımdır.',
                                    value:'edebiyat',
                                    emoji: '📝',
                                },
                                {
                                    label: 'Bibliyofil',
                                    description: 'Kitap düşkünüyüm.',
                                    value:'bibliyofil',
                                    emoji: '📙',
                                },
                                {
                                    label: 'Yazarlık',
                                    description: 'Yazarlık ilgi alanımdır.',
                                    value:'yazarlik',
                                    emoji: '📙',
                                },
                                {
                                    label: 'Müzik',
                                    description: 'Müzik ilgi alanımdır.',
                                    value:'muzik',
                                    emoji: '🎻',
                                },
                                {
                                    label: 'Resim',
                                    description: 'Resim ilgi alanımdır.',
                                    value:'resim',
                                    emoji: '🌈',
                                },
                                {
                                    label: 'Spor',
                                    description: 'Spor ilgi alanımdır.',
                                    value:'spor',
                                    emoji: '🏅',
                                },
                                {
                                    label: 'Yazılım',
                                    description: 'Yazılım ilgi alanımdır.',
                                    value:'yazilim',
                                    emoji: '💻',
                                },
                                {
                                    label: 'Oyunlar',
                                    description: 'Oyunlar ilgi alanımdır.',
                                    value:'oyunlar',
                                    emoji: '🔫',
                                },
                                {
                                    label: 'Film/Dizi',
                                    description: 'Film/Dizi hastasıyım.',
                                    value:'filmdizi',
                                    emoji: '🎥',
                                },
                            ]),
                    );


        const oyunlar = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('oyunlar')
                            .setPlaceholder('Oynadığınız oyunları buradan seçiniz.')
                            .addOptions([
                                {
                                    label: 'Exorcist',
                                    description: 'Phasmobia oyunu rolüdür.',
                                    value:'phasmobia',
                                    emoji: '🔫',
                                },
                                {
                                    label: "CS'ci",
                                    description: 'CS:GO oyunu rolüdür.',
                                    value:'csgo',
                                    emoji: '🔫',
                                },
                                {
                                    label: 'Valocu',
                                    description: 'Valorant oyunu rolüdür.',
                                    value:'valorant',
                                    emoji: '🔫',
                                },
                                {
                                    label: 'Sihirdar',
                                    description: 'League of Legends oyunu rolüdür.',
                                    value:'lol',
                                    emoji: '🔫',
                                },
                                {
                                    label: 'Grand Master',
                                    description: 'Satranç oyunu rolüdür.',
                                    value:'satranc',
                                    emoji: '🔫',
                                },
                                {
                                    label: 'Agent',
                                    description: 'Secret Hitler oyunu rolüdür.',
                                    value:'secrethitler',
                                    emoji: '🔫',
                                },

                            ]),
                    );

        const siniflar = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('siniflar')
                            .setPlaceholder('Sınıfınızı buradan seçiniz.')
                            .addOptions([
                                {
                                    label: '5.Sınıf',
                                    description: '5. sınıfta okuyorum.',
                                    value:'5sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: '6.Sınıf',
                                    description: '6. sınıfta okuyorum.',
                                    value:'6sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: '7.Sınıf',
                                    description: '7. sınıfta okuyorum.',
                                    value:'7sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: '8.Sınıf',
                                    description: '8. sınıfta okuyorum.',
                                    value:'8sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: '9.Sınıf',
                                    description: '9. sınıfta okuyorum.',
                                    value:'9sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: '10.Sınıf',
                                    description: '10. sınıfta okuyorum.',
                                    value:'10sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: '11.Sınıf',
                                    description: '11. sınıfta okuyorum.',
                                    value:'11sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: '12.Sınıf',
                                    description: '12. sınıfta okuyorum.',
                                    value:'12sinif',
                                    emoji: '📝',
                                },
                                {
                                    label: 'Lise Mezunu',
                                    description: 'Liseden mezun oldum, YKS için çalışıyorum.',
                                    value:'lisemezun',
                                    emoji: '📝',
                                },
                                {
                                    label: 'Üniversite (Ön Lisans)',
                                    description: 'Ön lisans okuyorum.',
                                    value:'onlisans',
                                    emoji: '📝',
                                },
                                {
                                    label: 'Üniversite (Lisans)',
                                    description: 'Lisans okuyorum.',
                                    value:'lisans',
                                    emoji: '📝',
                                },
                                {
                                    label: 'Üniversite (Yüksek Lisans)',
                                    description: 'Yüksek lisans yapıyorum.',
                                    value:'yukseklisans',
                                    emoji: '📝',
                                },
                                {
                                    label: 'Üniversite Mezunu',
                                    description: 'Universiteden mezun oldum.',
                                    value:'universitemezun',
                                    emoji: '📝',
                                },
                                {
                                    label: 'DOKTORA',
                                    description: 'Doktora yapıyorum.',
                                    value:'doktora',
                                    emoji: '📝',
                                },

                            ]),
                    );

        const alanlar = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('alanlar')
                            .setPlaceholder('Alanınızı buradan seçiniz.')
                            .addOptions([
                                {
                                    label: 'Sayısal',
                                    description: 'Alanım sayısaldır.',
                                    value:'sayisal',
                                    emoji: '📏',
                                },
                                {
                                    label: "Eşit Ağırlık",
                                    description: 'Alanım eşit ağırlıktır.',
                                    value:'esitagirlik',
                                    emoji: '⚖️',
                                },
                                {
                                    label: 'Sözel',
                                    description: 'Alanım Sözeldir.',
                                    value:'sozel',
                                    emoji: '🗣️',
                                },
                                {
                                    label: 'Yabancı Dil',
                                    description: 'Alanım yabancı dildir..',
                                    value:'yabancidil',
                                    emoji: '🌍',
                                },
                            ]),
                    );
        const dersvakit = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('dersvakit')
                            .setPlaceholder('Ne zaman çalıştığınızı buradan seçiniz.')
                            .addOptions([
                                {
                                    label: 'Temizle',
                                    description: 'Seçimlerinizi kaldırır, tekrar seçmeyi unutmayın!',
                                    value:'temizle',
                                    emoji: '❌',
                                },
                                {
                                    label: "Gündüz",
                                    description: 'Gündüzleri ders çalışırım.',
                                    value:'gunduz',
                                    emoji: '☀️',
                                },
                                {
                                    label: 'Gece',
                                    description: 'Geceleri ders çalışırım.',
                                    value:'gece',
                                    emoji: '🌙',
                                },
                            ]),
                    );

        const duyurular = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('duyurular')
                            .setPlaceholder('Almak istediğin duyuruları buradan seç.')
                            .addOptions([
                                {
                                    label: 'Temizle',
                                    description: 'Seçimlerinizi kaldırır, tekrar seçmeyi unutmayın!',
                                    value:'temizle',
                                    emoji: '❌',
                                },
                                {
                                    label: "Sunucu Duyuruları",
                                    description: 'Sunucu duyurularında bu etiketi atılır. (Genel bilgilendirme vs.)',
                                    value:'sunucu',
                                    emoji: '⚡',
                                },
                                {
                                    label: 'Eğitim Duyuruları',
                                    description: 'Eğitim duyurularında bu etiket atılır.',
                                    value:'egitim',
                                    emoji: '🏫',
                                },
                                {
                                    label: 'Kütüphane Duyuruları',
                                    description: 'Kütüphane duyurularında bu etiket atılır.',
                                    value:'kutuphane',
                                    emoji: '📚',
                                },
                                {
                                    label: 'Bakkal Duyuruları',
                                    description: 'Bakkal duyurularında bu etiket atılır.',
                                    value:'bakkal',
                                    emoji: '🤠',
                                },
                                {
                                    label: 'Etkinlik Duyuruları',
                                    description: 'Etkinlik duyurularında bu etiket atılır.',
                                    value:'etkinlik',
                                    emoji: '💃🏻',
                                },
                                {
                                    label: 'Çekiliş Duyuruları',
                                    description: 'Çekiliş duyurularında bu etiket atılır.',
                                    value:'cekilis',
                                    emoji: '🎁',
                                },
                            ]),
                    );

                 const etkinlikler = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('etkinlikler')
                            .setPlaceholder('Katılmak istediğiniz etkinlikleri buradan seçiniz.')
                            .addOptions([
                                {
                                    label: 'Temizle',
                                    description: 'Seçimlerinizi kaldırır, tekrar seçmeyi unutmayın!',
                                    value:'temizle',
                                    emoji: '❌',
                                },
                                {
                                    label: "Pomodoro Katılımcısı",
                                    description: 'Pomodoro etütlerimizden haberdar olursunuz.',
                                    value:'pomodorokatilimcisi',
                                    emoji: '⏳',
                                },
                                {
                                    label: "Doğruluk-Cesaret",
                                    description: 'Doğruluk-Cesaret oyununu oynamak için gereklidir.',
                                    value:'dogrulukcesaret',
                                    emoji: '🔮',
                                },
                                {
                                    label: "Vampir-Köylü",
                                    description: 'Vampir-Köylü oyununu oynamak için gereklidir.',
                                    value:'vampirkoylu',
                                    emoji: '🧛',
                                },
                            ]),
                    );
                    //oyunlar,yasaraligi var!
                message.channel.send({content:'**Rollerinizi buradan seçiniz:**',  components: [renkler,cinsiyet,ilgi] });
                message.channel.send({content:'**Rollerinizi buradan seçiniz:**',  components: [siniflar,alanlar,dersvakit,etkinlikler,duyurular] });


    }else if(komut === 'kur-ozeloda'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bu komutu kullanma yetkiniz yoktur!**');
        message.channel.send("**:trident: Malikâne özel oda sistemi nedir?** \n● Özel odalar, üyelerin sunucuda kendine ait açabildiği ses odalardır.Bu odalarda ister sohbet, ister oyun isterseniz de müzik dinleyebilirsiniz bu tamamen size kalmış bir şey. \n**:trident: Malikâne özel oda sistemi nasıl çalışır?** \n● 'TIKLA ODA OLUŞTUR!' kanalına tıkladığınızda otomatik olarak oluşacaktır ve size ait oda olduğundan istediğiniz şeyi yapabilirsiniz. (Odanın kullanıcı limitini ayarlamak, kullanıcıyı odadan atma, oda ismini değiştirme gibi)\n**:trident: Yukarıda saydığın işlemler nereden yapılıyor?** \nEğer giriş yaptığınız cihaz bilgisayar ise özel odanızın yanında bulunan ':gear:' işaretine basmanız yeterlidir. Şayet mobil bir cihazdan giriş yapıyorsunuz özel odanın üzerine basılı tutarak ayarlar sekmesine geçebilirsiniz.\n**:trident: Unutmamanız gerekenler!** \n● Eğer kendi özel odanızdan çıkarsanız özel oda otomatik olarak silinir.\n● Özel oda varsayılan olarak limiti 3 kişidir (kendiniz dahil). Daha az veya daha fazla kişi özel odada bulunmak istiyorsanız ayarlamanız gerekmektedir. \n\n**Herkese iyi günler ;)**")
        message.delete({timeout: 1000});
    }else if(komut === 'kur-ozeloda'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bu komutu kullanma yetkiniz yoktur!**');
        message.channel.send("**:trident: Malikâne özel oda sistemi nedir?** \n● Özel odalar, üyelerin sunucuda kendine ait açabildiği ses odalardır.Bu odalarda ister sohbet, ister oyun isterseniz de müzik dinleyebilirsiniz bu tamamen size kalmış bir şey. \n**:trident: Malikâne özel oda sistemi nasıl çalışır?** \n● 'TIKLA ODA OLUŞTUR!' kanalına tıkladığınızda otomatik olarak oluşacaktır ve size ait oda olduğundan istediğiniz şeyi yapabilirsiniz. (Odanın kullanıcı limitini ayarlamak, kullanıcıyı odadan atma, oda ismini değiştirme gibi)\n**:trident: Yukarıda saydığın işlemler nereden yapılıyor?** \nEğer giriş yaptığınız cihaz bilgisayar ise özel odanızın yanında bulunan ':gear:' işaretine basmanız yeterlidir. Şayet mobil bir cihazdan giriş yapıyorsunuz özel odanın üzerine basılı tutarak ayarlar sekmesine geçebilirsiniz.\n**:trident: Unutmamanız gerekenler!** \n● Eğer kendi özel odanızdan çıkarsanız özel oda otomatik olarak silinir.\n● Özel oda varsayılan olarak limiti 3 kişidir (kendiniz dahil). Daha az veya daha fazla kişi özel odada bulunmak istiyorsanız ayarlamanız gerekmektedir. \n\n**Herkese iyi günler ;)**")
        message.delete({timeout: 1000});
    }else if(komut === 'herkese-rol-ekle'){
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**Bu komutu kullanma yetkiniz yoktur!**');
            //let role =  message.guild.roles.cache.find(r => r.name.includes('Üye'))
            //if (!role) return message.channel.send(`**${message.author.username}**, böyle bir rol bulunamadı!`)
            message.guild.members.cache.forEach(member => member.roles.add("987612025012248596"))
      //  message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role))
        message.channel.send(`**Ekleniyor...** - 170 kişi`)

    }


})


client.on('messageCreate', async(message) => {
    if(message.author.id == client.user.id) return false;
    if(await db.get(`korumasistemi_${message.guild.id}`) == "0") return false;
    if (!message.guild) return;
   // if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
     //   return message.channel.send(`**${message.author.username}**, I do not have perms to unban someone`)
   // }

    if(message.content.toLowerCase().includes("discord.gg") || message.content.toLowerCase().includes("dsc.gg")){
        if(message.member.roles.cache.find(r => r.name === ayar.kayitlirol)) {
            const kayitli =  message.guild.roles.cache.find(r=> r.name === ayar.kayitlirol)
            const susturulmus =  message.guild.roles.cache.find(r=> r.name === ayar.susturulmusrol)
            message.member.roles.remove(kayitli)
            message.member.roles.add(susturulmus)
            message.delete({timeout: 1000});
            message.reply("**Discord davet linki attığın için susturuldun!**");

        }
    }
})


//CHAT SISTEMI
client.on('messageCreate', async(message) => {
    if(await db.get(`chatsistemi_${message.guild.id}`) == "0") return false;
    if (message.author.bot) return false;
    if(message.content.toLowerCase() == 'sa'){message.reply('**as**');
    }else if (message.content.toLowerCase().includes("günaydın") || message.content.toLowerCase().includes("gunaydın") || message.content.toLowerCase().includes("gunaydin") || message.content.toLowerCase().includes("günaydin")) {
              setTimeout(() => {message.reply('**'+ayar.gunaydin[Math.floor(Math.random() * ayar.gunaydin.length)]+'**')}, 500);
    }else if (message.content.toLowerCase().includes("iyi geceler") || message.content.toLowerCase().includes("ıyı geceler") || message.content.includes("İyi geceler") ) {
             setTimeout(() => {message.reply('**'+ayar.iyigeceler[Math.floor(Math.random() * ayar.iyigeceler.length)]+'**')}, 500);
    }else if (message.content.toLowerCase().includes("iyi akşamlar") || message.content.toLowerCase().includes("ıyı akşamlar") || message.content.toLowerCase().includes("iyi aksamlar") ) {
             setTimeout(() => {message.reply('**'+ayar.iyiaksamlar[Math.floor(Math.random() * ayar.iyiaksamlar.length)]+'**')}, 500);
    }else if (message.content.toLowerCase().includes("görüşürüz") || message.content.toLowerCase().includes("görüsürüz") || message.content.toLowerCase().includes("gorusuruz")) {
             setTimeout(() => {message.reply('**'+ayar.gorusuruz[Math.floor(Math.random() * ayar.gorusuruz.length)]+'**')}, 500);
    }
    if (message.mentions.has(client.user)) {
        if (message.content.toLowerCase().includes("mıyım") || message.content.toLowerCase().includes("miyim") || message.content.toLowerCase().includes("müyüm")  || message.content.toLowerCase().includes("muyum") ) {
             setTimeout(() => {message.reply('**'+ayar.sorucumleleri[Math.floor(Math.random() * ayar.sorucumleleri.length)]+'**')}, 500);
        }else if(message.content.toLowerCase().includes("nasılsın") || message.content.toLowerCase().includes("nasilsin")){
             setTimeout(() => {message.reply('**'+ayar.nasilsin[Math.floor(Math.random() * ayar.nasilsin.length)]+'**')}, 500);
        }
   }
});


client
    .login(ayar.token)
    .then(()=>{
        client.guilds.cache.forEach(guild => {console.log(`${guild.name} => ${guild.id}\n`)})
        console.log(`Giriş yapıldı ${client.user.tag}`)
        let index = 0;
        setInterval(() => {
            if(index === ayar.aktivite.length) index = 0;
            const yazact = ayar.aktivite[index];
            client.user.setPresence({status: "dnd",activities: [{ name: yazact }] });
            index++;
        }, 5000);
    })
    .catch((err)=>console.log(err));
