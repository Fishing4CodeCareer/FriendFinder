//server listens for what to require and make the call for us.
var express = require("express");
var app = express(); 
var PORT = process.env.PORT || 5500;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts server for me.
app.listen(PORT, function() {console.log("App listening on PORT: " + PORT);
});