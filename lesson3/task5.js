/* Задание №5. Циклы (while)
Даны положительные числа a и b (a > b). На отрезке длины a размещено максимально возможное количество отрезков длины b (без наложений). Не используя операции умножения и деления, найдите длину незанятой части отрезка a.
*/

var a = 9;
var b = 3;
while (a > b){
    a = a - b; 
} 
console.log(a);