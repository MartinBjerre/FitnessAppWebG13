const mongoose = require('mongoose');
var SchemaWO =  new mongoose.Schema;

const workoutSH = SchemaWO({
   name: {
       type: String
   },
   description:{
       type: String
   },
    exercise: {
       type: SchemaWO.Types.ObjectId,
       ref: 'exercise'
    }
});

const Workout = mongoose.model('Workout', workoutSH);