const express = require('express');
const router = express.Router();
const workout = require('../controllers/workout');
const exercise = require('../controllers/exercise');

router.get('/workout', workout.ShowAll);
router.post('/workout/CreateWorkout', workout.CreateWorkout);
router.get('/workout/:workoutId/exercise',exercise.GetByWorkoutId);
router.post('/workout/:workoutId/exercise/CreateExercise',exercise.CreateExercise);

module.exports = router;
