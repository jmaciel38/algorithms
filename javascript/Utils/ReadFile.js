const fs = require('fs');
/**
 * Read a line of a array of lines.
 *
 * @param inputString: array
 * @param currentLine: integer
 * @returns string
 */
exports.readLine = (inputString , currentLine) => {
    return inputString[currentLine];
}
/**
 * Returns a array generated from a file.
 *
 * @param fileName: string
 * @returns
 */
exports.getInputString = (fileName) => {
    return fs.readFileSync(fileName).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
}
