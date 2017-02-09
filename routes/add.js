var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
  var newData = {};
  newData.name = req.query.name;
  newData.description = req.query.description;
  newData.imageURL = "http://lorempixel.com/400/400/people";
  data.friends.push(newData);
  res.render('index', data);
 }
