function diagonalDifference(arr) {
  if(typeof arr === 'object') {
    let lrd = 0;
    let rld = 0;
  	let rldj;
    let result;
    let N = arr.length;
    for(i = 0; i < N; i ++) {
      if(arr[i].length != arr.length) return 0;
      for(j = 0; j < arr[i].length; j ++) {
        if(arr[i][j] < -100 || arr[i][j] > 100) return 0;
      }
      rldj = (N - (1 + i))
      lrd += arr[i][i];
      rld += arr[i][rldj];
    }
    result = Math.abs(lrd - rld);
    return result;
  } else {
    return 0;
  }  
}

function checkSquareMatrix(arr) {
  if(typeof arr === 'object') {
    for(i = 0; i < arr.length; i ++) {
      if(arr[i].length != arr.length) return 'NaSM';
      for(j = 0; j < arr[i].length; j ++) {
        if(arr[i][j] < -100 || arr[i][j] > 100) return 'NaSM';
      }
    }
    return true;
  } else {
    return 'NaSM';
  }   
}

function checkSquareMatrixTestCase01 (arr) {
  results = {testsOk: 0, testsFail: 0, errors: []};
  test = checkSquareMatrix(arr);
  if(test === true) {
    results.testsOk ++;
  } else {
    results.testsFail ++;
    results.errors.push({isMatrix: test, arr});
  }
  return results;
}

function runTests(arr) {
  let testCase1 = checkSquareMatrixTestCase01(test04);
  let testCase2 = checkSquareMatrixTestCase01(arr.test02);
  let testCase3 = checkSquareMatrixTestCase01(arr.test03);
  console.log({
    testCase1,
    testCase2,
    testCase3,
  });
}

df = diagonalDifference(test06);
console.log(df)
test01 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

test02 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8],
];

test03 = 'string';

test04 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -101],
];

test05 = [
  [110, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
//console.clear();

test06 = [
  [11, 2, 4, 8],
  [4, 5, 6, 10],
  [10, 8, -12 , 45],
  [23, -14, 30 , 2],
];

runTests ({
  test01,
  test02,
  test03,
});
/*
To do:
check range -100 > x < 100
*/