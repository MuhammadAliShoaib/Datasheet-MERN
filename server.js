import express from 'express';
import courses from "./routes/courses.js";
import student from "./routes/student.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/courses",courses);
app.use("/student",student);

app.get("/msg", (req, res) => {
    res.json({ msg: "Hello world" })
})

app.listen(PORT, () => console.log(`Server is listening on PORT http://localhost:${PORT}`))