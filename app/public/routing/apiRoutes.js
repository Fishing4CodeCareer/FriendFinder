var friendsData = require("../data/friendsData");
var friendsData = require("../data/friendsData");
//API take the request from the form fill data and the friends form.
// The data is then pulled back down from the server to post the form filled results.
module.exports = function(app) {
    app.get("/api/survey", function(req, res){

        res.json(friendsData);
    });
}
    app.post("/api/friends", function(req, res){
        res.json(friendsData);
        });

        app.post("/api/friends", function(req, res) {
            if (friendsData.length <10) {
            friendsData.push(req.body);
            res.json(true);
            }
            else {
                friendsData.push(req.body);
                res.json(false);
            }
        });
        // Below is api call to clear form data.
        app.post("/api/clear", function(req,res) {
            reserve.length = 0;
            friendsData.length = 0;
            res.json({ ok: true });
        });
