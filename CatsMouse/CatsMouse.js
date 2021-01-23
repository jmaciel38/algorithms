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
    const q = parseInt(rf.readLine(inputString , currentLine ++), 10);
    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = rf.readLine(inputString , currentLine ++).split(' ');
        const x = parseInt(xyz[0], 10);
        const y = parseInt(xyz[1], 10);
        const z = parseInt(xyz[2], 10);
        let result = catAndMouse(x, y, z);
        console.log({result});
    }
}
/**
 * Description of what this does.
 *
 * @param
 * @returns
 */
const catAndMouse = (x, y, z) => {
    if(x < 1 || x > 100 ) return 0;
    if(y < 1 || y > 100 ) return 0;
    if(z < 1 || z > 100 ) return 0;
    let catsDist = [];
    catsDist.push(Math.abs(z - x));
    catsDist.push(Math.abs(z - y));
    if(catsDist[0] < catsDist[1])  return 'Cat A';
    if(catsDist[0] > catsDist[1])  return 'Cat B';
    if(catsDist[0] == catsDist[1])  return 'Mouse C';
}

main('input00.txt');
