// problem 01
// here is a function to calculate some simple math calculations  
function mindGame(inputNumber) {
    if (isNaN(inputNumber)) {
        alert('Input must be a number!');
    }
    else {
        const multipleBy3 = inputNumber * 3;
        const add10ToMultiple3 = multipleBy3 + 10;
        const divideBy2 = add10ToMultiple3 / 2;
        const finalResult = divideBy2 - 5;
        return finalResult;
    }
}

// problem 02
// here is a function to identify the total string count even or odd. 
function evenOdd(inputString) {
    if (typeof inputString === 'string') {
        const stringLength = inputString.length;
        if (stringLength % 2 === 0) {
            const printEven = 'even';
            return printEven;
        }
        else {
            const printOdd = 'odd';
            return printOdd;
        }
    }
    else {
        alert('Please input as string value!');
    }

}

// problem 03 
// Here is a function that compares a number to a constant. If the input number is less than the constant number, it will return the subtraction of both. Otherwise, it will produce a multiple of the input number.
function isLGSeven(inputNumber) {

    if (isNaN(inputNumber)) {
        alert('Input must be a number!');
    }
    else {

        const result = inputNumber - 7;
        if (result < 7) {
            return result;
        }
        else {
            return inputNumber * 2;
        }
    }
}

console.log(isLGSeven(6));

// problem 04
// here is a function to count bad numbers(negative) from an array
function findingBadData(inputArrays) {
    let badElements = [];
    for (i = 0; i < inputArrays.length; i++) {
        const arrayElement = inputArrays[i];
        if (arrayElement <= 0) {
            badElements.push(arrayElement);
        }
    }
    const badElementsCount = badElements.length;
    return badElementsCount;
}

// problem 05
// here is a function to calculate some simple math calculations
function gemsToDiamond(first, second, third) {
    if (isNaN(first, second, third)) {
        alert('Input must be number!');
    }
    else {
        const firstPersonDimond = first * 21;
        const secondPersonDimond = second * 32;
        const thirdPersonDimont = third * 43;
        const totalDimond = firstPersonDimond + secondPersonDimond + thirdPersonDimont;
        const conditionBindings = 1000 * 2;
        if (totalDimond >= conditionBindings) {
            const GetTotalDimond = totalDimond - conditionBindings;
            return GetTotalDimond;
        }
        else {
            return totalDimond;
        }
    }
}