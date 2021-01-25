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
    const year = parseInt(rf.readLine(inputString , currentLine ++).trim(), 10);
    const result = dayOfProgrammer(year);
    console.log({result});
}

/**
 * Function which returns full date of Day of the Programmer given a year.
 *
 * @param
 * @returns
 */
const dayOfProgrammer = year => {
    if(year < 1700 || year > 2700) return 0;
    console.log({year});
    return 1;
}

main('input00.txt');
