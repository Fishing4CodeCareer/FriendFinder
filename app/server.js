
///server listens for what to require and make the call for us.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Starts server for me.
app.listen(PORT, function() {console.log("App listening on PORT: " + PORT);
});