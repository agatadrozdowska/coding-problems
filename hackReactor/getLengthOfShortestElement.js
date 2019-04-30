// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3

function getLengthOfShortestElement(array) {
    if (array.length) {
        let lengthOfShortestElement = array[0].length;
        array.forEach(element => {
            if (element.length < lengthOfShortestElement) {
            lengthOfShortestElement = element.length;
        }
    })
        return lengthOfShortestElement;
    } else {
        return 0;
    }
}
getLengthOfShortestElement(['one', 'two', 'three']);