function mindGame(inputNumber) {
    const multipleBy3 = inputNumber * 3;
    const add10ToMultiple3 = multipleBy3 + 10;
    const divideBy2 = add10ToMultiple3 / 2;
    const finalResult = divideBy2 - 5;
    console.log(finalResult);
}
mindGame(33);
