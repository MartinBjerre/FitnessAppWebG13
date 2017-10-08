const express = require('express');
const router = express.Router();
const workout = require('../controllers/workout');
const exercise = require('../controllers/exercise');


router.post('/workout/create/', workout.CreateWorkout);
router.get('/workout/:workoutId/exercise',exercise.GetByWorkoutId);
router.post('/workout/:workoutId/exercise/create',exercise.CreateExercise)

module.exports = router;
