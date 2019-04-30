// Write a function called "countWords".
// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
// Notes:
// If given an empty string, it should return an empty object.
// var output = countWords('ask a bunch get a bunch');
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

function countWords(string) {
    const obj = {};
    if (string.length) {
        const arrOfWords = string.split(' ');
        for (let i = 0; i < arrOfWords.length; i++) {
            if (obj.hasOwnProperty(arrOfWords[i])) {
                obj[arrOfWords[i]] ++;
            } else {
                obj[arrOfWords[i]] = 1;
            }
        }
    }
    return obj;
}

countWords('ask a bunch get a bunch');
