import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/workoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const {workouts,dispatch} = useWorkoutContext()
    // const [workouts,setWorkouts] = useState(null)
    let navigate=useNavigate()
    useEffect(()=>{
        const fetchWorkout = async()=>{
            const email=localStorage.getItem('authEmail');
            if(email==null){
                navigate('/sign')
                return
            }
            const getData = {email}
            const response = await fetch('/api/workouts',{
                method:'POST',
                body: JSON.stringify(getData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
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