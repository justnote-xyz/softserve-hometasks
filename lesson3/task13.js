/* Задание №13. Функции
Напишите функцию sign(x) целого типа, возвращающую для вещественного
числа x следующие значения:
– -1, если x &lt; 0;
– 0, если x = 0;
– 1, если x &gt; 0.
*/

 function sign(x) {
     if (x < 0) {
         x = -1;
         return x;
     } else if ( x === 0 ) {
         x = 0;
         return x;
     } else {
         x = 1;
         return x 
     }
 
}
console.log(sign(3));