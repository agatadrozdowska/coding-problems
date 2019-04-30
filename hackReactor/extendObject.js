// Write a function called "extend".
// Given two objects, "extend" adds properties from the 2nd object to the 1st object.
// Notes:
// Add any keys that are not in the 1st object.
// If the 1st object already has a given key, ignore it (do not overwrite the property value).
// Do not modify the 2nd object at all.

function extendObject(obj1, obj2) {
    for (key in obj2) {
        if(!obj1.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};
extendObject(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
