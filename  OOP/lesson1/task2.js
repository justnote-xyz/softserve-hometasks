/* Задание №2. Объекты
1. Создайте новый объект car;
2. Добавьте свойство model с любым значением;
3. Добавьте свойство speed с любым значением;
4. Добавьте метод run(), который выводит сообщение: "model едет со скоростью speed";
5. Добавьте метод stop(), который вывод сообщение: "model остановилась";
Реализуйте 3 версии текущего задания, используя следующие синтаксисы создания объектов:
1. Стандартный;
2. Массивов;
3. Упрощенный.

*/
/*
//упрощенный 
var car = {
    model: "bmw",
    speed: 300,
    run: function (){
        console.log(this.model + '  едет со скоростью '+ this.speed);
},
    stop: function(){
        console.log(this.model + " остановилась");
},
    }
car.run ();
car.stop ();
*/

/*
//Массивов
var car = {};
car["model"] = "bmw";
car["speed"] = 300;
car["run"] = function (){
        console.log(this.model + '  едет со скоростью '+ this.speed);
};
car["stop"] = function(){
        console.log(this.model + " остановилась");
};
car["run"]();
car["stop"]();
*/
// Стандартный
var car = new Object ();
car.model = "bmw";
car.speed = 300;
car.run = function (){
        console.log(this.model + '  едет со скоростью '+ this.speed);
};
car.stop = function(){
        console.log(this.model + " остановилась");
};
car.run();
car.stop();
