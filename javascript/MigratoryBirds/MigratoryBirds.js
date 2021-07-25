const readLine = (inputString , currentLine) => {
    return inputString[currentLine];
}

const main = file => {
    const fs = require('fs');
    let inputString = '';
    var currentLine = 0;
    inputString = fs.readFileSync(file).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const arrCount = parseInt(readLine(inputString , currentLine ++).trim(), 10);
    const arr = readLine(inputString , currentLine ++).replace(/\s+$/g, '').split(' ')
    .map(arrTemp => parseInt(arrTemp, 10));
    const result = migratoryBirds(arr);
    console.log(result);
}

const migratoryBirds = arr => {
    if(arr.length < 5 || arr.length > (2*(10**5))) return 0;
    let birds = [0,0,0,0,0];
    let commonBird = 0;
    arr.forEach((item, i) => {
        if(item == 1) birds[0] ++;
        if(item == 2) birds[1] ++;
        if(item == 3) birds[2] ++;
        if(item == 4) birds[3] ++;
        if(item == 5) birds[4] ++;
    });
    birds.forEach((item, i) => {
        if(item > birds[commonBird]) commonBird = i;
    });
    return (commonBird + 1);
}

main('input00.txt');
main('input03.txt');
main('input04.txt');
main('input05.txt');
