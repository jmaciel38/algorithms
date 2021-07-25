var fs = require('fs');
let inputString = '';
let currentLine = 0;
inputString = fs.readFileSync('input03.txt').toString().split('\n')
.map(str => str.replace(/\s*$/, ''));

function readLine() {
    return inputString[currentLine++];
}
const st = readLine().split(' ');

const s = parseInt(st[0], 10);

const t = parseInt(st[1], 10);

const ab = readLine().split(' ');

const a = parseInt(ab[0], 10);

const b = parseInt(ab[1], 10);

const mn = readLine().split(' ');

const m = parseInt(mn[0], 10);

const n = parseInt(mn[1], 10);

const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    if(s < 1 || t < 1 || a < 1 || b < 1) return 0;
    if(s > 10**5 || t > 10**5 || a > 10**5 || b > 10**5) return 0;
    if(typeof apples != 'object' || typeof oranges != 'object') return 0;
    if(apples.length < 1 || apples.length > 10**5) return 0;
    if(oranges.length < 1 || oranges.length > 10**5) return 0;
    if(a >= s || s >= t || t >= b) return 0;
    let countApples = 0;
    let countOranges = 0;
    console.log({s, t, a, b, m, n});
    for(let i = 0; i < apples.length; i++){
        if(apples[i] < -(10**5) || apples[i] > 10**5) return 0;
        let distApple = a + apples[i];
        if( distApple >= s && distApple <= t) countApples++;
    }
    for(let i = 0;  i < oranges.length; i++){
        if(oranges[i] < -(10**5) || oranges[i] > 10**5) return 0;
        let distOranges = b + oranges[i];
        if(distOranges >= s && distOranges <= t) countOranges++;
    }
    let result = [countApples, countOranges];
    console.log(result[0]);
    console.log(result[1]);
    return result;
}
/*
teste 01: de parametros ok
*/
testResult01 = countApplesAndOranges(s, t, a, b, apples, oranges);

console.log({
    testResult01,
});
