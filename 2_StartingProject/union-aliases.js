function comibine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result;
    // }
}
var combinedAges = comibine(30, 26, 'as-number');
console.log(combinedAges);
var combinedNames = comibine('Bart', 'Age', 'as-string');
console.log(combinedNames);
