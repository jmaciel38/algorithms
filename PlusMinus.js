function plusMinus(arr){
  let N = arr.length;
  let countPositive = 0;
  let countNegative = 0;
  let countZeros = 0;
  let positiveRatio = 0;
  let negativeRatio = 0;
  let zerosRatio = 0;
  if(N < 0 || N > 100) return 0;
  for(let i = 0; i < N; i ++) {
    if(arr[i] < -100 || arr[i] > 100) return 0;
    if(typeof arr[i] != 'number' ) return 0;
    if(arr[i] > 0) {
      countPositive ++;
    } else if(arr[i] < 0){
      countNegative ++;
    } else{
      countZeros ++;
    }
  }
  positiveRatio = parseFloat(parseInt( countPositive ) / parseInt( N ), 5);
  negativeRatio = parseFloat(parseInt( countNegative ) / parseInt( N ), 5);
  zerosRatio = parseFloat(parseInt( countZeros ) / parseInt( N ), 5);
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zerosRatio);
  return [positiveRatio, negativeRatio, zerosRatio];
}

test01 = [-4, 3, -9, 0, 4, 1];
test02 = [-4, 3, -9, 'erro', 4, 1];
test03 = [-101, 3, -9, 0, 4, 1];
test04 = [-4, 3, -9, 0, 4, 101];

result01 = plusMinus(test01);
result02 = plusMinus(test02);
result03 = plusMinus(test03);
result04 = plusMinus(test04);
