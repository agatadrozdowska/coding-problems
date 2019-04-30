// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.
// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]
// You can search for the value 31, as follows:
// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.
// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

function binarySearch(array, num) {
    let offset = 0;

    if (array.length) {
        while (true) {
            let midIndex = Math.floor(array.length / 2);
            if (array[midIndex] === num) {
                return midIndex + offset;
            }

            if (array.length === 1) {
                return null;
            }

            if (num < array[midIndex]) {
                array = array.slice(0, midIndex);
            } else {
                offset += midIndex + 1;
                array = array.slice(midIndex + 1);
            }
        }
    } else {
        return null;
    }
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
const actual1 = binarySearch([1, 3, 16, 22, 31, 33, 34], 31);
const expected1 = 4;
assertEqual(actual1, expected1, 'should return index of searched number');
const actual2 = binarySearch([1, 3, 16, 22, 31, 33, 34], 8);
const expected2 = null;
assertEqual(actual2, expected2, 'should return null');
const actual3 = binarySearch([], 8);
const expected3 = null;
assertEqual(actual3, expected3, 'should return null');