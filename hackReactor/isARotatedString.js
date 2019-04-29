// Is one string a rotated version of another?
// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'
//Hint:
// If you double the string, you'll be to trivially find another string inside it using regular String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '

function isARotatedString(string1, string2) {
    string1 = string1 + string1;
    return string1.includes(string2);
}
isARotatedString('hello world', 'orldhello w');

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}" but got "${actual}"`);
    }
}

//TESTS
const actual1 = isARotatedString('hello world', 'orldhello w');
const expected1 = true;
assertEqual(actual1, expected1, 'should return true if one string is a rotated version of another');
const actual2 = isARotatedString('hello world', 'orldhelo w');
const expected2 = false;
assertEqual(actual2, expected2, 'should return true if one string is a rotated version of another');
