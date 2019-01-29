var friends = require("../data/friends");
var express = require("express");
var bodyParser = require("body-parser");
var apirouter = express.Router();

apirouter.get("/api/friends", function(req,res) {
    res.json(friends);
})

apirouter.post("/api/friends", function(req,res) {
    console.log("post");
    var newFriend = req.body;
    console.log(newFriend);
    var results = function(array) {
        var results = [];
        for (var i = 0; i < array.length; i++) {
            results.push(parseInt(array[i]));
        } return results;
    }

    var difference = function(arrayA, arrayB){
        delta = 0;
        for(var i=0; i < arrayA.length; i++) {
            delta += Math.abs(arrayA[i] - arrayB[i]);
        }
        return delta;
    }

    function minimumDiff(array) {
        if (array.length === 0) {
            return -1;
        }

        var min = array[0];
        var minIndex = 0;

        for (var i = 1; i < array.length; i++) {
            if (array[i] < min) {
                minIndex = i;
                min = array[i];
            }
        }

        return minIndex;
    }

    var newFriendResults = results(newFriend['score[]']);
    var currentResults = [];
    var differences = [];

    for(var i=0; i < friends.length; i++) {
        currentResults.push(results(friends[i]['scores[]']));
    }

    var worseFriend = minimumDiff(differences);
    var perfectFriend = friends[worseFriend];
    console.log(perfectFriend);

    friends.push(newFriend);
    res.json(perfectFriend);
})

module.exports = apirouter;