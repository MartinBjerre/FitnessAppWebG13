var mongoose = require('mongoose');
var fitnessplan = mongoose.model('fitnessPlan');

module.exports.fitnessApp = function(req, res) {
    fitnessplan.create(
        {
            exercise: req.body.Exercise,
            description: req.body.Description,
            sets: req.body.Sets,
            repstime: req.body.Repstime
        },
        (err, location) =>
        {
            if (err)
            {
                res.render('error');
            }
            else
            {
                res.render('addfitness');
            }
        });
};

/*
res.render('fitnessApp'),
    {
        title: 'fitnessApp',
        fitnessApp: {
            exercise: 'Exercise',
            description: 'Discription',
            sets: 'Sets',
            repstime: 'number'
        }
    };
//Testing communication between javascript and pug (each in)*/
module.exports.fitness = function (req, res) {
    fitnessplan.find({}, {}, function (err, docs) {
        res.render('addfitness', {
            "addfitness": docs
        });
    });
};


