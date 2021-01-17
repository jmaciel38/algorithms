const main = file => {
    var fs = require('fs');
    let inputString = '';
    let currentLine = 0;
    inputString = fs.readFileSync(file).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const n = parseInt(inputString[0], 10);
    const scores = inputString[1].split(' ').map(scoresTemp => parseInt(scoresTemp, 10));
    const result = breakingRecords(scores);
    console.log(result);
}

const breakingRecords = scores => {
    if(scores.length < 1 || scores.length > 1000) return 0;
    let placar = [];
    let score = 0;
    let highScore = 0;
    let lowScore = 0;
    let lowCount = 0;
    let highCount = 0;
    for(let i = 0; i < scores.length; i ++) {
        if(scores[i] < 0 || scores[i] > 10**8) return 0;
        score = scores[i];
        if(i === 0 ) {
            highScore = score;
            lowScore = score;
            placar.push([score, highScore, lowScore]);
        } else {
            if(score > highScore){
                highScore = score;
                highCount ++;
            }
            if(score < lowScore) {
                lowScore = score;
                lowCount ++;
            }
            placar.push([score, highScore, lowScore]);
        }
    }
    console.log({
        placar,
        lowCount,
        highCount,
        placarLength: placar.length
    });
    return [highCount, lowCount];
}

main('input00.txt');
main('input01.txt');
main('input11.txt');
