var path = require("path");
// This routing is for survey and home.html to get the paths made where.
module.exports = function(app) {
    app.get("/friendFill", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/survey.html"));
        });
           app.get("*", function(req, res) {
                 res.sendFile(path.join(_dirname,  "../public/home.html"));
             });
};