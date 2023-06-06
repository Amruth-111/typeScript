"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const buttonele = document.querySelector("button");
let numresult = [];
let stringresult = [];
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) == 'number') {
        return num1 + num2;
    }
    else if (typeof (num1) === 'string' && typeof (num2) == 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function obj(obj) {
    console.log(obj.val);
}
buttonele.addEventListener("click", () => {
    const num11 = number1.value;
    const num21 = number2.value;
    let sum = add(+num11, +num21);
    let res = add(num11, num21);
    let result = add(num11, +num21);
    numresult.push(sum);
    stringresult.push(res);
    obj({ val: sum, timestamp: new Date() });
});
// console.log(add(1,4))
// console.log(add('2','3'))
