let k = parseInt(prompt('',''));
let n = parseInt(prompt('',''));
let numb;
function digitN(k, n) {
    if (k < n){
        return -1;
    }
    k = String(k);
    numb = k.charAt(n - 1);
    return numb;
}
console.log(digitN(k, n));