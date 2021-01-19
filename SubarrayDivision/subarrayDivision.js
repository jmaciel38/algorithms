const readLine = (inputString , currentLine) => {
    return inputString[currentLine];
}
const main = file => {
    const fs = require('fs');
    let inputString = '';
    var currentLine = 0;
    inputString = fs.readFileSync(file).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const n = parseInt(readLine(inputString, currentLine).trim(), 10);
    currentLine++;
    const s = readLine(inputString, currentLine).replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    currentLine++;
    const dm = readLine(inputString, currentLine).replace(/\s+$/g, '').split(' ');
    const d = parseInt(dm[0], 10);
    const m = parseInt(dm[1], 10);
    const result = birthday(s, d, m);
}

const birthday = (s, d, m) => {
    if(s.length < 1 || s.length > 100) return 0;
    if(d < 1 || d > 31) return 0;
    if(m < 1 || m > 12) return 0;
    //if(s[1] < 1 || s[1] > 5) return 0;
    
    console.log ({s, d, m});
}

main('input00.txt');
