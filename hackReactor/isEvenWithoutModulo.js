// Write a function called "isEvenWithoutModulo".
// Given a number, "isEvenWithoutModulo" returns whether it is even.
// Notes:
// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

function isEvenWithoutModulo(number) {
    const dividedBy2 = Math.floor(number / 2);
    const remainder = number - dividedBy2 * 2;
    return remainder === 0;
}
isEvenWithoutModulo(4);