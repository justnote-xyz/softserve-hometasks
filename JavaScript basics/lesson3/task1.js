/*Задание №1. Условные конструкции
Дано целое число. Если оно является положительным, то прибавьте к нему 1; если отрицательным, то вычтите из него 2; если нулевым, то замените его на 10. Выведите полученное число. */
 var x = prompt('','');
var num = Number(x);
if (num > 0){
    console.log(num+1);
} else if (num < 0){
    console.log(num-2);
} else {
    num = 10;
    console.log(num);
} 