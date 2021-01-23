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
    const steps = parseInt(readLine(inputString , currentLine ++).trim(), 10);
    const path = readLine(inputString , currentLine ++);
    const result = countingValleys(steps, path);
    console.log({result});
}

/**
 * Function wich counts how many valleys the hiker across given a number
 * of steps and a path.
 *
 * @param steps: integer
 * @param path: string
 * @returns result: integer
 */
const countingValleys = (steps, path) => {
    if(steps < 2 || steps > 10**6) return 0;
    let pathArr = path.split('');
    if(pathArr.some(element => (element != 'U' && element != 'D'))) return 0;
    let result = 0;
    let hikerAlt = 0;
    let altSet = [];
    pathArr.forEach((item, i) => {
        if(item == 'U') {
            hikerAlt ++;
            altSet.push(hikerAlt);
        } else {
            hikerAlt --;
            altSet.push(hikerAlt);
        }
    });
    altSet.forEach((item, i) => {
        if(i == 0 && item < 0) {
            result ++;
        } else if (altSet[i-1] == 0 && item < 0) {
            result ++;
        }
    });
    return result;
}

/**
 * Call of main function
 *
 * @param filename
 */
main('input00.txt');
main('input01.txt');
main('input02.txt');
main('input03.txt');
