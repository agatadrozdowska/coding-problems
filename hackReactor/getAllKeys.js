// Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:

// {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// }
// Function's return value (output) :

// ['name', 'age', 'hasPets']
// Do not use "Object.keys" to solve this prompt.


function getAllKeys(object) {
    const outputArr = [];
    for(key in object) {
        outputArr.push(key);
    }
    return outputArr;
}

const inputObj = {
    name : 'Sam',
    surname: 'Winchester',
    age : 35,
    hasPets : true
}
getAllKeys(inputObj);