function calk (num1, num2, opera) {
     return opera(num1, num2)
}
function sum (x, y) {
    return x + y;
}
console.log(calk(2,5,sum));