var userInput;
var userName;
userInput = 5;
userName = 'Max';
console.log(userInput);
console.log(userName);
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
};
var result = generateError('An error occurred', 500);
console.log(result);
