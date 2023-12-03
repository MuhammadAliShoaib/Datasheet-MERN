import express from 'express';
import courses from "./routes/courses.js";
import student from "./routes/student.js";
import regisration from "./routes/registration.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/courses",courses);
app.use("/student",student);
app.use("/registration",regisration);

app.get("/msg", (req, res) => {
    res.json({ msg: "Hello world" })
})

app.listen(PORT, () => console.log(`Server is listening on PORT http://localhost:${PORT}`))