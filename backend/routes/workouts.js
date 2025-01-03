const express =require('express');
const router = express.Router();

const {createWorkout , getWorkout , getWorkouts,updateWorkout, deleteWokout}= require('../controllers/workoutControllers')

router.post( '/',getWorkouts)
router.get( '/:id',getWorkout)


router.post( '/add',createWorkout)

router.delete( '/:id',deleteWokout)
router.patch( '/:id',updateWorkout)

module.exports=router

