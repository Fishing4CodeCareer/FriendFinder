var path = require("path");
// This routing is for survey and home.html to get the paths made where.
module.exports = function(app) {
    app.get("/friends", function(req, res) {
        res.sendFile(path.join("../public/survey.html"));
        });
           app.get("*", function(req, res) {
                 res.sendFile(path.join("../public/home.html"));
             });
};