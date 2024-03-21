function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result; //또는 paresFloat(result) 하면 숫자로 변환됨
    }
    else {
        return result.toString();
    }
}
var combineAge = combine(20, 21, "as-number");
console.log(combineAge);
var combineStringAge = combine("20", "21", "as-number");
console.log(combineStringAge);
var combineNames = combine("mimi", "zizi", "as-text");
console.log(combineNames);
