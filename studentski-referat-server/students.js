var express = require('express')
var router = express.Router();

const students = [
  {name: 'Janez', lastName: 'Novak', idNumber: 533, imageUrl: 'https://placebeard.it/200x200', studyProgram: 'Kibernetska varnost', noOfExams: 14, noOfExamsLeft: 7, fullTimeStudent: true },
  {name: 'Petra', lastName: 'Vrečar', idNumber: 422, imageUrl: 'https://placebeard.it/200x200', studyProgram: 'Podatkovne znanosti', noOfExams: 12, noOfExamsLeft: 2, fullTimeStudent: false }
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundStudents = students.filter(
      (student) => student.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundStudents);
  }
  return res.status(200).json(students);
});

router.get('/:code', (req, res) => {
  let studentCode = req.params.code;
  let foundStudent = students.find(each => each.idNumber == studentCode);
  if (foundStudent) {
    return res.status(200).json(foundStudent);
  }
  return res.status(400).json({msg: 'Študent sa idNumber ' + studentCode + ' ne obstaja!'});
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
