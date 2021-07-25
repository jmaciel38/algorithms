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
    let JulianLeapYear = false;
    let GregorianLeapYear = false;
    if(year < 1918 && (year % 4) === 0) JulianLeapYear = true;
    if(year > 1918 && (year % 4) === 0 && (year % 400) === 0 && (year % 100) !== 0 ) GregorianLeapYear = true;
    console.log({
        year,
        JulianLeapYear,
        GregorianLeapYear,
        yearPerFour: (year % 4),
        yearPerFourHundred: (year % 400),
        yearPerHundred: (year % 100),
    });
    return 1;
}

main('input00.txt');
main('input01.txt');
main('input02.txt');
main('input60.txt');
