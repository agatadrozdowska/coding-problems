// Write a function called decorateClassListWithAges. Convert from an array, in this case a class list of names, to an
// array of object literals decorated with a name and an age for each student. Your decorateClassListWithAges function
// should use the provided getRandomIntInclusive as part of its solution. (The ages should be randomly generated for
// each student, either age 10 or age 11)
//
// In order to verify that your code works as expected, you will need to find a way to iterate over the actual array
// result of your function, then ensure that the age value for each object in your result is "within the range" of 10 to 11.


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
    const arrayOfObjects = [];
    classList.forEach(firstName => {
        const obj = {};
    arrayOfObjects.push(obj);
    obj.name = firstName;
    obj.age = getRandomIntInclusive(10, 11);
})
    return arrayOfObjects;
}

function assertWithinRange (low, high, actual, testName) {
    if(actual >= low && actual <= high) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
}
// TESTS CASES
function testStudentsList() {
    const classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
        "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
        "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

    const actualResult = decorateClassListWithAges(classList);

    for(let i = 0; i < actualResult.length; i++) {
        assertWithinRange(10, 11, actualResult[i].age, 'should check if all ages are within range 10-11')
    }

}
testStudentsList();