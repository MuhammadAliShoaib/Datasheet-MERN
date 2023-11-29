import {db} from "./models/index.js"

// db.Student.find().then(students=>{
//     console.log(students);
// })

// const reg = {
//     "_id": "653e2f1d0049dc92631d4f30",
//     "courseid": 21,
//     "regno": "1112101",
//     "gradeid": 2,
//     "__v": 0
// }

// Promise.all([
//     db.Registration.aggregate([
//         { $match: { $expr: { $eq: ["$_id", { $toObjectId: reg._id }] } } },
//         { $lookup: { from: "courses", localField: "courseid", foreignField: "courseid", as: "Course" } },
//         { $unwind: "$Course" },
//         { $lookup: { from: "grades", localField: "gradeid", foreignField: "gradeid", as: "Grade" } },
//         { $unwind: { path: "$Grade", preserveNullAndEmptyArrays: true } }
//     ]),
//     db.Grade.find().sort("gradeid"),
//     db.Registration.aggregate([
//         { $match: { regno: reg.regno } },
//         { $lookup: { from: "courses", localField: "courseid", foreignField: "courseid", as: "Course" } },
//         { $unwind: "$Course" },
//         { $lookup: { from: "grades", localField: "gradeid", foreignField: "gradeid", as: "Grade" } },
//         { $unwind: { path: "$Grade", preserveNullAndEmptyArrays: true } },
//         {
//             $group: {
//                 _id: null,
//                 tcr: { $sum: "$Course.crhr" },
//                 mcr: { $sum: { $multiply: ["$Course.crhr", "$Grade.gpa"] } }
//             }
//         },
//         {
//             $project: {
//                 _id: 0,
//                 CGPA: { $divide: ["$mcr", "$tcr"] }
//             }
//         }
//     ])
// ]).then(([res, grade, gpa]) => console.log(JSON.stringify([res, grade, gpa], null, 4)));


// db.Registration.aggregate([
//     { $match: { regno: "1112101" } },
//     { $lookup: { from: "courses", localField: "courseid", foreignField: "courseid", as: "Course" } },
//     { $unwind: "$Course" },
//     { $lookup: { from: "grades", localField: "gradeid", foreignField: "gradeid", as: "Grade" } },
//     { $unwind: { path: "$Grade", preserveNullAndEmptyArrays: true } },
//     {
//         $group: {
//             _id: null,
//             tcr: { $sum: "$Course.crhr" },
//             mcr: { $sum: { $multiply: ["$Course.crhr", "$Grade.gpa"] } }
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             CGPA: { $divide: ["$mcr", "$tcr"] }
//         }
//     }
// ]).then((res) => console.log(JSON.stringify(res, null, 4)));


// db.Course.find().then(course=>console.log(course))

