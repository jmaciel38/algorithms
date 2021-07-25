const rf = require('../Utils/ReadFile');
/**
 * Main function of program.
 *
 * @param fileName
 * @returns result: integer
 */
 const main = fileName => {
     let currentLine = 0;
     let inputString = rf.getInputString(fileName);
     let s = Array(3);
     for (let i = 0; i < 3; i++) {
        s[i] = rf.readLine(inputString , currentLine ++).split(' ')
        .map(sTemp => parseInt(sTemp, 10));
     }
     const result = formingMagicSquare(s);
     console.log({result});
 }
/**
 * Description of what this does.
 *
 * @param
 * @returns
 */
 const formingMagicSquare = (s) => {
     console.log({s});
     return 1;
 }

main('input00.txt');
