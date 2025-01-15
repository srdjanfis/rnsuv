var express = require('express')
var router = express.Router();

const students = [
  {name: 'Janez', lastName: 'Novak', idNumber: 533, imageUrl: 'https://placebeard.it/200x200', studyProgram: 1, noOfExams: 14, noOfExamsLeft: 7, fullTimeStudent: true },
  {name: 'Petra', lastName: 'Vrečar', idNumber: 422, imageUrl: 'https://placebeard.it/200x200', studyProgram: 2, noOfExams: 12, noOfExamsLeft: 2, fullTimeStudent: false },
  {name: 'Novak', lastName: 'Djokovic', idNumber: 154, imageUrl: 'https://placebeard.it/200x200', studyProgram: 1, noOfExams: 14, noOfExamsLeft: 2, fullTimeStudent: false }
];

const programs = [
  { id: 1, name: 'RST' },
  { id: 2, name: 'PZ' },
  { id: 3, name: 'ISD' }
]

router.get('/programs', (req, res) => {
  if (programs) {
    return res.status(200).json(programs);
  }
  return res.status(400).json({ msg: 'No programs error.' });
});

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundStudents = students.filter(
      (student) => student.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundStudents);
  }
  return res.status(200).json(students);
});

router.get('/:pcode', (req, res) => {
  let programCode = req.params.pcode;
  let foundStudents = students.filter(each => each.studyProgram == programCode);
  if (foundStudents) {
    return res.status(200).json(foundStudents);
  }
  return res.status(400).json({msg: 'Neznana napaka.'});
});

router.post('/', (req, res) => {
  let student = req.body;
  let foundStudent = students.find(each => each.idNumber == student.idNumber);
  if (foundStudent) {
    return res.status(400)
        .json({msg: 'Študent sa idNumber ' + student.idNumber + ' že obstaja!'});
  }
  students.push(student);
  return res.status(200).json({msg: 'Študent sa idNumber ' + student.idNumber + ' je uspešno ustvarjen!'});
});

router.patch('/:code', (req, res) => {
  let studentCode = req.params.code;
  let foundStudent = students.find(each => each.idNumber == studentCode);
  if (foundStudent) {
    foundStudent.fullTimeStudent = !foundStudent.fullTimeStudent;
    let msg = 'Študent sa idNumber ' + studentCode + ' je ';
    msg += foundStudent.fullTimeStudent ? ' redni.' : ' izredni.';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'Študent sa idNumber ' + studentCode + ' ni najden!'});
});

module.exports = router;
