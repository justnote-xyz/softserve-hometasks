/* ЗЗадание №9. Циклы
Напишите код, который:
1. Запрашивает по очереди значения при помощи prompt() и сохраняет их в массиве;
2. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт "Отмена";
3. Выводит сумму всех значений массива.
*/
	while(num!==0){
		var num = +prompt('','');
	    var arr = [num]; 
		var wifd = arr.length;
console.log(wifd);
}
var sum;
for (var i = 0; i < wifd; i++){
	sum = sum + arr[i];
}
console.log(sum)