// Write a function countInstancesOf which takes in a letter (string) and a sentence (string), and returns the number of occurences of that letter

function countInstancesOf(letter, sentence) {
    let counter = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter) {
            counter++;
        }
    }
    return counter++;
}
countInstancesOf("a", "mississippi is the best river ever");
countInstancesOf("i", "mississippi is the best river ever");
countInstancesOf("b", "mississippi is the best river ever");


//Write a function titleCase which takes in a string, and returns a title-cased string.

function titleCase(str) {
    const splittedStr = str.split(' ');
    for (let i = 0; i < splittedStr.length; i++) {
        splittedStr[i] = splittedStr[i].toLowerCase();
        splittedStr[i] = splittedStr[i][0].toUpperCase() + splittedStr[i].substring(1);
    }
    const titleCasedStr = splittedStr.join(' ');
    return titleCasedStr;
}
titleCase('peter piper'); //"Peter Piper"
titleCase('teXt mEssAge'); //"Text Message"
titleCase('more to me than meets the eye'); //"More To Me Than Meets The Eye"


// Given an object with this structure:

var person = {
    name: {
        first: "Richard",
        last: "Loeb"
    },
    birthDay: {
        month: "July",
        day: 12,
        year: 1957
    }
}
// Write a function getNameAndBirthday which returns the name and birthday in one line:
// getNameAndBirthday(person); //"Richard Loeb: July 12, 1957"

function getNameAndBirthday(obj) {
    return `${obj.name.first} ${obj.name.last}: ${obj.birthDay.month} ${obj.birthDay.day}, ${obj.birthDay.year}`;
}
getNameAndBirthday(person);


// Write a function 'renderInfoNeatly' which takes in a person object similar to the previous example, and returns the person's name and birthday with proper casing.

var anotherPerson = {
    name: {
        first: "kylA",
        last: "liVingSton"
    },
    birthDay: {
        month: "octobeR",
        day: 20,
        year: 1961
    }
}

// renderInfoNeatly(anotherPerson); //"Kyla Livingston: October 20, 1961"

function renderInfoNeatly(obj) {
    for(key in obj.name) {
        obj.name[key] = obj.name[key][0].toUpperCase() + obj.name[key].substring(1).toLowerCase();
    }
    for(key in obj.birthDay) {
        if(typeof obj.birthDay[key] === 'string') {
            obj.birthDay[key] = obj.birthDay[key][0].toUpperCase() + obj.birthDay[key].substring(1).toLowerCase();
        }
    }
    return `${obj.name.first} ${obj.name.last}: ${obj.birthDay.month} ${obj.birthDay.day}, ${obj.birthDay.year}`;
}
renderInfoNeatly(anotherPerson);


//Write a function getPeopleBornIn which takes in an array and string month, and returns a new array of people and their birthday information who were all born in the given month.

var staff = [
    {name: {first: "Alyssa", last: "Hacker"}, birthDay: {month: "June", day: 5, year: 1987}},
    {name: {first: "Ben", last: "Bitdiddle"}, birthDay: {month: "August", day: 19, year: 1984}},
    {name: {first: "Eva", last: "Ator"}, birthDay: {month: "March", day: 29, year: 1980}},
    {name: {first: "Lem", last: "Tweakit"}, birthDay: {month: "August", day: 11, year: 1989}},
    {name: {first: "Louis", last: "Reasoner"}, birthDay: {month: "November", day: 17, year: 1992}}
];

// A call to your function getPeopleBornIn(staff, 'August');
// Would return:
// ["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]

function getPeopleBornIn(array, value) {
    const newArr = [];
    array.forEach(obj => {
        if(obj.birthDay.month === value) {
            newArr.push(`${obj.name.first} ${obj.name.last}: ${obj.birthDay.month} ${obj.birthDay.day}, ${obj.birthDay.year}`);
        }
    })
    return newArr;
}
getPeopleBornIn(staff, 'August');