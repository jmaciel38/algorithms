function main(fileName) {
    var fs = require('fs');
    let inputString = '';
    inputString = fs.readFileSync(fileName).toString().replace(/\s*$/, '');
    const x1V1X2V2 = inputString.split(' ');
    const x1 = parseInt(x1V1X2V2[0], 10);
    const v1 = parseInt(x1V1X2V2[1], 10);
    const x2 = parseInt(x1V1X2V2[2], 10);
    const v2 = parseInt(x1V1X2V2[3], 10);
    let result = kangaroo(x1, v1, x2, v2);
    console.log({result});
}

function kangaroo(x1, v1, x2, v2) {
    if(x1 < 0 || x2 < 0 || x1 > 10**4 || x2 > 10**4) return 'NO';
    if(v1 < 1 || v1 > 10**4) return 'NO';
    if(x2 <= x1) return 'NO';
    if(v2 < 1 || v2 > 10**4) return 'NO';
    if(x2 > x1 && v2 > v1) return 'NO';
    if((x1 - x2) % (v2 -  v1) != 0 ) return 'NO';
    return 'YES';
}
//x1 + (y * v1) = x2 + (y * v2)
//x1 - x2 = (y * v2) - (y * v1)
//x1 - x2 = y * (v2 -  v1)
//(x1 - x2) / (v2 -  v1) = y
main('input00.txt');
main('input01.txt');
main('input02.txt');
main('input03.txt');
