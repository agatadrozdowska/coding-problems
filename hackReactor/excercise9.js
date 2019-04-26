//You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
// e.g. transposeTwoStrings(['Hello','World']);
// should return:
// H W
// e o
// l r
// l l
// o d

function transposeTwoStrings(array) {
    let firstStr = array[0];
    let secondStr = array[1];
    const amountOfSpaces = Math.abs(firstStr.length - secondStr.length);
    let extraSpaces = "";
    for (let i = 0; i < amountOfSpaces; i++) {
        extraSpaces += ' ';
    }
    if (firstStr.length > secondStr.length) {
        secondStr += extraSpaces;
    } else if (firstStr.length < secondStr.length) {
        firstStr += extraSpaces;
    }

    let transposedStr = '';
    for(let i = 0; i < firstStr.length; i++) {
        transposedStr += `${firstStr[i]} ${secondStr[i]}`;
        if(i < firstStr.length - 1) {
            transposedStr += '\n';
        }
    }
    return transposedStr;
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
const actual = transposeTwoStrings(['Hello', 'World']);
const expected = 'H W\ne o\nl r\nl l\no d';
assertEqual(actual, expected, 'should return properfly forrmatted string');