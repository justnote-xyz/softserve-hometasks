/* Задание №1. Объекты
1. Создайте новый объект user;
2. Добавьте свойство name со значением Cris;
3. Добавьте свойство surname со значением Simons;
4. Поменяйте значение name на Brain;
5. Удалите свойство name из объекта;
*/

var user = {
    name: "Cris",
    surname: "Simons",
    name: "Brain",
};
delete user.name;
console.log(user.name);