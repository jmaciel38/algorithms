let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main(fileName) {
    var fs = require('fs');
    inputString = fs.readFileSync(fileName).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const ab = readLine(inputString, currentLine).split(' ');
    const aLength = parseInt(ab[0], 10);
    const bLength = parseInt(ab[1], 10);
    const aArr = readLine().split(' ');
    const bArr = readLine().split(' ');
    const total = getTotalX(aLength, bLength, aArr, bArr)
}

function getTotalX(aLength, bLength, aArr, bArr) {
    console.log({
        aLength,
        bLength,
        aArr,
        bArr
    });
    return 1;
}

main('input00.txt');
