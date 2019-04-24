// Your task is to write and test a function that determines whether a string is an isogram, following the format of the
// previous problems. It should return true if the input string is an isogram, and should return false otherwise.


// FUNCTION DEFINITION(S)
function isIsogram(text) {
    text = text.toLowerCase();
    const setOfChar = new Set(text);

    return setOfChar.size === text.length;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
}

// TESTS CASES
const actual1 = isIsogram('dog');
assertEqual(actual1, true, 'should return true for isogram');
const actual2 = isIsogram('');
assertEqual(actual2, true, 'should return true for empty string');
const actual3 = isIsogram('door');
assertEqual(actual3, false, 'should return false for non-isogram');
const actual4 = isIsogram('aPpLe');
assertEqual(actual4, false, 'should ignore case');
