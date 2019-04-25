//find longest palindrome from given sentence

function findLongestPalindrome(sentence) {
    const arrOfWords = sentence.split(' ');
    const arrOfPalindromes = [];
    arrOfWords.forEach(word => {
        if(isPalindrome(word)) {
        arrOfPalindromes.push(word);
    }
})
    arrOfPalindromes.sort(sortAscendingByLength);
    return arrOfPalindromes.pop();
}


function reverseString(string) {
    const splittedStr = string.split('');
    const reversedArr = splittedStr.reverse();
    const reversedStr = reversedArr.join('');
    return reversedStr;
}

function isPalindrome(word) {
    return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    }
    return 0;
}

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
}

function assertArraysEqual(actual, expected, testName) {
    const equalLength = actual.length === expected.length;
    let equalElements = true;
    for(let i = 0; i < actual.length; i++) {
        if(actual[i] !== expected[i]) {
            equalElements = false;
            break;
        }
    }
    if(equalLength && equalElements) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
}


// TESTS CASES
//for reverseString function
const actual1 = reverseString('car');
const expected1 = 'rac';
assertEqual(actual1, expected1, 'should reverse string');

//for isPalindrome function
const actual2 = isPalindrome('madam');
const expected2 = true;
assertEqual(actual2, expected2, 'should check if given string ia a palindrome');

//for sortAscendingByLength function
const arr = ['car', 'banana', 'apple', 'door'];
const actual3 = arr.sort(sortAscendingByLength);
const expected3 = ['car', 'door', 'apple', 'banana'];
assertArraysEqual(actual3, expected3, 'should sort array');

//for findLongestPalindrome function
const string = 'madam rotator car apple banana';
const actual4 = findLongestPalindrome(string);
const expected4 = 'rotator';
assertEqual(actual4, expected4, 'should return the longest palindrome form given sentence');

