"use strict";
function add1(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase, n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
add1(number1, number2, printResult, resultPhrase);
