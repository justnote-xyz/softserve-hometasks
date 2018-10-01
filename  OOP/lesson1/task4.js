/* 
Задание №4. Объекты
Создайте объект, который описывает MP3 плеер.
*/

var mp3Player = {};
mp3Player.sounds = ['linkin park','limp bizkit'];
mp3Player.nowPlays;   
mp3Player.play;
mp3Player.stop;
mp3Player.volumeStandart = 50;
mp3Player.volumePlus = function(){
    this.volumeStandart += 10; 
}
 console.log(mp3Player.volumeStandart);
 console.log(mp3Player.volumePlus);