var userInput;
var userName;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured!", 500);
console.log(result);
