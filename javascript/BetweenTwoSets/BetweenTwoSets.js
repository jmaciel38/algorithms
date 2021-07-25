
function readLine(inputString, currentLine) {
    return inputString[currentLine++];
}

function main(fileName) {
    var fs = require('fs');
    let inputString = '';
    let currentLine = 0;
    inputString = fs.readFileSync(fileName).toString().split('\n')
    .map(str => str.replace(/\s*$/, ''));
    const ab = inputString[currentLine++].split(' ');
    const aLength = parseInt(ab[0], 10);
    const bLength = parseInt(ab[1], 10);
    const aArr = inputString[currentLine++].split(' ')
    .map(aArrTemp => parseInt(aArrTemp, 10));
    const bArr = inputString[currentLine++].split(' ')
    .map(bArrTemp => parseInt(bArrTemp, 10));
    const total = getTotalX(aLength, bLength, aArr, bArr);
    console.log({total});
}

function getTotalX(aLength, bLength, aArr, bArr) {
    if((aArr.length < 1) || (aArr.length > 10) || isNaN(aArr[0])) return 0;
    if((bArr.length < 1) || (bArr.length > 10) || isNaN(bArr[0])) return 0;
    if((Math.min(...aArr) < 1) || (Math.max(...aArr) > 100)) return 0;
    if((Math.min(...bArr) < 1) || (Math.max(...bArr) > 100)) return 0;
    const isPrime = num => {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num;
    }

    const allOne = arr => arr.every(val => val === 1);

    const allDiff = (arr, prime) => arr.every(val => val % prime !== 0, prime);

    const allPrimeDiv = (arr, prime) => arr.every(val => val % prime === 0, prime);

    const primesInRange = num => {
        if(typeof num != 'number' || num < 1) return 0;
        let primes = [];
        let checkPrime;
        for (let k = 2; k <= num; k ++){
            checkPrime = isPrime(k);
            if(checkPrime){
                primes.push(checkPrime);
            } else {
                continue;
            }
        }
        return primes;
    }

    const factoringArr = arr => {
        let runArr = arr;
        let primesArr = primesInRange(Math.max(...arr));
        let turnRes = [];
        let facNum = [];
        let primeArrIndex = 0;
        let whileBoolTest = true;
        let lcm = 1;
        let gcd = 1;
        while(whileBoolTest) {
            runArr.forEach( (item, i)=> {
                if(item % primesArr[primeArrIndex] == 0) {
                    turnRes.push(item / primesArr[primeArrIndex]);
                } else {
                    turnRes.push(item);
                }
            });
            if(!allDiff(runArr, primesArr[primeArrIndex])) facNum.push({
                prime: primesArr[primeArrIndex],
                divAll: allPrimeDiv(runArr, primesArr[primeArrIndex])
            });
            runArr = turnRes;
            if(allDiff(runArr, primesArr[primeArrIndex])) primeArrIndex ++;
            turnRes = [];
            if(allOne(runArr)) whileBoolTest = false;
        }
        facNum.forEach((item, i) => {
            lcm = lcm * item.prime;
            if(item.divAll) gcd = gcd * item.prime;
        });
        return {lcm, gcd};
    }
    let checkAarr = factoringArr(aArr);
    let checkBarr = factoringArr(bArr);
    let multi = 1;
    let count = 0;
    if(checkBarr.gcd % checkAarr.lcm === 0) {
        while ((checkAarr.lcm * multi) <= checkBarr.gcd) {
            if(checkBarr.gcd % (checkAarr.lcm * multi) === 0) count ++;
            multi ++;
        }
    }
    console.log({
        checkAarr,
        checkBarr,
        count
    });
    return count;
}
/*
1. find the LCM of all the integers of array A.
2. find the GCD of all the integers of array B.
3. Count the number of multiples of LCM that evenly divides the GCD.
 */
main('input00.txt');
main('input01.txt');
main('input02.txt');
main('input08.txt');
