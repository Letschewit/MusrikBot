module.exports = {
    name: 'leave',
    description: 'Stop the bot and leave the channel',
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('untuk mengehentikan lagu masuk VC dulu ya gan');
        await voiceChannel.leave();
        await message.channel.send('Saya pergi dadah :smiling_face_with_tear:');
    }
}