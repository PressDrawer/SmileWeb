const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Patient = require('../models/patient')
const Doctor = require('../models/doctor')

router.get('/', (req, res) => {

	res.send('Hello from api')
})

router.get('/register',(req,res) =>{

	Patient.find((err, Patient) => {
		if(!err){
			res.send(Patient);
		}else{
			console.log(JSON.stringify(err,undefined,2));
		}
	});
	//res.send(patients);
});

router.post('/register',(req,res) => {
	//let userData = req.body
	var patient = new Patient({

		firstName : req.body.fname,
		LastName : req.body.lname,
		city : req.body.city,
		age : req.body.age,
		gender : req.body.gender,
		email : req.body.email,
		password : req.body.password

		})
	
	patient.save((error, doc) => {
		if(error){
			console.log(error)
		}else{
			let payload = { subject : Patient}
			let token = jwt.sign(payload, 'secretKey')
			res.status(200).send({token, doc})
		}
		// if(!error){ res.send(doc) }
		// else{console.log(error)}
	})
});

router.post('/login',(req,res) => {
	let userData = req.body
	Patient.findOne({email : userData.email}, (error, patient) => {
		if (error){
			console.log(error)
		}else{
			if (!user){
				res.status(401).send('invalid email')
			}else{
				if(user.password !== userData.password){
					res.status(401).send('invalid password')
				}else{
					let payload = {subject : patient._id}
					let token = jwt.sign(payload, 'secretKey')
					res.status(200).send({token})
				}
			}
		}
	})
})

// router.get('/login',(req,res) =>{

// 	Patient.find();
	
// })

//Post Docter Data to the DB

router.get('/doctor',(req,res) =>{

	Doctor.find((err, Doctor) => {
		if(!err){
			res.send(Doctor);

		}
		else{
			console.log(JSON.stringify(err,undefined,2));
		}

	});
	//res.send(patients);
});


router.post('/doctor', (req,res) =>{

	var doctor = new Doctor({
		RegNumber : req.body.regNumber,
		FirstName : req.body.firstName,
		LastName :  req.body.lastName,
		District : req.body.district,
		Phone : req.body.phone,
		Hospital : req.body.hospital,
		Description : req.body.description,
	})

	doctor.save((err,doc) => {
		if(err){
			console.log(err)
		}else{
			res.send(doc)
		}
	})

})

module.exports = router