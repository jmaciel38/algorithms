function countApplesAndOranges(s, t, a, b, apples, oranges) {
    if(s < 1 || t < 1 || a < 1 || b < 1 || apples < 1 || oranges < 1) return 0;
    if(s > 10**5 || t > 10**5 || a > 10**5 || b > 10**5 || apples > 10**5 || oranges > 10**5) return 0;
    if(a >= s || s >= t || t >= b) return 0;
    let appleTreeDist;
    let orangeTreeDist;
    let houseSpace = t - s;
    let result = [1, 1];
    return result;
}
/* 
teste de parametros ok
*/
testS_01 = 2; testT_01 = 3; testA_01 = 1; testB_01 = 4; testApples_01 = 1; testOranges_01 = 1;
testResult01 = countApplesAndOranges(testS_01, testT_01, testA_01, testB_01, testApples_01, testOranges_01);

/* 
teste de Constraints 1 <= s, t, a, b, apples, oranges
*/
testS_02 = 0; testT_02 = 3; testA_02 = 1; testB_02 = 4; testApples_02 = 1; testOranges_02 = 1;
testResult02 = countApplesAndOranges(testS_02, testT_02, testA_02, testB_02, testApples_02, testOranges_02);

/* 
teste de Constraints s, t, a, b, apples, oranges <= 10**5
*/
testS_03 = 0; testT_03 = 3; testA_03 = 1; testB_03 = 4; testApples_03 = 100001; testOranges_03 = 1;
testResult03 = countApplesAndOranges(testS_03, testT_03, testA_03, testB_03, testApples_03, testOranges_03);

/* 
teste 01 de Constraints s, t, a, b, apples, oranges <= 10**5
*/
testS_04 = 0; testT_04 = 0; testA_04 = 1; testB_04 = 4; testApples_04 = 1; testOranges_04 = 1;
testResult04 = countApplesAndOranges(testS_04, testT_04, testA_04, testB_04, testApples_04, testOranges_04);



console.log({
    testResult01,
    testResult02,
    testResult03,
    testResult04,
});