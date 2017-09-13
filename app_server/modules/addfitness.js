var mongoose = require('mongoose'); 

var addToSchema = new mongoose.Schema({
    exercise: String,
    description: String,
    sets: Number,
    repstime: Number
});

//module.exports = mongoose.model('FitnessPlan', addToSchema);

