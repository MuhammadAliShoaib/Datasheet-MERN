import express from "express";
import { db } from "../models/index.js"
const router = express.Router();


router.get("/", async (req, res) => {
    const result = await db.Course.find().sort({ courseid: 1 });
    res.json(result)
})

router.get("/semester", async (req, res) => {
    const result = await db.Course.distinct("semester")
    res.json(result)
})

router.get("/semester/:semester", async (req, res) => {
    const result = await db.Course.find({semester:req.params.semester})
    res.json(result)
})


export default router;