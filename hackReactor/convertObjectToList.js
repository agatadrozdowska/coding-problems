// Write a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:

// Argument:

// {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToList(object) {
    const outerArr = [];
    Object.keys(object).forEach(key => {
        outerArr.push([key, object[key]]);
})
    return outerArr;
}

const inputObj = {
    name: 'Holly',
    age: 35,
    role: 'producer'
}
convertObjectToList(inputObj);
