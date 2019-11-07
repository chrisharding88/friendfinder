var friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    })

    app.post("/api/friends", function(req,res){
        let userScore = req.body.scores
        const arrScores = [];
        let friendMatch = 0;

        for (var a = 0; a < friendsData.length; a++){
            var difference = 0;
            for(var b = 0; b < userScore.length; b++){
                difference += (Math.abs(parseInt(friendsData[a].scores[b])-parseInt(userScore[b])));
            }
            arrScores.push(difference);
        }

        for(var a = 0; arrScores.length; a++){
            if (arrScores[a] <= arrScores[friendMatch]) {
                friendMatch = i;
            }      
        
        }


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