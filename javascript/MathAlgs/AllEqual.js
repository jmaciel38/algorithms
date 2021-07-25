const allEqual = arr => arr.every(val => val === 1);

test01 = [1,2,3,4,5];
test02 = [1,1,1,1,1];
test03 = [2,2,2,2,2];

result01 = allEqual(test01);
result02 = allEqual(test02);
result03 = allEqual(test03);

console.log({
    result01,
    result02,
    result03
})