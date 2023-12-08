import { useState } from "react";


const WorkoutDetails = ({workout, onDelete }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch('/api/workouts/' + workout._id,{

            method: 'DELETE', });
            if (response.ok) {
                onDelete(workout._id);
                console.log('Workout deleted successfully');
            } else {
                console.error('error deleting workout:', response.statusText)
            }} catch(error) {
                console.error('error deleting workout:', error)
            }
    };

    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleDelete}>Delete</span>
        </div>
     );
    
}
 
export default WorkoutDetails;