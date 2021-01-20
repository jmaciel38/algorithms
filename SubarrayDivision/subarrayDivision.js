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
    const s = readLine(inputString, currentLine).replace(/\s+$/g, '').split(' ')
    .map(sTemp => parseInt(sTemp, 10));
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
    let count = 0;
    for(let i = 0; i < s.length; i ++) {
        if(s[i] < 1 || s[i] > 5) return 0;
        let sum = 0;
        let whileTest = 0;
        while(whileTest < m) {
            sum += s[(i + whileTest)];
            whileTest++;
        }
        if(sum == d) count++;
    }
    console.log ({s, d, m,count});
    return count;
}

main('input00.txt');
main('input01.txt');
main('input02.txt');
