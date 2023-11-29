import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const registrationSchema = new Schema({
	courseid: Number,
	regno: String,
	gradeid: Number
})

export const Registration = model('Registration', registrationSchema);