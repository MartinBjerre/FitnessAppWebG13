var mongoose = require('mongoose'); 

var addToSchema = new mongoose.Schema({
    exercise: String,
    description: String,
    sets: Number,
    repstime: Number
});

var fitnessPlan = mongoose.model('FitnessPlan', addToSchema);

