import { act, createContext, useReducer } from "react";

export const WorkoutContext = createContext()
export const workoutReducer = (state,action) => {
    switch (action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            const newWorkouts=state.workouts.filter((workout)=>{
                return workout._id!=action.payload._id
            })
            return {
                workouts: newWorkouts
            }
        default:
            return state
    }
}
export const WorkoutContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(workoutReducer,{
        workouts:null
    })
    return (
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}