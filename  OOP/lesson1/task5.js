/*Задание №5. Объекты. Вложенные. Массивы в объектах
Опишите следующую информацию в виде иерархии массивов и объектов:
Name Age Experience Languages
John 28 1 Java, JavaScript, SQL
Bill 30 5 HTML, CSS, JavaScript
Mike 32 4 Python, SQL*/
var myObject = {
experienceLanguages: ['Java','JavaScript','SQL', 'HTML','CSS','Python'],
humans: [
{ name: "John",
age: 28,
experience: 1,
experienceLanguages: ['Java','JavaScript','SQL']
}, {
name: "Bill",
age: 30,
experience: 5,
experienceLanguages: ['HTML','CSS','JavaScript']
}, {
name: "Mike",
age: 32,
experience: 4,
experienceLanguages: ['Python','SQL']
}
] };
console.log(myObject.humans[0]);
console.log(myObject.humans[1]);
console.log(myObject.humans[2]);