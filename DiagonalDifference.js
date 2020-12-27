function diagonalDifference(arr) {
    // Write your code here
    let lrd = 0;
    let rld = 0;
    arr.forEach((l, i) => {
        if(i == 0){
            rld += arr[i][i + 2]; 
        }else if(i == 1){
            rld += arr[i][i]; 
        }else{
            rld += arr[i][i - 2]; 
        }
        l.forEach((c, j) => {
            if(i == j) lrd += c;
        });
    });
    let result = Math.abs(lrd - rld);
    return result;    
}

function checkSquareMatrix(arr) {
  if(typeof arr === 'object') {
    for(i = 0; i < lines; i ++) {
       if(arr[i].length != arr.length) return 'NaSM';
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
  let testCase1 = checkSquareMatrixTestCase01(arr.test01);
  let testCase2 = checkSquareMatrixTestCase01(arr.test02);
  let testCase3 = checkSquareMatrixTestCase01(arr.test03);
  console.log({
    testCase1,
    testCase2,
    testCase3,
  });
}

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

console.clear();

runTests ({
  test01,
  test02,
  test03,
});
/*
To do:
check range -100 > x < 100
*/