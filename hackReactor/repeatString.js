// Write a function called "repeatString".
// Given a string and a number, "repeatString" returns the given string repeated the given number of times.
// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

function repeatString(string, number) {
    let repeatedStr = '';
    for(let i = 0; i < 3; i++) {
        repeatedStr = repeatedStr.concat(string);
    }
    return repeatedStr;
}
repeatString('code', 3);