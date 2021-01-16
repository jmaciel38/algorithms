const allDiff = (arr, prime) => arr.every(val => {
    //console.log(prime)
    val % prime != 0;
}, prime);//calcNum % primes[primeIndex] == 0

let testPrime01 = 3;
let test01 = [6,9,12,15];
let testPrime02 = 2;
let test02 = [5,15,25,35];

let result01 = allDiff(test01, testPrime01);
let result02 = allDiff(test02, testPrime02);

console.log({
    result01,
    result02,
})
