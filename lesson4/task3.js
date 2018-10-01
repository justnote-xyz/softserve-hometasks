/*
Задание №3. Замыкания
Напишите код для безопасного вычисления периметра и площади прямоугольника.
Сторонами прямоугольника может быть только число (тип данных Number, значения других типов данных нельзя устанавливать), значение которого, строго больше 0.
*/



/*
squareRectangle = a * b;
perimeterRectangle = (a + b)*2
ввод
проверка на тип данных
Общая фунция вычесление с 3 параментрами 1 из коротых функция вычесления
*/

var firstNumber = prompt ('Первое число','');
var secondNumber = prompt ('Второе число','');
function myFunction (a, b, operation) {
     a = Number(a);
     b = Number(b);
     if (a > 0 && b > 0) {
            return operation (a, b);} else {
                return "Сторонами прямоугольника может быть только число, значение которого, строго больше 0"
            }
        }

function squareRectangle (a, b) {
    return (a * b);
}

function perimeterRectangle (a, b) {
    return ((a + b)*2);
}
    
console.log(myFunction(firstNumber,secondNumber,squareRectangle));
console.log(myFunction(firstNumber,secondNumber,perimeterRectangle));