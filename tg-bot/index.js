const TelegramApi = require('node-telegram-bot-api')
const fs = require('fs');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg')
const ytdl = require('ytdl-core');

const token = '6281013427:AAFlZEOZ9iqQfABKQV9N3ple05rOvBvlXoM'
const bot = new TelegramApi(token, {polling: true})

ffmpeg.setFfmpegPath('C:/Windows/ffmpeg.exe');
module.exports = ffmpeg;

bot.on('message', msg => {
    let text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
        bot.sendMessage(chatId, "Привет! Для конвертирования видео в аудио вставь ссылку на Ютуб-видео," +
            " а бот пришлёт тебе аудиодорожку\n Вот список команд, которые выполняяет бот: \n" +
            "1) /audio \n Конвертировать ютуб видео в аудио\n2) /audiocut \n Обрезает только что отправленное " +
            "аудиосообщение по двум интервалам.")
    }

    if (text === "/audio") {
        bot.sendMessage(chatId, "Введите ссылку на YouTube-видео");

        bot.on('message', msg => {
            let videoUrl = msg.text;

            const outputFilePath = 'video.mp4';
            const outputFile = 'audio.mp3';

            console.log("Video downloading started")
            ytdl(videoUrl, {filter: 'videoandaudio', format: 'highest'})
                .pipe(fs.createWriteStream(outputFilePath))
                .on('finish', () => {
                    console.log(`Video downoladed to ${outputFilePath}`)
                    ffmpeg(outputFilePath)
                        .toFormat('mp3')
                        .on('error', (err) => {
                            console.error(`An error occurred: ${err.message}`);
                        })
                        .on('end', () => {
                            console.log(`Audio file ${outputFile} has been created`);
                            bot.sendAudio(chatId, 'audio.mp3');
                        })
                        .save(outputFile)
                })
        })
    }

    if (text === "/video") {
        bot.sendMessage(chatId, "Вы выбрали фунцуию \"Отправить скачанное видео\".\n Вставьте ссыллку на YouTube видео" +
            "и бот отправит вам видео-файл  ")

        const outputFilePath = 'video.mp4';

        bot.on('message', msg => {
            let videoUrl = msg.text;
            console.log("Video downloading started")

            bot.sendMessage(chatId, "Загрузка видео началась!")
            console.log(videoUrl)
            ytdl(videoUrl, {filter: 'videoandaudio', format: "highest"})
                .pipe(fs.createWriteStream(outputFilePath))
                .on('finish', () => {
                    bot.sendVideo(chatId, 'video.mp4');
                })
        })
    }
})