import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const studentSchema = new Schema({
        regno: String,
        studentname: String,
        fathername: String
})

export const Student = model('Student', studentSchema);