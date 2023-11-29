import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'


type course = {
    code: string,
    title: string,
    crhr: number,
    semester: number
}

export default function RegisteredCourses() {
    const [semesters, setSemesters] = useState([]);
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        axios.get("/api/courses/semester")
            .then((res) => setSemesters(res.data))
            .catch((err) => console.log(err))
    }, [])

    let handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        axios.get(`/api/courses/semester/${e.target.value}`)
            .then((res) => setCourses(res.data))
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <select onChange={handleSelect}>
                <option value="default" disabled>Select Semester</option>
                {semesters?.map((x: number) => {
                    return (
                        <option key={x} value={x}>{x}</option>
                    )
                })}
            </select>

            <table style={{marginTop:'10px'}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Code</th>
                        <th>Title</th>
                        <th>Crhr</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                <tbody>
                    {courses?.map((x:course)=>{
                        return(
                            <tr key={x.code}>
                                <td></td>
                                <td>{x.code}</td>
                                <td>{x.title}</td>
                                <td>{x.crhr}</td>
                                <td>{x.semester}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* {semesters && <pre>{JSON.stringify(semesters,null,4)}</pre>} */}
        </div>
    )
}
