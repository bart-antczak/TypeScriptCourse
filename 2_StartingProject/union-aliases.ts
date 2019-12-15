// Alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function comibine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result;
    // }
}

const combinedAges = comibine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = comibine('Bart', 'Age', 'as-string');
console.log(combinedNames);