/*Задание №4. Объекты
Создайте объект, который описывает MP3 плеер.*/

var mp3Player = {};
var i = 0;
mp3Player.tracks = ['linkin park','limp bizkit'];
mp3Player.nowPlaying = function(){
    console.log("Играет " + this.tracks[i]);}
mp3Player.play = function(){
    this.nowPlaying();
};
mp3Player.nextTrack = function(){
    i++;
    this.nowPlaying();
}
mp3Player.previousTrack = function(){
    i--;
    this.nowPlaying();
}
mp3Player.pause = function(){
    console.log("Пауза ");}


mp3Player.play();
mp3Player.nextTrack();
mp3Player.pause();
mp3Player.play();
mp3Player.previousTrack();