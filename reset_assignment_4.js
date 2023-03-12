// problem 01
// here is function to calculate some simple math calculations  
function mindGame(inputNumber) {
    const multipleBy3 = inputNumber * 3;
    const add10ToMultiple3 = multipleBy3 + 10;
    const divideBy2 = add10ToMultiple3 / 2;
    const finalResult = divideBy2 - 5;
    return finalResult;
}

// problem 02
// here is a function to identify the total string count even or odd. 
function evenOdd(inputString) {
    const stringLength = inputString.length;
    if (stringLength % 2 === 0) {
        return console.log("even");
    }
    else {
        return console.log("odd");
    }
}