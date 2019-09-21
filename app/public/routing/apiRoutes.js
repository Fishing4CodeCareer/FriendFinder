var reserveData = require("../data/reserveData");
var newfriendData = require("../data/friendShowData");
//API take the request from the form fill data and the friends form.
// The data is then pulled back down from the server to post the form filled results.
module.exports = function(app) {
    app.get("/api/reserve", function(req, res){

        res.json(friendsData);
    });
}
    app.post("/api/reserve", function(req, res){
        res.json(newfriendData);
        });

        app.post("/api/reserve", function(req, res) {
            if (newfriendData.length <10) {
            newfriendData.push(req.body);
            res.json(true);
            }
            else {
                newfriendData.push(req.body);
                res.json(false);
            }
        });
        // Below is api call to clear form data.
        app.post("/api/clear", function(req,res) {
            reserve.length = 0;
            newfriendData.length = 0;
            res.json({ ok: true });
        });
