/* Задание №8. Циклы (for)
Дано целое число n (n > 0). Найдите произведение 
n! = 1 * 2 * … * n.
*/
      
var n = +prompt('','');
var res = 1;
for (var i = 1; i <= n; i++) {
	res  = res * i;
	}
console.log(res);