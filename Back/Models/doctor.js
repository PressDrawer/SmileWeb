const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({

	RegNumber : Number,
	FirstName : String,
	LastName : String,
	District : String,
	Phone : Number,
	Hospital : String,
	Description : String,

})

module.exports = mongoose.model('Doctor', DoctorSchema);