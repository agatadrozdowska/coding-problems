// Write a function called "sumDigits".
// Given a number, "sumDigits" returns the sum of all its digits.
// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.
// var output = sumDigits(-316);
// console.log(output); // --> 4

function sumDigits(number) {
    let sum = 0;
    const str = number.toString();
    if(str.length === 1) {
        return Number(str[0]);
    } else if (str[0] === '-') {
        sum -= Number(str[1]);
    } else {
        sum += Number(str[0]);
        sum += Number(str[1]);
    }
    for (let i = 2; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
sumDigits(1);
sumDigits(-316);
sumDigits(1148);