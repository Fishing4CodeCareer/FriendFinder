var friendsfillData = require("../data/friendsfillData");
var friendsshowData = require("../data/friendsshowData");
//API take the request from the form fill data and the friends form.
// The data is then pulled back down from the server to post the form filled results.
module.exports = function(app) {
    app.get("/api/friendsfill", function(req, res){

        res.json(friendsfillData);
    });
}
    app.post("/api/friendsshow", function(req, res){
        res.json(friendsShowData);
        });

        app.post("/api/friendsfill", function(req, res) {
            if (friendsfillData.length <5) {
            friendsFillData.push(req.body);
            res.json(true);
            }
            else {
                friendsShowData.push(req.body);
                res.json(false);
            }
        });
        // Below is api call to clear form data.
        app.post("/api/clear", function(req,res) {
            friendsFillData.length = 0;
            friendsShowData.length = 0;
            res.json({ ok: true });
        });
