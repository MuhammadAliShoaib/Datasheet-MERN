import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'


type course = {
    courseid: number,
    code: string,
    title: string,
    crhr: number,
    semester: number
}

type registered = {
    courseid: number,
    regno: string,
    gradeid: number
}

type Props = {
    regno: string
}




export default function RegisteredCourses({ regno }: Props) {
    const [semesters, setSemesters] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [registered, setRegistered] = useState<registered[]>([]);
    const [flag, setFlag] = useState(false);


    useEffect(() => {
        axios.get("/api/courses/semester")
            .then((res) => setSemesters(res.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`/api/registration/${regno}`)
            .then((res) => setRegistered(res.data))
            .catch((err) => console.log(err))
    }, [flag])

    let handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        axios.get(`/api/courses/semester/${e.target.value}`)
            .then((res) => setCourses(res.data))
            .catch((err) => console.log(err))
    }

    let handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelected([...selected, value]);
        } else {
            setSelected(selected.filter((x) => x != value))
        }
    }

    let handleRegister = () => {
        axios.post("/api/registration/register", { ids: selected, regno: regno })
            .then((res) => setFlag(!flag))
            .catch((err) => console.log(err))
    }


    let checkbox = (id: number) => {
        const check = registered.filter((x: registered) => x.courseid === id);
        if (check.length === 0) {
            return (<input type="checkbox" value={id} onChange={handleCheckbox} />)
        } else {
            return ("")
        }
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

            <table style={{ marginTop: '10px' }}>
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
                    {courses?.map((x: course) => {
                        return (
                            <tr key={x.code}>
                                <td>{checkbox(x.courseid)}</td>
                                {/* <td><input type="checkbox" value={x.courseid} onChange={handleCheckbox} /></td> */}
                                <td>{x.code}</td>
                                <td>{x.title}</td>
                                <td>{x.crhr}</td>
                                <td>{x.semester}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={handleRegister}>Register</button>
            <pre>{JSON.stringify(registered, null, 4)}</pre>
        </div>
    )
}
