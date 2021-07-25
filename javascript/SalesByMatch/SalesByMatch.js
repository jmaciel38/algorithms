const readLine = (inputString , currentLine) => {
    return inputString[currentLine];
}

const main = file => {
    const fs = require('fs');
    let inputString = '';
    var currentLine = 0;
    inputString = fs.readFileSync(file).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const n = parseInt(readLine(inputString , currentLine ++), 10);
    const ar = readLine(inputString , currentLine ++).split(' ')
    .map(arTemp => parseInt(arTemp, 10));
    let result = sockMerchant(n, ar);
    console.log({result});
}

const sockMerchant = (n, ar) => {
    if(ar.length < 1 || ar.length > 100) return 0;
    if(!ar.every( item => (item > 0 && item <= 100))) return 0;
    let val = 0;
    let inPair = [];
    for(let i = 0; i < ar.length; i ++){
        for(let j = (i+1); j < ar.length; j ++) {
            if(ar[i] == ar[j] && (!inPair.find(element => element == i))){
                inPair.push(i);
                inPair.push(j);
                break;
            }
        }
    }
    return (inPair.length / 2);
}

main('input00.txt');
main('input01.txt');
main('input08.txt');
