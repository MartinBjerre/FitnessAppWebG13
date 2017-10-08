const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

module.exports.CreateWorkout = function (req,res) {
  Workout.create({
      name: req.body.WName,
      description: req.body.WDescription },
      (err, work) => {
        res.redirect('/workout');
      });
};

module.exports.ShowAll = function (req,res) {
    Workout.find({})
        .exec((err, work) => {
            res.render('workout', {title: 'Workout', work: work});
        });
};


module.exports.remove= function(req, res){
    Workout.findByIdAndRemove(
        req.params.id,
        (err, workout) => {
            res.redirect('/workout');
        });
};
