// Write a function called "findShortestElement".
// Given an array, "findShortestElement" returns the shortest string within the given array.
// Notes:
// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'

function findShortestElement(array) {
    if (array.length) {
        let shortestWord = array[0];
        array.forEach(word => {
            if (word.length < shortestWord.length) {
                shortestWord = word;
            }
        })
        return shortestWord;
    } else {
        return '';
    }
}
findShortestElement(['aa', 'two', 'three', 'b']);