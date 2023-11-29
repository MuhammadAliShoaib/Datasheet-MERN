import express from "express";
import { db } from "../models/index.js";
const router = express.Router();

router.get("/",async (req,res)=>{
    const result = await db.Student.find();
    res.json(result);
})

router.get("/:id",async (req,res)=>{
    // console.log(req.params)
    const result = await db.Student.findOne({regno:req.params.id});
    res.json(result);
})

export default router;

