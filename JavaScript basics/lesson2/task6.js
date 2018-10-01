/*
Задание №6. Преобразование данных
Есть следующий код:
var x = 1;
var y = 2;

var res1 = // Допишите код, необходимо использовать переменные x и y
console.log(res1); // "12"
console.log(typeof res1); // "string"

var res2 = // Допишите код, необходимо использовать переменные x и y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = // Допишите код, необходимо использовать переменные x и y
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = // Допишите код, необходимо использовать переменные x и y
console.log(res4); // NaN
console.log(typeof res4); // "number"
Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях.

*/

var x = 1;
var y = 2;
 // 1
var res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"
 //2
var res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"
 //3
var res3 = Boolean(x) && Boolean(y);
console.log(res3); // true
console.log(typeof res3); // "boolean"
 //4
x = "a" + x;
var res4 = (parseInt(x + y));
console.log(res4); // NaN
console.log(typeof res4); // "number" 