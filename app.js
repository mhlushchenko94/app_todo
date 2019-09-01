var express = require('express');
var todoContorller = require('./controllers/todoControllers');

var app = express();


// set up template engine
app.set('view engine', 'ejs');


//static files
app.use(express.static('./public'))


// fire controllers
todoContorller(app);


// liste to port
app.listen(3000);
console.log('You are listening to port 3000');