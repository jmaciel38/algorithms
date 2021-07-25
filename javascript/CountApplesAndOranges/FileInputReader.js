var fs = require('fs');
let inputString = '';
let currentLine = 0;
inputString = fs.readFileSync('input04.txt').toString().split('\n')
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

console.log({
  s,
  t,
  a,
  b,
  m,
  n,
  apples: apples.length,
  oranges: oranges.length
})
