/* Задание №3. Объекты
1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру. */

var tv = {};
tv.currentChannel = 1;
tv.nextChannel = function(){
    console.log("Включен " + ++this.currentChannel + " канал")
};
tv.previousChannel = function(){
    console.log("Включен " + --this.currentChannel + " канал")
};
tv.setChannel = function() {
    /* var channel = prompt('Введите канал','');
    channel = Number(channel);
    this.currentChannel = channel; */
     this.currentChannel = prompt('Введите канал','');
}

console.log("Включен " + tv.currentChannel + " канал");
tv.nextChannel();
tv.nextChannel();
tv.previousChannel();
tv.setChannel();
console.log("Включен " + tv.currentChannel + " канал");