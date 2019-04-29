// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
// Example:
// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

function findPairForSum(array, number) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                newArray.push(array[i], array[j]);
                return newArray;
            }
        }
    }
    return 'invalid input';
}

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}" but got "${actual}"`);
    }
}

//TESTS
const actual = findPairForSum([3, 6, 4, 12, 5, 2], 9);
const expected = [3, 6];
assertEqual(actual, expected, 'should return an array of two numbers which sum to given integer');