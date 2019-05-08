// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
// The return value should be 1-indexed, not 0-indexed.
// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

function detectOutlierValue(string) {
    const numbers = string.split(' ');
    let oddNumsCounter = 0;
    let evenNumsCounter = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            evenNumsCounter++;
        } else {
            oddNumsCounter++;
        }
        if(oddNumsCounter === 2) {
            for(let j = 0; j < numbers.length; j++) {
                if(numbers[j] % 2 === 0) {
                    return j+1;
                }
            }
        } else if (evenNumsCounter === 2) {
            for(let k = 0; k < numbers.length; k++) {
                if(numbers[k] % 2 !== 0) {
                    return k+1;
                }
            }
        }
    }
}
console.log(detectOutlierValue("2 4 7 8 10"));
console.log(detectOutlierValue("1 10 1 1"));
console.log(detectOutlierValue("7 4 4 8 10"));
