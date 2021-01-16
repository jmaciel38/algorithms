
function readLine(inputString, currentLine) {
    return inputString[currentLine++];
}

function main(fileName) {
    var fs = require('fs');
    let inputString = '';
    let currentLine = 0;
    inputString = fs.readFileSync(fileName).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const ab = inputString[currentLine++].split(' ');
    const aLength = parseInt(ab[0], 10);
    const bLength = parseInt(ab[1], 10);
    const aArr = inputString[currentLine++].split(' ')
    .map(aArrTemp => parseInt(aArrTemp, 10));
    const bArr = inputString[currentLine++].split(' ')
    .map(bArrTemp => parseInt(bArrTemp, 10));
    const total = getTotalX(aLength, bLength, aArr, bArr);
    console.log({total});
}

function getTotalX(aLength, bLength, aArr, bArr) {
    if((aArr.length < 1) || (aArr.length > 10) || isNaN(aArr[0])) return 0;
    if((bArr.length < 1) || (bArr.length > 10) || isNaN(bArr[0])) return 0;
    if((Math.min(...aArr) < 1) || (Math.max(...aArr) > 100)) return 0;
    if((Math.min(...bArr) < 1) || (Math.max(...bArr) > 100)) return 0;
    let gcd = (x, y) => {
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }
    let gcd01 = gcd(...aArr);

    console.log({
        aLength,
        bLength,
        aArr,
        bArr,
        test: isNaN(aArr[0]),
        aArrLength: aArr.length,
        bArrLength: bArr.length,
    });
    return 1;
}
/*
1. find the LCM of all the integers of array A.
2. find the GCD of all the integers of array B.
3. Count the number of multiples of LCM that evenly divides the GCD.
 */
main('input00.txt');
main('input01.txt');
main('input02.txt');
