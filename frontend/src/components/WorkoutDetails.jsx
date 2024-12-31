import { useContext } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"


const WorkoutDetails = (props)=>{
    const {dispatch} = useWorkoutContext()
    const DeleteWorkout = async()=>{
        const response = await fetch('/api/workouts/'+props.workout._id,{
            method :"DELETE",
        })
        const json = await response.json()
        if(!response.ok){
            console.log(json.error)
        }
        if(response.ok){
            console.log("deleted successfully",json)
            dispatch({type:'DELETE_WORKOUT' , payload:json})
        }
    }
    return <>
        <div className="workoutDetails">
            <h1>{props.workout.title}</h1>
            <h4><bold>reps</bold>: {props.workout.reps}</h4>
            <h4><bold>load</bold>: {props.workout.load} Kg</h4>
            <button onClick={DeleteWorkout}>delete</button>
        </div>
    </>
}
export default WorkoutDetails
