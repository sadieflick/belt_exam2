// Require the Express Module
var express = require('express');
// Connect to mongoose framework
require('./server/config/mongoose.js')
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require path
var path = require('path');
// Create an Express App
var app = express();
// Read routes

// Use dist for Angular
app.use(express.static( __dirname + '/public/dist/public' ));
// Setting our Static Folder Directory
// app.use(express.static(path.join(__dirname, './static')));
// Integrate body-parser with our App
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const flash = require('express-flash');
app.use(flash());

// // Setting our Views Folder Directory
// app.set('views', path.join(__dirname, './views'));
// // Setting our View Engine set to EJS
// app.set('view engine', 'ejs');

require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});

 




// Retrieve all Tasks
// app.get('/tasks', function(req, res){
//     Task.find({}, function(err, tasks){
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//            res.json({message: "Error", error: err})
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Success", data: tasks})
//         }
//      })
// });

// // Create Task
// app.post('/tasks', function(req, res){

//     var task = new Task(req.body);

//     // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
//     task.save(function(err) {
//     // if there is an error console.log that something went wrong!
//         if(err) {
//             res.json({message: "Error", error: err})
//         } else { // else console.log that we did well and then redirect to the root route
//             res.json({message: "Success"})
//         }
//     });
// });

// // Delete Task by ID
// app.delete('/tasks/:task_id', function(req, res) {
//     var task_id = req.params.task_id;
//     console.log(task_id);

//     Task.remove({_id: task_id}, function(err) {

//         if(err) {
//             res.json({message: "Error", error: err})

//         } else { // else console.log that we did well and then redirect to the root route
//             res.json({message: "Success"})
//         }
//     });
// });


// // Retrieve Task by id
// app.get('/tasks/:task_id', function(req, res){
//     Task.find({_id: req.params.task_id}, function(err, tasks){
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//            res.json({message: "Error", error: err})
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Success", data: tasks})
//         }
//      })
// });


// // Update Task by id
// app.put('/tasks/:task_id', function(req, res) {
//     var task_id = req.params.task_id;
//     console.log(task_id);

//     Task.update({_id: task_id}, {$set: req.body}, function(err) {

//         if(err) {
//             res.json({message: "Error", error: err})

//         } else { // else console.log that we did well and then redirect to the root route
//             res.json({message: "Success"})
//         }
//     });
// });