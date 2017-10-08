const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const Exercise = mongoose.model('Exercise');


module.exports.CreateExercise = function(req, res) {
    Exercise.create(
        {
                exercise: req.body.Exercise,
                description: req.body.Description,
                sets: req.body.Sets,
                repstime: req.body.Repstime
        },
        (err, exer) => {
            Workout.findById(
                req.params.workoutId,
                {$push: {exercise: exer}},
                {new: true},
                (err, workout) => {
                    if (err) {
                        res.render('error');
                    }
                    else {
                        res.render('Workout/' + req.params.workoutId + '/exercise');
                    }
                });
        });
};

module.exports.GetByWorkoutId = function(req, res) {
    Workout.findById(req.params.workoutId)
    .populate('exercises')
        .exec((err, workout)=> {
        res.render('exercise', { title: "Exercise" , exercise: Exercise });
        });
};




