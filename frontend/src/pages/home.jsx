import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/workoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import Navbar from "../components/Navbar"

const Home = () => {
    const {workouts,dispatch} = useWorkoutContext()
    // const [workouts,setWorkouts] = useState(null)
    useEffect(()=>{
        const fetchWorkout = async()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS',payload:json})
            }
        }
        fetchWorkout()
    }, [dispatch ])

    return (<>
        <Navbar/>
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails
                        key={workout._id}
                        workout={workout}
                    />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    </>)
}

export default Home