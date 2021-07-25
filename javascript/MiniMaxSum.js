function miniMaxSum(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let max = 0;
  let min = 0;
  let sumMin;
  let sumMax;
  if(typeof arr != 'object') return 0;
  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] < 1 || arr[i] > (10**9)) return 0;
    if(typeof arr[i] != 'number') return 0;
  }
  min = Math.min(...arr);
  max = Math.max(...arr);
  sumMin = arr.reduce(reducer) - max;
  sumMax = arr.reduce(reducer) - min;
  console.log(`${sumMin} ${sumMax}`);
}

test01 = [1, 2, 3, 4, 5];

miniMaxSum(test01);