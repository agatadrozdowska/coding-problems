//from the given string find word with the count of letter which occurs most often
function findMaxRepeatCountInWord(word) {
    let maxRepeatCount = 1;
    const obj = {};
    const letters = word.split('');
    letters.forEach(letter => {
        if(!obj.hasOwnProperty(letter)) {
        obj[letter] = 1;
    } else {
        obj[letter]++;
    }
})
    Object.values(obj).forEach(num => {
        if(num > maxRepeatCount) {
        maxRepeatCount = num;
    }
})
    return maxRepeatCount;
}

function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';


    const words = text.split(' ');
    words.forEach(word => {
        const repeatCountForWord = findMaxRepeatCountInWord(word);
    if(repeatCountForWord > maxRepeatCountOverall) {
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = word;
    }
})
    return wordWithMaxRepeatCount;
}

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
}

// TESTS CASES
// for findMaxRepeatCountInWord function
const actual = findMaxRepeatCountInWord('door');
const expected = 2;
assertEqual(actual, expected, 'should return count of letter which is repeated most often in given word');

//for findFirstWordWithMostRepeatedChars function
const actual1 = findFirstWordWithMostRepeatedChars('door banana car');
const expected1 = 'banana';
assertEqual(actual1, expected1, 'should return word from a given string in which one letter is repeated the most');
