
// Setting up Dependencies
var express = require ("express");
var path = require ("path");
var nodemon = require("nodemon")

// Setting up express
var app = express();
var PORT = process.env.PORT || 8080;

// Express data capabilities
app.use(express.static('app/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// PORT Listener
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
})



