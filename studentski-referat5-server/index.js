const express = require('express')
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const app = express()

app.use(bodyParser());
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/fail', (req, res) => res.status(403).json({msg: 'You are not allowed to access this'}));

app.use('/api/student', function(req, res, next) {
    var token = req.get('Authorization');
    if(token){
      var user = jwt.decode(token.substring(7));
      if (user && user.user) {
        return next();
      }
    }
    return res.status(403).json({msg: 'Please login to access this information'});
  }, require('./students'));
app.use('/api/user', require('./user'));

app.listen(3000, () => console.log('Student app backend listening on port 3000!'));
