function generateArrayRandomNumber (min, max) {
    var totalNumbers        = max - min + 1,
        arrayTotalNumbers   = [],
        arrayRandomNumbers  = [],
        tempRandomNumber;
    while (totalNumbers--) {
        arrayTotalNumbers.push(totalNumbers + min);
    }
    while (arrayTotalNumbers.length) {
        tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
        arrayTotalNumbers.splice(tempRandomNumber, 1);
    }
    return arrayRandomNumbers;
}