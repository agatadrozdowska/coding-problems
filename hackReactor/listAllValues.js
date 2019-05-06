// Write a function called "listAllValues" which returns an array of all the input object's values. Example input:

// {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// }
// Function's return value (output):

// ['Krysten', 33, false]
// Note that the input may have a different number of keys and values than the given sample.

function listAllValues(object) {
    const inputArr = [];
    Object.keys(object).forEach(key => {
        inputArr.push(object[key]);
})
    return inputArr;
}

const inputObj = {
    name : 'Krysten',
    age : 33,
    hasPets : false
}
listAllValues(inputObj);