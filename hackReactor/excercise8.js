// Time Limit 45 minutes
// Write a function coinFlip that returns at random either 'heads' or 'tails'
//coinFlip() //'heads'
//or
//coinFlip() //'tails'
// BONUS: Can you devise a way to investigate if your function produces 'heads' and 'tails' with a roughly 50/50 split?

function coinFlip() {
    const randomNum = Math.floor(Math.random() * 2);
    if(randomNum) {
        return 'heads';
    } else {
        return 'tails';
    }
}
let heads = 0;
let tails = 0;
for(let i = 0; i < 100; i++) {
    if(coinFlip() === 'tails') {
        tails++;
    } else {
        heads++;
    }
}

console.log("Tails: " + tails);
console.log("Heads: " + heads);
