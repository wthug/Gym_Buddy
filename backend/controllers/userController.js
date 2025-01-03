const mongoose = require('mongoose')
const User = require('../model/userModel')
const express =require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.SEC 

router.post('/signup',[
    body('email','not a valid e-mail').isEmail(),
    body('password','password must be of minimum 5 characters').isLength({ min: 5})
],async(req,res)=>{
    const {name ,email , password} = req.body
    if(email=='' || name=='' || password=='') {
        res.status(400).json({error:"Fill out all the fields !!"});
        return;
    }
    const err=validationResult(req)
    
    if(!err.isEmpty()){
        return res.status(400).json({ error:err.array()[0].msg})
    }
    const salt = await bcrypt.genSalt(10);
    let Password = await bcrypt.hash(password,salt)

    
    try{
        const oldUser = await User.findOne({email})
        if(oldUser){
            return res.status(400).json({error:"already have an account with this email"})
        }
        const newUser=await User.create({name,email,Password})
        const data = {
            user:{
                id:newUser.id
            }
        }
        const authToken = jwt.sign(data,jwtSecret)

        res.status(200).json({success:true,authToken:authToken})
    } catch(err){
        res.status(400).json({err})
    }
})





 // logIn
router.post('/login',[
    body('email','not a valid e-mail').isEmail(),
    ],async(req,res)=>{
    const {email,password} = req.body;
    if(email=='' || password==''){
        return res.status(400).json({error:"Fill out all the fileds !!"})
    }
    const err=validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({ error:err.array()[0].msg})
    }
    try {
        const userData = await User.findOne({email})
        if(!userData){
            return res.status(400).json({error:'enter valid credentials'})
        }
        const comparePass = await bcrypt.compare(password,userData.Password);
        if(!comparePass){
            return res.status(400).json({error:'enter valid credentials'})
        }
        const data = {
            user:{
                id:userData.id
            }
        }
        const authToken = jwt.sign(data,jwtSecret)

        res.status(200).json({success:true,authToken:authToken})
    } catch (err) {
        res.status(400).json({ error:'not valid data' })
    }
    
})


module.exports=router