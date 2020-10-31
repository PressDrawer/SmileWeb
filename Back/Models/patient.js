const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patient = new Schema({
	firstName : String,
	lastName : String,
	city : String,
	age : Number,
	gender : String,
	email : String,
	password : String

}, {
    versionKey: false 
})

module.exports =  mongoose.model('Patient', Patient);