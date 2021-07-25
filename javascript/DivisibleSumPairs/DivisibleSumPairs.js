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
    const ar = readLine(inputString , currentLine ++).split(' ')
    .map(arTemp => parseInt(arTemp, 10));
    let result = divisibleSumPairs(n, k, ar);
}

const divisibleSumPairs = (n , k, ar) => {
    if(n < 2 || n > 100) return 0;
    if(k < 1 || k > 100) return 0;
    let count = 0;
    for(let i = 0; i < ar.length; i ++){
        if(ar[i] < 1 || ar[i] > 100) return 0;
        let sum = 0;
        for(let j = (i+1); j < ar.length; j ++) {
            if(!((ar[i]+ar[j]) % k)) count ++;
        }
    }
    console.log({n , k, ar, test, count});
    return count;
}
main('input00.txt');
main('input12.txt');
