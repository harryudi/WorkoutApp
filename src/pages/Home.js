import { useEffect, useState } from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    const [refresh, setRefresh] = useState(true);
    // const [delfresh, setDelfresh] = useState(true);


    useEffect(()=> {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
                setRefresh(false); // Reset the flag after fetching
            }
        } 

        if (refresh ) {
            fetchWorkouts()
        }

    }, [refresh])

  // Update the workouts list with the new workout
    const addWorkoutToList = (newWorkout) => {
        setWorkouts((prevWorkouts)=>[...prevWorkouts, newWorkout]);
        // Set the flag to trigger a new fetch
        setRefresh(true);
    };
    //Remove workout from list
    const removeWorkoutfromlist = (workoutId) => {
        setWorkouts((prevWorkouts) => {prevWorkouts.filter((workout)=>workout._id !==workoutId)})
        setRefresh(true);
    }
    

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=> (
                    <WorkoutDetails key={workout._id} 
                    workout={workout}
                    onDelete={removeWorkoutfromlist}
                    ></WorkoutDetails>
                ))}
            </div>
            <WorkoutForm  onWorkoutAdded={addWorkoutToList}/>
        </div>
    )
}

export default Home