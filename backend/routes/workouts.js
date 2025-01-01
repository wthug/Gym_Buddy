const express =require('express');
const router = express.Router();

const {createWorkout , getWorkout , getWorkouts,updateWorkout, deleteWokout}= require('../controllers/workoutControllers')
const {userLogin,userSignup} = require('../controllers/userController')

router.get( '/',getWorkouts)
router.get( '/:id',getWorkout)

router.post( '/signup',userSignup)
router.post( '/login' ,userLogin)

router.post( '/',createWorkout)

router.delete( '/:id',deleteWokout)
router.patch( '/:id',updateWorkout)

module.exports=router

