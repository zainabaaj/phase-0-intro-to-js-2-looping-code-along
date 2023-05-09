// Code your solutions in this file
function writeCards(namesArray, event) {
    const thankYouMessages = [];

    for (let i = 0; i < namesArray.length; i++) {
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
        thankYouMessages.push(message);
    }

    return thankYouMessages;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}