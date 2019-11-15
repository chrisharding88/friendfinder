// Dependencies
var friendsData = require("../data/friends");

module.exports = function(app) {
  // Grab the JSON of friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // POST the API
  app.post("/api/friends", function(req, res) {
    // Stores the variables
    // let newLoverScore = req.body.scores
    // let loverMatch = 0;
    // const compareArr = []
    var userData = req.body;
    console.log(userData);
    res.json(userData);

    /*
        for (var a = 0; a < friendsData.length; a++){
            var difference = 0;

            for(var b = 0; b < newLoverScore.length; b++){
                // Compares the difference between the user score and the friends. 
                difference += Math.abs(parseInt(friendsData[a].scores[b])-parseInt(newLoverScore[b]));
            }
            // User scores get pushed into the array
            compareArr.push(difference);
        }

        for(var i = 0; compareArr.length; i++){
            if (compareArr[i] <= compareArr[loverMatch]) {
                loverMatch = i;
            }      
        
        }

        // Returns for the best match
        let foundLover = friendsData[loverMatch];
        var newLover = req.body;

        res.json(foundLover);

        console.log(newLover);
        friendsData.push(newLover);

        */
  });

  app.post("/api/clear", function(req, res) {
    friendsData.length = [];

    res.json({ ok: true });
  });
};
