
const isPrime = num => {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num;
}

const allEqual = arr => arr.every(val => val === 1);

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

const factoring = num => {
    let calcNum = num;
    let primes = primesInRange(num);
    let facNum = [];
    let primeIndex = 0;
    while (calcNum != 1) {
        if(calcNum % primes[primeIndex] == 0) {
            calcNum = calcNum / primes[primeIndex];
            facNum.push(primes[primeIndex]);
        } else {
            primeIndex ++;
        }
    }
    console.log({
        primes,
        calcNum,
        facNum
    });
}


factoring(10);
factoring(40);
factoring(60);
factoring(59);
