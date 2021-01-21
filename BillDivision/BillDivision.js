const readLine = (inputString , currentLine) => {
    return inputString[currentLine];
}

const main = file => {
    const fs = require('fs');
    let inputString = '';
    var currentLine = 0;
    inputString = fs.readFileSync(file).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const nk = readLine(inputString , currentLine ++).split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const bill = readLine(inputString , currentLine ++).split(' ')
    .map(billTemp => parseInt(billTemp, 10));
    const b = parseInt(readLine(inputString , currentLine ++).trim(), 10);
    bonAppetit(bill, k, b);

}

const bonAppetit = (bill, k, b) => {
    if(bill.length < 2 || bill.length > 10**5 ) return 0;
    if(k < 0 || k > bill.length ) return 0;
    if(!bill.every( item => (item > 0 && item <= 10**4))) return 0;
    let billSum = 0;
    let result = 'Bon Appetit';
    bill.forEach((item, i) => {
        billSum += item;
    });
    if(b < 0 || b > billSum ) return 0;
    let bActual = parseInt((billSum - bill[k]) / 2);
    if((b - bActual) != 0) result = (b - bActual);
    console.log(result);
}

main('input00.txt');
main('input01.txt');
main('input02.txt');
main('input06.txt');
