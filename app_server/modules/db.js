var mongoose = require('mongoose');
var gracefulShutdown; 
var url = 'mongodb://localhost:27017/myproject'; 

//Opretter Connection
mongoose.connect(url);

//Monitor connection
mongoose.connection.on('connected', function (){
    console.log('Mongoose connected to' + url);
});
mongoose.connection.on('error', function () {
    console.log('Mongoose connected error' + url);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

//For Heroku app termination
// Der skal oprettes en forbindelse til den.

require('./addfitness');


/*dette funger ikke, og er blot udkast, skal fjernes.  
//Maby change name myproject to alexandermartinnannafitnessapp!
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected sucessfully to server");
    db.close();
});

var findDocuments = function (db, callback) {
    var collection = db.collection('documents');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
} */