const express = require ("express");
const cors = require('cors');
const Patient = require('./models/patient');
const Doctor = require('./models/doctor');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const Port = 3000


const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors());
app.options('*', cors());
const api = require('./routes/api');




app.use(bodyParser.json());

app.use('/api',api);

var mongoDb = 'mongodb://localhost:27017/SmileDB';

//mongoose.Promise = global.Promise;


// Connect Mongodb Database
mongoose.connect(mongoDb, { useNewUrlParser: true }).then(
 () => { console.log('Database is connected') },
 err => { console.log('There is problem while connecting database ' + err) }
);

// app.get('/', function(req,res){
// 	res.send('Hello from server')
// })

app.listen(Port, function(){

	console.log('Server running'+ Port)
})