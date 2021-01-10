function countApplesAndOranges(s, t, a, b, apples, oranges) {
    if(s < 1 || t < 1 || a < 1 || b < 1) return 0;
    if(s > 10**5 || t > 10**5 || a > 10**5 || b > 10**5) return 0;
    if(typeof apples != 'object' || typeof oranges != 'object') return 0;
    if(apples.length < 1 || apples.length > 10**5) return 0;
    if(oranges.length < 1 || oranges.length > 10**5) return 0;
    if(a >= s || s >= t || t >= b) return 0;
    let countApples = 0;
    let countOranges = 0;
    for(let i = 0; i < apples.length; i++){
        if(apples[i] < -(10**5) || apples[i] > 10**5) return 0;
        let distApple = a + apples[i];
        if( distApple >= s) countApples++;
    }
    for(let i = 0;  i < oranges.length; i++){
        if(oranges[i] < -(10**5) || oranges[i] > 10**5) return 0;
        let distOranges = b + oranges[i];
        if(distOranges <= t) countOranges++;
    }
    let result = [countApples, countOranges];
    for(let i = 0; i < result.length; i ++) {
        console.log(result[i]);
    }
    return result;
}
/* 
teste 01: de parametros ok
*/
testS_01 = 7; testT_01 = 11; testA_01 = 5; testB_01 = 15;
testApples_01 = [-2, 2, 1]; testOranges_01 = [5, -6];
testResult01 = countApplesAndOranges(
	testS_01, testT_01, testA_01, testB_01, testApples_01, testOranges_01
);

/* 
teste 02: de Constraints 1 <= s, t, a, b
*/
testS_02 = 0; testT_02 = 11; testA_02 = 5; testB_02 = 15;
testApples_02 = [-2, 2, 1]; testOranges_02 = [5, -6];
testResult02 = countApplesAndOranges(
	testS_02, testT_02, testA_02, testB_02, testApples_02, testOranges_02
);

/* 
teste 03: de Constraints s, t, a, b <= 10**5
*/
testS_03 = 7; testT_03 = 100001; testA_03 = 5; testB_03 = 15;
testApples_03 = [-2, 2, 1]; testOranges_03 = [5, -6];
testResult03 = countApplesAndOranges(
	testS_03, testT_03, testA_03, testB_03, testApples_03, testOranges_03
);

/* 
teste 04: apples, oranges tipo array
*/
testS_04 = 7; testT_04 = 11; testA_04 = 5; testB_04 = 15;
testApples_04 = 'erro'; testOranges_04 = [5, -6];
testResult04 = countApplesAndOranges(
	testS_04, testT_04, testA_04, testB_04, testApples_04, testOranges_04
);

/* 
teste 05: a >= s || s >= t || t >= b
*/
testS_05 = 7; testT_05 = 11; testA_05 = 9; testB_05 = 15;
testApples_05 = [-2, 2, 1]; testOranges_05 = [5, -6];
testResult05 = countApplesAndOranges(
	testS_05, testT_05, testA_05, testB_05, testApples_05, testOranges_05
);

/* 
teste 06: d < -10**5
*/
testS_06 = 7; testT_06 = 11; testA_06 = 5; testB_06 = 15;
testApples_06 = [-100002, 2, 1]; testOranges_06 = [5, -6];
testResult06 = countApplesAndOranges(
	testS_06, testT_06, testA_06, testB_06, testApples_06, testOranges_06
);

/* 
teste 07: d > 10**5
*/
testS_07 = 7; testT_07 = 11; testA_07 = 5; testB_07 = 15;
testApples_07 = [-2, 2, 1]; testOranges_07 = [100005, -6];
testResult07 = countApplesAndOranges(
	testS_07, testT_07, testA_07, testB_07, testApples_07, testOranges_07
);

/* input de exemplo
s, t: 7 11
a, b: 5 15
apples, oranges: 3, 2
apples positions: -2 2 1
oranges positions: 5 -6
*/

console.log({
    testResult01,
    testResult02,
    testResult03,
    testResult04,
    testResult05,
    testResult06,
    testResult07,
});
testApples_07.length