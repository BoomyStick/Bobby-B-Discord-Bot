const Discord = require('discord.js');
const bot = new Discord.Client();
var min = 0;
var max = 36;

bot.on('ready', () =>{
    console.log('Bow before your king!');
})

bot.on('message', msg=>{
    if(msg.content === "bobby b"){
        var random = Math.floor(Math.random() * (+max - +min) + +min);
        msg.reply(replies[random]);
    }
})
bot.on('message', msg=>{
    if(msg.content === "Bobby B"){
        var random = Math.floor(Math.random() * (+max - +min) + +min);
        msg.reply(replies[random]);
    }
})
bot.on('message', msg=>{
    if(msg.content === "Bobby b"){
        var random = Math.floor(Math.random() * (+max - +min) + +min);
        msg.reply(replies[random]);
    }
})
bot.on('message', msg=>{
    if(msg.content === "bobby B"){
        var random = Math.floor(Math.random() * (+max - +min) + +min);
        msg.reply(replies[random]);
    }
})
bot.on('message', msg=>{
    if(msg.content === "BOBBY B"){
        var random = Math.floor(Math.random() * (+max - +min) + +min);
        msg.reply(replies[random]);
    }
})
bot.on('message', msg=>{
    if(msg.content === "Blee"){
        msg.reply("He is a gay one")
    }
})
bot.on('message', msg=>{
    if(msg.content === "blee"){
        msg.reply("He is a gay one")
    }
})
bot.on('message', msg=>{
    if(msg.content === "line battle"){
        msg.reply("Lime battle")
    }
})
bot.on('message', msg=>{
    if(msg.content === "Line battle"){
        msg.reply("Lime battle")
    }
})
bot.on('message', msg=>{
    if(msg.content === "Line Battle"){
        msg.reply("Lime battle")
    }
})
bot.on('message', msg=>{
    if(msg.content === "line Battle"){
        msg.reply("Lime battle")
    }
})
bot.on('message', msg=>{
    if(msg.content === "Boomia"){
        msg.reply("Her tits are huge!")
    }
})
bot.on('message', msg=>{
    if(msg.content === "boomia"){
        msg.reply("Her tits are huge!")
    }
})
var replies = [
    'YOU GOT FAT!',
    'GODS I WAS STRONG THEN!',
    'COME, BOW BEFORE YOUR KING! BOW, YA SHITS!',
    'THE WHORE IS PREGNANT!',
    'YOURE THE KINGS HAND! YOULL DO AS I COMMAND, OR ILL FIND ME A HAND WHO WILL!',
    'MY, YOURE A PRETTY ONE! AND YOUR NAME IS?',
    'THEY NEVER TELL YOU HOW THEY ALL SHIT THEMSELVES! THEY DONT PUT THAT PART IN THE SONGS!',
    'CAREFUL, NED! CAREFUL NOW!',
    'WINE! WINE! MOOOOOOOOAR WINE!',
    'SHE BELONGED WITH ME!',
    'OH, ITS UNSPEAKABLE TO YOU? WHAT HER FATHER DID TO YOUR FAMILY, THAT WAS UNSPEAKABLE!',
    'STOP THIS MADNESS, IN THE NAME OF YOUR KING!',
    'IVE GOT SEVEN KINGDOMS TO RULE! ONE KING, SEVEN KINGDOMS!',
    'OHHH, SHOW US YOUR MUSCLES! YOULL BE A SOLDIER!',
    'START THE DAMN JOUST BEFORE I PISS MESELF!',
    'OUT! OUT, DAMN YOU! IM DONE WITH YOU! GO, RUN BACK TO WINTERFELL! ILL HAVE YOUR HEAD ON A SPIKE!',
    'TAKE ME TO YOUR CRYPT, I WANT TO PAY MY RESPECTS!',
    'A DOTHRAKI HORDE ON AN OPEN FIELD, NED!',
    'I WARNED YOU THIS WOULD HAPPEN! BACK IN THE NORTH, I WARNED YOU, BUT YOU DIDNT CARE TO HEAR! WELL, HEAR IT NOW!',
    'HOLD YOUR TONGUE!',
    'WHO NAMED YOU? SOME HALFWIT WITH A STUTTER??',
    'THEY NEVER TELL YOU HOW THEY ALL SHIT THEMSELVES! THEY DONT PUT THAT PART IN THE SONGS!',
    'IS THAT HOW YOU SPEAK TO YOUR KING??',
    'IT MUST WOUND YOUR PRIDE! STANDING OUT THERE, LIKE A GLORIFIED SENTRY!',
    'DID YOU EVER MAKE THE EIGHT?',
    'FORCED TO MIND THE DOOR WHILE YOUR KING EATS AND DRINKS AND SHITS AND FUCKS!',
    'YOU HEARD THE HAND, THE KINGS TOO FAT FOR HIS ARMOR! GO FIND THE BREASTPLATE STRETCHER! NOW!',
    'PISS ON THAT! SEND A RAVEN! I WANT YOU TO STAY! IM THE KING, I GET WHAT I WANT!',
    'STUPID BOY!',
    'YOU EVER FUCK A RIVERLANDS GIRL?',
    'DO YOU THINK ITS HONOR THATS KEEPING THE PEACE?! ITS FEAR! FEAR AND BLOOD!',
    'HE COULD HAVE LINGERED ON THE EDGE OF THE BATTLE WITH THE SMART BOYS, AND TODAY HIS WIFE WOULD BE MAKING HIM MISERABLE, HIS SONS WOULD BE INGRATES, AND HE WOULD BE WAKING THREE TIMES IN THE NIGHT TO PISS INTO A BOWL!',
    'EASY, BOY! YOU MIGHT BE MY BROTHER BUT YOURE SPEAKING TO THE KING!',
    'THANK THE GODS FOR BESSIE AND HER TITS',
    'YES, ITS BEEN A LONG TIME... BUT I STILL REMEMBER EVERY FACE!',
    'SURROUNDED BY LANNISTERS! EVERY TIME I CLOSE MY EYES I SEE THEIR BLONDE HAIR AND THEIR SMUG, SATISFIED FACES!',
    'WE WERE AT WAR! NONE OF US KNEW IF WE WERE GONNA GO BACK HOME AGAIN!'
];

client.login(process.env.BOT_TOKEN);
