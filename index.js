// Code your solutions in this file
function writeCards(stringNames, eventName) {
    let messages = [];
    for(let i=0; stringNames.length; i++){
        messages[i] = `Thank you, ${stringNames[i]}, for the wonderful birthday gift!`;
    }
    return messages;
}

function countDown(positiveNumber) {
    while(positiveNumber != 0) {
        console.log(positiveNumber);
    }
}