// Write a function collectionConverter that takes an object or an array and returns a new collection in a different format (object to array or array to object).


const arrZoo = ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian'];
const objZoo = {
    zebra: 4,
    rhino: true,
    monkeys: 'many',
    tiger: 'siberian'
}
collectionConverter(arrZoo); // { zebra: 4, rhino: true, monkeys: 'many' tiger: 'siberian'}

collectionConverter(objZoo); // ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']

function collectionConverter(input) {
    if(Array.isArray(input)) {
        if(input.length % 2 === 1) {
            throw new Error("Bad input");
        }
        const obj = {};
        for(let i = 0; i < input.length; i += 2) {
            obj[input[i]] = input[i+1];
        }
        console.log(obj);
    } else {
        const arr = [];
        Object.keys(input).forEach(item => {
            arr.push(item, input[item]);
    })
        console.log(arr);
    }
}
