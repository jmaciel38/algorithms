function gradingStudents(grades) {
    if(typeof grades != 'object') return 0;
    if(grades.length < 1 || grades.length > 60) return 0;
    let calcGrades = [];
    let newGrades = [];
    for(let i = 0; i < grades.length; i ++) {
        if(grades[i] < 0 || grades[i] > 100) return 0;
        let nextMultiFive = (parseInt(grades[i]/5) + 1) * 5;
        if(grades[i]%5){
            if(nextMultiFive > 40)  calcGrades.push(nextMultiFive);
            if (nextMultiFive <= 40) calcGrades.push(40);
        } else {
            if(nextMultiFive > 40)  calcGrades.push(grades[i]);
            if (nextMultiFive <= 40) calcGrades.push(40);
        }
        if((calcGrades[i] - grades[i]) < 3) {
            newGrades.push(calcGrades[i]);
        } else if((calcGrades[i] - grades[i]) >= 3 ) {
            newGrades.push(grades[i])
        } else {
            
        }
    }
    return newGrades;
}


test01 = [73, 67, 38, 33];
test02 = 'erro array';
test03 = [-73, 67, 38, 33];
test04 = [73, 67, 38, 101];
test05 = [30, 40, 50, 60];


result01 = gradingStudents(test01);
result02 = gradingStudents(test02);
result03 = gradingStudents(test03);
result04 = gradingStudents(test04);
result05 = gradingStudents(test05);

console.log({
    result01,
    result02,
    result03,
    result04,
    result05,
});