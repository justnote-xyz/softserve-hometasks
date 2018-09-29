/* Задание №12. Функции
Напишите функцию minMax(x, y), которая возвращает минимальное из x и y.
*/

 function pow(x, y) {
     if (x > y) {
         return x;
     } else if (x < y) {
         return y;
     } else {
          var errText = "Эти числа равны или это не числа";
         return errText;
     }
 
}
alert (pow(3, 3)); 
