var mongoose = require('mongoose');
var fitnessplan = mongoose.model('fitnessplan');

module.exports.fitnessApp = function(req, res) {
    fitnessplan.create(
        {
                exercise: req.body.Exercise,
                description: req.body.Description,
                sets: req.body.Sets,
                repstime: req.body.Repstime
        },
        (err, fitnessplan) =>
        {
            if (err)
            {
                res.render('error');
            }
            else
            {
                res.render('addfitness', { title: "fitnessplan", fitnessplan: fitnessplan });
            }
        });
};

module.exports.Getfitness = function(req, res) {
    fitnessplan.find({},
        (err, fitnessplan) => {
            if (err) {
                res.render('error');
            }
            else{
                res.render('addfitness', { title: "fitnessplan" , fitnessplan: fitnessplan });
            }
        }
    );
}




