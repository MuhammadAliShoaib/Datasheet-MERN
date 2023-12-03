import express from "express";
import {db} from "../models/index.js"
const router = express.Router();


router.get("/",async (req,res)=>{
    const result = await db.Registration.find();
    res.json(result)
})

router.post("/register",async (req,res)=>{
    // console.log(req.body)
    let {ids,regno} = req.body;
    let regs=[]

    for(let id of ids){
        regs.push(db.Registration({courseid:id,regno:regno,gradeid:null}))
    }

    const result = await db.Registration.insertMany(regs);
    res.json(result);
})

router.get("/:id",async(req,res)=>{
    const result = await db.Registration.find({regno:req.params.id});
    res.json(result)
})


export default router;