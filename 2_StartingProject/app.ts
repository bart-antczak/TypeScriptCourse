let userInput: unknown;
let userName: string;

userInput = 5;
userName = 'Max';

console.log(userInput);
console.log(userName);

const generateError = (message: string, code: number) => {
    throw {message: message, errorCode: code}
    // while (true) {}
};

const result = generateError('An error occurred', 500);
console.log(result);