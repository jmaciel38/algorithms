function gradingStudents(grades) {
    if(typeof grades != 'object') return 0;
    if(grades.length < 1 || grades.length > 60) return 0;
    let newGrades = [];
    for(let i = 0; i < grades.length; i ++) {
        if(grades[i] < 0 || grades[i] > 100) return 0;
        if(grades[i]%5){
            let nextMultiFive = (parseInt(grades[i]%5) + 1) * 5;
            newGrades.push(nextMultiFive);
        }
    }
    return newGrades;
}


test01 = [4, 73, 67, 38, 33];
test02 = 'erro array';
test03 = [-1, 73, 67, 38, 33];
test04 = [4, 73, 67, 38, 101];


result01 = gradingStudents(test01);
result02 = gradingStudents(test02);
result03 = gradingStudents(test03);
result04 = gradingStudents(test04);

console.log({
    result01,
    result02,
    result03,
    result04,
});