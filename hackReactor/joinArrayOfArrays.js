// Write a function called "joinArrayOfArrays".
// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']

function joinArrayOfArrays(array) {
    const joinedArr = [];
    array.forEach(innerArr => {
        innerArr.forEach(element => {
            joinedArr.push(element);
        })
    })
    return joinedArr;
}
joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);