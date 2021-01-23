const readLine = (inputString , currentLine) => {
    return inputString[currentLine];
}

const main = file => {
    const fs = require('fs');
    let inputString = '';
    let currentLine = 0;
    inputString = fs.readFileSync(file).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const n = parseInt(readLine(inputString , currentLine ++), 10);
    const p = parseInt(readLine(inputString , currentLine ++), 10);
    let result = pageCount(n, p);
    console.log({result});
}

const pageCount = (n, p) => {
    if(n < 1 || n > 10**5) return 0;
    if(p < 1 || p > n) return 0;
    let count = 0;
    let countRev = 0;
    for(let i = 0; i < n; i += 2) {
        if(p == i || p == (i + 1)) break;
        count ++;
    }
    if(n % 2 == 0) {
        for(let i = n + 1; i > 0; i -= 2) {
            if(p == i || p == (i - 1)) break;
            countRev ++;
        }
    } else {
        for(let i = n; i > 0; i -= 2) {
            if(p == i || p == (i - 1)) break;
            countRev ++;
        }
    }
    console.log({count,countRev});
    return Math.min(...[count,countRev]);
}

/*
main('input00.txt');
main('input01.txt');*/
main('input02.txt');
