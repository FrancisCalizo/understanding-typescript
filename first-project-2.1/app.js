function add(n1, n2, showResult) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect Input');
    // }
    if (showResult) {
        console.log(resultPhrase + n1 + n2);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is ';
add(number1, number2, printResult);
