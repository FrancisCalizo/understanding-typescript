// Unknown Type
let userInput: unknown;
let userName: string;

userInput = 6;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

console.log(userName);

// Never Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occured', 500);
