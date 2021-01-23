/**
 * Read a line of a array of lines.
 *
 * @param inputString: array
 * @param currentLine: integer
 * @returns string
 */
const readLine = (inputString , currentLine) => {
    return inputString[currentLine];
}

/**
 * Main function of program.
 *
 * @param fileName
 * @returns result: integer
 */
const main = fileName => {
    const fs = require('fs');
    let inputString = '';
    let currentLine = 0;
    inputString = fs.readFileSync(fileName).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const bnm = readLine(inputString , currentLine ++).split(' ');
    const b = parseInt(bnm[0], 10);
    const n = parseInt(bnm[1], 10);
    const m = parseInt(bnm[2], 10);
    const keyboards = readLine(inputString , currentLine ++).split(' ')
    .map(keyboardsTemp => parseInt(keyboardsTemp, 10));
    const drives = readLine(inputString , currentLine ++).split(' ')
    .map(drivesTemp => parseInt(drivesTemp, 10));
    let moneySpent = getMoneySpent(keyboards, drives, b);
    console.log({moneySpent});
}

/**
 * Given a array of keyboards and drives find de combination wich is more approach
 * of a given money to spent.
 *
 * @param keyboards: array
 * @param drives: array
 * @param b: integer
 * @returns result: integer
 */
const getMoneySpent = (keyboards, drives, b) => {
    if(keyboards.length < 1 || keyboards.length > 1000) return 0;
    if(drives.length < 1 || drives.length > 1000) return 0 ;
    let combs = [];
    for (let i = 0; i < keyboards.length; i ++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i] + drives[j];
            if(sum <= b)combs.push(sum);
        }
    }
    if(combs.length == 0) return -1;
    return Math.max(...combs);
}


main('input00.txt');
main('input01.txt');
