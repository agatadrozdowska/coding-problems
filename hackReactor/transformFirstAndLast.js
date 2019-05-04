// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: 1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.
// Example input:
// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
// Function's return value (output):
// {
//   Queen : 'Beyonce'
// }

function transformFirstAndLast(array) {
    const obj = {};
    obj[array[0]] = array[array.length - 1];
    return obj;
}
transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);