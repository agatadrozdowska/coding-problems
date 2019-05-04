// Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Example input:

// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
// Function's return value (output):

// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
// Do not change the input array. Assume that all elements in the array will be of type 'string'.

function fromListToObject(array) {
    const obj = {};
    array.forEach(tuple => {
        obj[tuple[0]] = tuple[1];
    })
    return obj;
}
fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);