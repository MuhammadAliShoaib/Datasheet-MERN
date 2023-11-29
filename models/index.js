import mongoose from 'mongoose';
import { Course } from "./course.js"
import { Grade } from "./grade.js"
import { Registration } from "./registration.js"
import { Student } from "./student.js"

(async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/registrationsheet")
})();

export const db = {
    Course,
    Grade,
    Registration,
    Student
}