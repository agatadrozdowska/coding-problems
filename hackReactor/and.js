// Write a function and that takes two boolean inputs and returns a boolean that reflects the results of the logical and
// *Special note* do not use && in your function.

and(true, true) //true


function and(boolean1, boolean2) {
    if(!boolean1) {
        return boolean1;
    } else {
        return boolean2;
    }
}
and(true, false) //false
and(false, true) //false
and(true, true) //true
and(false, false) //false