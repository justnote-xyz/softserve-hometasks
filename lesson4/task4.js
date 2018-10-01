/*
Задание №4. Рекурсивные функции
Напишите рекурсивную функцию digitSum(k), которая находит сумму цифр
целого числа k, не используя циклы.
*/
function digitSum(k) {
    if ( k === 0){
        return  0
    } else {
        return k + digitSum(k-1);
    }
}
var res = digitSum(7);
console.log(res);