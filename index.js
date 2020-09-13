const { Client, MessageEmbed, MessageAttachment, DiscordAPIError, Presence } = require('discord.js');

const ytdl = require("ytdl-core");

const client = new Client();

const fs = require('fs')

const prefix = ',';

const queue = new Map();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("toilet simulator 2077", {
    type: "STREAMING",
    url: "https://www.twitch.tv/monstercat"
  });
});

client.on('message', message => {
  if (message.author.bot) return;

  const arg = message.content.slice(prefix.length).trim().split(/ +/g);

  if (message.content === (prefix + "bruh")) {
    const embed = new MessageEmbed()
      .setTitle('BRUH')
      .setColor(0xff0000)
      .setDescription('bruh,you just said bruh')
      .setAuthor(message.author.username)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()
    message.channel.send(embed);
  }
  if (message.content.startsWith(prefix + 'say')) {
    const bruh = message.content.split(" ").slice(1);
    message.delete().catch(err => { message.reply('cannot delete the message') });
    var saytext = bruh.join(" ");
    message.channel.send(saytext);
  }
  if (message.content.startsWith(prefix + "meme")) {
    const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'
    const https = require('https');
    https.get(url, (result) => {
      var body = ''
      result.on('data', (chunk) => {
        body += chunk
      })

      result.on('end', () => {
        var response = JSON.parse(body)
        var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

        if (index.post_hint !== 'image') {

          var text = index.selftext
          const textembed = new Discord.MessageEmbed()
            .setTitle(subRedditName)
            .setColor(9384170)
            .setDescription(`[${title}](${link})\n\n${text}`)
            .setURL(`https://reddit.com/${subRedditName}`)

          message.channel.send(textembed)
        }

        var image = index.preview.images[0].source.url.replace('&amp;', '&')
        var title = index.title
        var link = 'https://reddit.com' + index.permalink
        var subRedditName = index.subreddit_name_prefixed

        if (index.post_hint !== 'image') {
          const textembed = new MessageEmbed()
            .setTitle(subRedditName)
            .setColor(9384170)
            .setDescription(`[${title}](${link})\n\n${text}`)
            .setURL(`https://reddit.com/${subRedditName}`)

          message.channel.send(textembed)
        }
        console.log(image);
        const imageembed = new MessageEmbed()
          .setTitle(subRedditName)
          .setImage(image)
          .setColor(9384170)
          .setDescription(`[${title}](${link})`)
          .setURL(`https://reddit.com/${subRedditName}`)
        message.channel.send(imageembed)
      }).on('error', function (e) {
        console.log('Got an error: ', e)
      })
    })
  }
  if (message.content.startsWith(prefix + 'embed')) {
    var saytext = args.join(" ");
    const say = new MessageEmbed()
      .setTitle(saytext)
      .setColor("RANDOM")
    message.channel.send(say)
  }
  if (message.content.startsWith(prefix + "rpc")) {
    let replies = [':fist:', ':v:', ':raised_hand:']

    let result = Math.floor((Math.random() * replies.length));
    message.channel.send(replies[result]);
  }
  if (message.content.startsWith(prefix + 'simpcard')) {
    const user = message.mentions.users.first();
    let replies = ['is the king of simps', 'is a big simp', 'is very gay, but still a simp', 'is a simp', 'big simp detected', 'here is your simp card :D']

    let result = Math.floor((Math.random() * replies.length));

    const pp = new MessageEmbed()
      .setTitle('SIMP CARD')
      .setColor(0xffc778)
      .setDescription(message.author.username + " " + (replies[result]))
      .setThumbnail(message.author.displayAvatarURL())
      .setFooter('you are a simp bruh')
      .setTimestamp()
    if (!user) return message.channel.send(pp);

    const pp2 = new MessageEmbed()
      .setTitle(`SIMP CARD`)
      .setColor("RANDOM")
      .setDescription(`${user.username}` + " " + (replies[result]))
      .setThumbnail(user.displayAvatarURL())
      .setFooter('you are a simp bruh')
      .setTimestamp()
    message.channel.send(pp2).catch(err => console.log);
  }
  if (message.content === (prefix + "gay")) {
    const user = message.mentions.users.first();
    const gayrate = new MessageEmbed()
      .setTitle(message.author.username)
      .setColor(0x42ecf5)
      .setDescription("you are " + Math.floor(Math.random() * 100 + 0) + ("% gay:kiss:"))
      .setThumbnail(message.author.displayAvatarURL())
    if (!user) return message.channel.send(gayrate);

    const gayrate2 = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${user.username}`)
      .setDescription('is ' + Math.floor(Math.random() * 101 + 0) + ("% gay:kiss:"))
      .setThumbnail(user.displayAvatarURL());
    message.channel.send(gayrate2).catch(err => console.log);
  }
  if (message.content.startsWith(prefix + "dice")) {
    const dice = new MessageEmbed()
      .setTitle(':game_die:')
      .setColor("RANDOM")
      .setDescription("on: " + Math.floor(Math.random() * 6 + 1))
    message.channel.send(dice);
  }
  if (message.content.startsWith(prefix + 'gaybowser')) {
    const attachment = new MessageAttachment('./gaybowserpics/gbowser1.png');
    const attachment2 = new MessageAttachment('./gaybowserpics/gbowser2.png');
    const attachment3 = new MessageAttachment('./gaybowserpics/gbowser3.png');
    const attachment4 = new MessageAttachment('./gaybowserpics/gbowser4.jpg');
    const attachment5 = new MessageAttachment('./gaybowserpics/gbowser5.png');
    const attachment6 = new MessageAttachment('./gaybowserpics/gbowser6.png');
    const attachment7 = new MessageAttachment('./gaybowserpics/gbowser7.jpg');
    const attachment8 = new MessageAttachment('./gaybowserpics/gbowser8.png');
    const attachment9 = new MessageAttachment('./gaybowserpics/gbowser9.jpg');
    const attachment10 = new MessageAttachment('./gaybowserpics/gbowser10.jpg');
    const attachment11 = new MessageAttachment('./gaybowserpics/gbowser11.jpg');
    const attachment12 = new MessageAttachment('./gaybowserpics/gbowser12.jpg');
    const attachment13 = new MessageAttachment('./gaybowserpics/gbowser13.jpg');
    const attachment14 = new MessageAttachment('./gaybowserpics/gbowser14.jpg');
    const attachment15 = new MessageAttachment('./gaybowserpics/gbowser15.jpg');
    const attachment16 = new MessageAttachment('./gaybowserpics/gbowser16.png');
    const attachment17 = new MessageAttachment('./gaybowserpics/gbowser17.jpg');
    const attachment18 = new MessageAttachment('./gaybowserpics/gbowser18.jpg');
    const attachment19 = new MessageAttachment('./gaybowserpics/gbowser19.png');
    const attachment20 = new MessageAttachment('./gaybowserpics/gbowser20.png');
    let replies = [attachment, attachment2, attachment3, attachment4, attachment5, attachment6, attachment7, attachment8, attachment9, attachment10, attachment11, attachment12, attachment13, attachment14, attachment15, attachment16, attachment17, attachment18, attachment19, attachment20]

    let result = Math.floor((Math.random() * replies.length));
    message.channel.send(replies[result]);
  }
  if (message.content.startsWith(prefix + 'pp')) {
    const user = message.mentions.users.first();
    let replies = ["8D", "8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "8===========D", "8============D", "8=============D", "8==============D", "8===============D", "8================D", "8=================D", "8=================D", "8=================D", "8===================D", "8====================D", "8======================D"]

    let result = Math.floor((Math.random() * replies.length));

    const pp = new MessageEmbed()
      .setTitle(message.author.username + ("'s pp"))
      .setColor(0xffc778)
      .setDescription(replies[result])
    if (!user) return message.channel.send(pp);

    const pp2 = new MessageEmbed()
      .setTitle(`${user.username}'s pp`)
      .setColor("RANDOM")
      .setDescription(replies[result])
    message.channel.send(pp2).catch(err => console.log);
  }
  if (message.content.startsWith(prefix + 'clit')) {
    const user = message.mentions.users.first();
    let replies = ["•", "=•", "==•", "===•", "====•", "=====•", "======•", "=======•", "========•", "=========•", "==========•", "===========•", "============•", "=============•", "==============•", "===============•", "================•", "=================•", "=================•", "=================•", "===================•", "====================•", "======================•"]

    let result = Math.floor((Math.random() * replies.length));

    const pp = new MessageEmbed()
      .setTitle(message.author.username + ("'s clit"))
      .setColor(0xffc778)
      .setDescription(replies[result])
    if (!user) return message.channel.send(pp);

    const pp2 = new MessageEmbed()
      .setTitle(`${user.username}'s clit`)
      .setColor("RANDOM")
      .setDescription(replies[result])
    message.channel.send(pp2).catch(err => console.log);
  }
  if (message.content.startsWith(prefix + "serverinfo")) {
    const serverinfo = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Server Info")
      .setImage(message.guild.iconURL)
      .setDescription(`${message.guild}'s information`)
      .addField("Owner", `The owner of this server is ${message.guild.owner}`)
      .addField("Member Count", `This server has ${message.guild.memberCount} members`)
      .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
      .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
    message.channel.send(serverinfo);
  }
  if (message.content.includes('nigger')) {
    const niggers = new MessageEmbed()
      .setTitle('NIGGERS?!?!?!?!?!')
      .setColor(0x42ecf5)
      .setDescription('you said the n-word!')
      .setAuthor(message.author.username)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()
    message.delete().catch(err => { message.reply('cannot delete the message') });
    message.channel.send(niggers);
  }
  if (message.content.startsWith(prefix + "yes")) {
    message.react('👍')
  }
  if (message.content === ',rng') {
    message.channel.send("random number is " + (Math.random() * 10 + 1))
  }
  if (message.content.startsWith(prefix + 'am i gay?')) {
    let replies = ["yes", "no"]

    let result = Math.floor((Math.random() * replies.length));
    message.channel.send(replies[result]);
  }
  if (message.content.startsWith(prefix + 'rap')) {
    let replies = ["La di da di da, slob on me knob Pass me some syrup, fuck me in the car La di da di da , mothafuck the law Chitty chitty bang, murder everything, ", "I'm like bitch, who is your mans?, aye Can't keep my dick in my pants, aye My bitch don't love me no more, aye She kick me out I'm like vro, aye That bitch don't wanna be friends, aye I gave her dick, she got mad, aye She put her tongue on my dick, aye Look at my wrist, about 10, aye Just got a pound of that boof, aye Brought that shit straight to the booth, aye Tommy my Hilfiger boots, aye She said want fuck bitch, I do, aye You put a gun on my mans, aye I put a hole in your parents, aye I just got lean on my ksubis, aye I got an uzi no uzi, aye", "I should've let you know, that you're my only one I know you're feeling numb, I'll fuck you 'til you cum Said, I don't understand, how yu don't got a man You want me in your bed, 'cause I've been in your head", "I don't really care if you cry On the real you should've never lied Should've saw the way she looked me in my eyes She said baby I am not afraid to, die Push me to the edge All my friends are dead Push me to the edge All my friends are dead Push me to the edge All my friends are dead Push me to the edge", "Back in elementary, I thrived on misery Left me alone I grew up amongst a dying breed Inside my mind couldn't find a place to rest Until I got that Thug Life tatted on my chest Tell me can you feel me I'm not living in the past, you wanna last? Be the first to blast Remember Kato No longer with us; he's deceased Call on the sirens, seen him murdered in the streets, now rest in peace Is there heaven for a G? Remember me So many homies in the cemetery, shed so many tears", "Hoes mad, hoes mad, I pull up in that old Jag Hoe fast,", "Ayy, ayy, plug walk (plug walk, plug, plug) I don't even understand how the fuck my plug talk (huh? what, what?) Pick him up in a space coupe, I don't let my plug walk (skrrt, pull up in a space coupe) New freak, had to cut my other lil' bitch off (ooh, ooh, lil' bitch) 50K, you could come and book a nigga for a plug walk", "They trying to be crazy (Crazy) They trying to be crazy (Crazy) She wanna meet Carti (Carti) That bitch is a Barbie (Barbie) I'ma fuck these hoes (Celine) I'm on 730 A brand new pack like Kid Cudi I smoke dope like Kid Cudi Push up and get the slugs from me I'm with all the shits", "Go, go, go, go go, go, go, shawty It's your birthday We gon' party like it's yo birthday We gon' sip Bacardi like it's your birthday And you know we don't give a fuck It's not your birthday!"]

    let result = Math.floor((Math.random() * replies.length));
    message.channel.send(replies[result]);
  }
  if (message.content.startsWith(prefix + 'sing')) {
    let replies = ["Too late, my time has come Sends shivers down my spine Body's aching all the time Goodbye everybody, I've got to go Gotta leave you all behind and face the truth", "She was more like a beauty queen from a movie scene I said don't mind, but what do you mean, I am the one Who will dance on the floor in the round? She said I am the one, who will dance on the floor in the round", "Havana, ooh na-na (ay) Half of my heart is in Havana, ooh-na-na (ay, ay) He took me back to East Atlanta, na-na-na Oh, but my heart is in Havana (ay) There's somethin' 'bout his manners (uh huh) Havana, ooh na-na (uh)", "you're so            fucking          precious when you    :revolving_hearts: SMILE :two_hearts:", "Don't be that way Fall apart twice a day I just wish you could feel what you say Show, never tell But I know you too well Got a mood that you wish you could sell", "So you're a tough guy Like it really rough guy Just can't get enough guy Chest always so puffed guy I'm that bad type Make your mama sad type Make your girlfriend mad tight Might seduce your dad type I'm the bad guy, duh", "I'm so happy, happy-go-lucky me I just go my way, living ev'ry day I don't worry, worrying don't agree Winter, Fall and Spring, I just smile and sing", "Fly me to the moon Let me play among the stars Let me see what spring is like On a, Jupiter and Mars In other words, hold my hand In other words, baby, kiss me", "The falling leaves drift by the window The autumn leaves of red and gold I see your lips, the summer kisses The sun-burned hands I used to hold", "da me da ne dame yo dame na no yo anta ga suki de sukisugite dore dake tsuyoi osake demo yugamanai omoide ga       BAKAMITAI"]

    let result = Math.floor((Math.random() * replies.length));
    message.channel.send(replies[result]);
  }
  if (message.content.startsWith(prefix + "pfp")) {
    const user = message.mentions.users.first();
    const pfp = new MessageEmbed()
      .setTitle(message.author.username + "'s pfp")
      .setImage(message.author.displayAvatarURL())
    if (!user) return message.channel.send(pfp);

    const pfp2 = new MessageEmbed()
      .setTitle(`${user.username}'s pfp`)
      .setImage(`${user.displayAvatarURL()}`)
    message.channel.send(pfp2);
  }
  if (message.content.startsWith(prefix + "bruhsfx")) {
    var VC = message.member.voice.channel;
    if (!VC)
      return message.reply("join vc")
    VC.join()
      .then(connection => {
        const dispatcher = connection.play('./sounds/bruh.mp3');
        dispatcher.on("end", end => { VC.leave() });
      })
      .catch(console.error);
  }
  if (!message.guild) return;

  if (message.content.startsWith(prefix + "gundown")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('bruh')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("he is not there");
      }
    } else {
      message.reply("who");
    }
    if (!message.guild) return;
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server ${member}`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`${member} sucks big pp`);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}

client.login(process.env.TOKEN);