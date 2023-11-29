import axios from 'axios'
import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react'
import RegisteredCourses from './registerCourses';


type Student = {
    regno: string,
    studentname: string,
    fathername: string
}

export default function StudentForm() {

    const [regno, setRegno] = useState("");
    const [student, setStudent] = useState<Student>();

    let getData = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            axios.get(`/api/student/${regno}`)
                .then((res) => setStudent(res.data))
                .catch((err) => console.log(err))
        }
    }

    let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegno(e.target.value)
    }


    return (
        <div>
            <input type="text" onKeyDown={getData} onChange={handleChange} />
            <h5>1112104</h5>
            {student && <div>
                <h5>Student name : {student.studentname}</h5>
                <h5>Father name : {student.fathername}</h5>
                <RegisteredCourses/>
            </div>}
        </div>
    )
}
