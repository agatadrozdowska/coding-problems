//Flip every pair of characters in a string.
//Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(string) {
    let flippedStr = '';
    for(let i = 0; i < string.length; i += 2) {
        if(i === string.length - 1) {
            flippedStr += string[i];
        } else {
            flippedStr += string[i+1];
            flippedStr += string[i];
        }
    }
    return flippedStr;
}
flipPairs('check out how interesting this problem is, it\'s insanely interesting!');

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}" but got ${actual}`);
    }
}
const input = 'check out how interesting this problem is, it\'s insanely interesting!';
const actual = flipPairs(input);
const expected = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';
assertEqual(actual, expected, 'should flip each pair of characters in given string');