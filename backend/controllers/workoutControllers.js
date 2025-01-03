const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')


const getWorkouts = async(req,res) =>{
    const email=req.body.email
    const workouts= await Workout.find({email:email}).sort({createdAt:-1})
    res.status(200).json(workouts)
}
const getWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Id not valid'})
    }

    const workout = await Workout.findById(id)
    
    if(!workout){
        return res.status(404).json({error:'No such Workout'})
    }
    res.status(200).json(workout)
}
const createWorkout = async(req,res) =>{
    const {email,title ,load , reps} = req.body

    try{
        const workout=await Workout.create({email,title,load,reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error:'Not enough data'})
    }
}


const deleteWokout = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Id not valid'})
    }
    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:'No such Workout'})
    }
    res.status(200).json(workout)
}


const updateWorkout = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Id not valid'})
    }
    const workout= await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error:'No such Workout'})
    }
    res.status(200).json(workout)

}

module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWokout,
    updateWorkout
}
