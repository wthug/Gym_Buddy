import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext()
    const [title,setTitle]=useState('');
    const [load,setLoad]=useState('');
    const [reps,setReps]=useState('');
    const [error,setError]=useState(null);

    const updateWorkout = async(e)=>{
        e.preventDefault()
        const email = localStorage.getItem('authEmail')
        const workout= {email,title,load,reps}
        const response = await fetch('/api/workouts/add',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        }) 
        const json =await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("new workout added successfully",json)
            setLoad('')
            setTitle('')
            setReps('')
            dispatch({type: 'CREATE_WORKOUT' , payload:json})
        }
    }
    return <>
        <form className="create" onSubmit={updateWorkout}>
            <h3>Add New Workout</h3>

            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            <label>Reps</label>
            <input type="number" value={reps} onChange={(e)=>setReps(e.target.value)}/>

            <label>Load (in Kg)</label>
            <input type="number" value={load} onChange={(e)=>setLoad(e.target.value)}/>

            <button >add Workout</button>

            {error && <div className="error">{error}</div>}
        </form>
    </>
}

export default WorkoutForm