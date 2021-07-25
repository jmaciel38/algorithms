
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

let test01 = factoringArr([40, 60]);

console.log({
    test01
});
