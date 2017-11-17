var friends = require('../data/friends.js');


module.exports = function (app) {

    app.get("/api/all", function (req, res) {
        res.json(friends);
    });

    app.post("/api/all", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
        // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();


        friends.push(newFriend);
    });


};