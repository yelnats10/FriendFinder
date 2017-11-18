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
            name: "test",
            photo: "link",
            diff: 100
        }
        
       for(var i = 0; i < friends.length; i++){
           console.log(friends[i].name);
           var dif = 0
           for(var j = 0; j < friends[i].score.length; j++){
               
           dif = dif + Math.abs(parseInt(newFriend.score[j]) - friends[i].score[j]);


           




           }
           console.log(dif);


       }


       friends.push(newFriend);
       res.json(match);
    });


};