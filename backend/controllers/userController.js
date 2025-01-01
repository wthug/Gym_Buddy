const mongoose = require('mongoose')
const User = require('../model/userModel')

const userSignup = async(req,res) => {
    
    res.status(200).json({success:true})
}
const userLogin = async(req,res) => {
    res.status(200).json({success:true})
}

module.exports = {
    userLogin,
    userSignup
}