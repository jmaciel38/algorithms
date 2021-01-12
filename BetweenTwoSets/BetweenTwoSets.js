let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main(fileName) {
    var fs = require('fs');
    inputString = fs.readFileSync(fileName).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const ab = readLine().split(' ');
    const aLength = parseInt(ab[0], 10);
    const bLength = parseInt(ab[1], 10);
    const aArr = readLine().split(' ').map(aArrTemp => parseInt(aArrTemp, 10));
    const bArr = readLine().split(' ').map(bArrTemp => parseInt(bArrTemp, 10));
    const total = getTotalX(aLength, bLength, aArr, bArr)
}

function getTotalX(aLength, bLength, aArr, bArr) {
    if(aArr.length < 1 || aArr.length > 10) return 0;
    if(bArr.length < 1 || bArr.length > 10) return 0;
    if(Math.min(...aArr) < 1 || Math.max(...aArr) > 100) return 0;
    if(Math.min(...bArr) < 1 || Math.max(...bArr) > 100) return 0;

    console.log({
        aLength,
        bLength,
        aArr,
        bArr,
        aArrLength: aArr.length,
        bArrLength: bArr.length,
    });
    return 1;
}

main('input00.txt');
