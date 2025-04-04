const express = require("express");
const Employee = require('../models/Employee');
const upload = require('../middleware/upload');
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/add',authMiddleware,upload.single("profileImage"), async (req,res)=>{
    try{
        const {firstName,lastName,position,contact} = req.body;
        const profileImage = req.file ? req.file.path : null;
        const employee = new Employee({firstName,lastName,position,contact,profileImage});
        await employee.save();
        res.status(201).json({success:true,employee});
    }
    catch(err){
        console.log('Error in adding employee:',err);
        res.status(500).json({messsage:err.message});
    }
});

router.get('/',async (req,res)=>{
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch(err){
        res.status(500).json({message:err});
    }
});

router.get('/:id', async (req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch(err){
        res.status(500).json({message:err});
    }
});

router.put('/:id', upload.single("profileImage"),async (req,res)=>{
    try{
        const {firstName,lastName,position,contact} = req.body;
        const profileImage = req.file?.path;
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,
            {firstName,lastName,position,contact,profileImage}, {new:true});
        res.status(200).json(updatedEmployee);
    }
    catch(err){
        res.status(500).json({message:err});
    }
});

router.delete('/:id',async (req,res)=>{
    try{
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Employee Deleted"});
    }
    catch(err){
        console.log('inside delete');
        res.status(500).json({message:err});
    }
});

module.exports = router;