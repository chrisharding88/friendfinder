// Dependencies
var friendsData = require("../data/friends");

module.exports = function(app){

    // Grab the JSON of friends data
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    })

    // POST the API
    app.post("/api/friends", function(req,res){

        // Stores the variables
        let userScore = req.body.scores
        const arrScores = [];
        let friendMatch = 0;

        for (var a = 0; a < friendsData.length; a++){
            var difference = 0;
            for(var b = 0; b < userScore.length; b++){
                // Compares the difference between the user score and the friends. 
                difference += Math.abs(parseInt(friendsData[a].scores[b])-parseInt(userScore[b]));
            }
            // User scores get pushed into the array
            arrScores.push(difference);
        }

        for(var i = 0; arrScores.length; i++){
            if (arrScores[i] <= arrScores[friendMatch]) {
                friendMatch = i;
            }      
        
        }

        // Returns for the best match
        let foundLover = friendsData[friendMatch];
        res.json(foundLover);

        console.log(req.body);
        friendsData.push(req.body);


    });

    app.post("/api/clear", function(req, res){
        friendsData.length = [];

        res.json({ok: true});
    })

}