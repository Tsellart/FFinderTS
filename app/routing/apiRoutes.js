var friends = require("../data/friends.js");
var path = require("path");

module.exports = function app {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        var userResponses = newFriend.scores;

        var matchName = '';
        var totalDiff = 1000;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j= 0; j < userResponses.length; i++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = friends[i].name;
            }
        }

        friends.push(newFriend);

        res.josn({status: 'OK', matchName: matchName});

    });
};

