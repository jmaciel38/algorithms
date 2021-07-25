function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num;
}

function primesInRange(num){
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

let test01 = primesInRange(3);
let test02 = primesInRange(5);
let test03 = primesInRange(100);
let test04 = primesInRange(10);

console.log({
    test01,
    test02,
    test03,
    test04
});
