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

        var match = {
            name: "name to replace",
            photo: "link to replace",
            diff: 100
        };

        for (var i = 0; i < friends.length; i++) {

            var dif = 0;
            for (var j = 0; j < friends[i].score.length; j++) {

                dif = dif + Math.abs(parseInt(newFriend.score[j]) - friends[i].score[j]);

            }

            if (dif < match.diff) {
                match.diff = dif;
                match.name = friends[i].name;
                match.photo = friends[i].photo;

            }

        }

        friends.push(newFriend);
        res.json(match);
    });

};