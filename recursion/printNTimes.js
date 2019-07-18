const printNTimes = (num) {
    if (num === 0) {
        return;
    }
    console.log("*");
    printNTimes(num - 1);
}

printNTimes(5);