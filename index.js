const token = "1656841759:AAEE2kjBr8sjTwkunLKcxKmMbtQ_ue4m1pY";
const bot = new (require('node-telegram-bot-api'))(token, { polling: true });

const appeal = [
    "Вы посмотрите на него, он опять в тиктоке сидит!",
    "Ты мало того что сам не работаешь, так еще другим не даешь!",
    "Это правда смешно по твоему?",
    "Ну у меня вообше нет слов если честно",
    "Будь проклят тот день, когда человечество придумала тикток",
    "Ниже только люди, которые записывает видео сообщения посреди рабочего дня",
    "У тебя друзья то есть, имбЕцил?",
    "Если бы я мог самоуничтожиться, то я бы это обязательно сделал",
    "Тик ток хуже короны"
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

bot.on('message', (msg) =>  {
    if (msg.text.includes("vm.tiktok.com")) {
        bot.sendMessage(msg.chat.id, `${appeal[getRandomInt(0, appeal.length)]}`);
    }
});

