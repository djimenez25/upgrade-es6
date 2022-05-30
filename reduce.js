// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce ((acc,exam) => acc + exam.score, 0);
console.log(totalScore);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

const sumScore = exams.reduce ((aproved,exam) => exam.score  >= 5 ? aproved + exam.score : aproved, 0);
console.log(sumScore);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const averageScore = exams.reduce ((total, exam, index, array) => {
    total += exam.score;
    if (index === array.length -1) {
        return total / array.length;
    } else {
        return total;
    }
},0);

console.log(averageScore);