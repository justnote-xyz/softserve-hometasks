/* Задание №6. Циклы (while)
Дано целое число n (>0). Используя операции деления нацело и взятия остатка от деления, выведите все его цифры, начиная с самой правой (разряда единиц).
*/
      
/* var n = 345;
while (n > 9) {
	  var x = n % 10;
	   console.log(x);
		var n = (n - x)/10;
	   } console.log(n); */


/*var n = 345 // любое число > 0

while(((n%10)!==0) && n > 0){
    var x = n%10;  
    console.log(x);
	alert(x);
    n = n - x;
    n = n / 10;
}*/


var n = 345;
var x = 0;
while(((n%10)!==0)&&n>0){
	x = 10 * x + n % 10;
	n = Math.floor(n/10);
}
console.log(x)