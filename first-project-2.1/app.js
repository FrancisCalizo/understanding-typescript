// Unknown Type
var userInput;
var userName;
userInput = 6;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userName);
// Never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
