var friends = require("../data/friends.js");
var express = require("express");
var apirouter = express.Router();
var path = require("path");
var bodyParser = require("body-parser");

apirouter.get("/api/friends", function(req,res) {
    res.json(friends);
})

apirouter.post("/api/friends", function(req,res) {
    console.log("post");
    var newFriend = req.body;
    console.log(newFriend);

    var newScore = function(array) {
        var newScore = [];
        for (var i = 0; i < array.length; i++) {
            newScore.push(parseInt(array[i]));
        } return newScore;
    }

    var totalDiff = function(arrayA, arrayB){
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

    var newFriendResults = newScore(newFriend['score[]']);
    var currentResults = [];
    var differences = [];

    for(var i=0; i < friends.length; i++) {
        currentResults.push(newScore(friends[i]['scores[]']));
    }

    for(var i=0; i < currentResults.length; i++) {
        differences.push(totalDiff(newFriendResults, currentResults[i]));
    }

    var worseFriend = minimumDiff(differences);
    var perfectFriend = friends[worseFriend];
    console.log(perfectFriend);

    friends.push(newFriend);
    res.json(perfectFriend);
})

module.exports = apirouter;