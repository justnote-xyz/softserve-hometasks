/* Задание №10. Циклы
Даны целые числа a и b (a < b). Выведите все целые числа от a до b включительно; при этом число a должно выводиться 1 раз, число a + 1 должно выводиться 2 раза и т.д.
*/

var a = 1;
var b = 3;

for (var i = 0; i <= b; i++) {
	var num = a + i;
	//console.log(num);
	for (var j = 0; j <= i; j++) {
		alert(num)
	}
}