var friendFillData = require("../data/friendFillData");
var friendShowData = require("../data/friendShowData");
//API take the request from the form fill data and the friends form.
// The data is then pulled back down from the server to post the form filled results.
module.exports = function(app) {
    app.get("/api/friendFill", function(req, res){

        res.json(friendFillData);
    });
}
    app.post("/api/friendShow", function(req, res){
        res.json(friendShowData);
        });

        app.post("/api/friendFill", function(req, res) {
            if (friendFillData.length <10) {
            friendFillData.push(req.body);
            res.json(true);
            }
            else {
                friendShowData.push(req.body);
                res.json(false);
            }
        });
        // Below is api call to clear form data.
        app.post("/api/clear", function(req,res) {
            friendFillData.length = 0;
            friendShowData.length = 0;
            res.json({ ok: true });
        });
