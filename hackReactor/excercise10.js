// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma
// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

function flipEveryNChars (input, num) {
    let flippedStr = '';
    for(let i = 0; i < input.length; i += num) {
        for(let j = num - 1; j >= 0; j--) {
            if(i+j < input.length) {
                flippedStr += input[i + j];
            }
        }
    }
    return flippedStr;
}

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}" but got "${actual}"`);
    }
}

//TESTS
const input = 'Hello, World!';
const actual = flipEveryNChars(input, 5);
const expected = 'olleHroW ,!dl';
assertEqual(actual, expected, 'should render properly formatted string');


