
module.exports.fitnessAp = function (req, res)
{
    res.render('FitnessApp'), {
        title: 'FitnessApp',
        fitnessApp: {
            exercise: 'Exercise',
            description: 'Discription',
            sets: 'Sets',
            repstime: 'number'
        }
    };
}
//Testing communication between javascript and pug (each in)
module.exports.fitness = function (req, res) {
    fitnessPlan.find({}, {}, function (err, docs) {
        res.render('addfitness', {
            "planlist": docs
        });
    });
};