var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var Assignment = require('../../models/assignment');

var router = express.Router();

router.get('/', function(request, response){
	response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/assignment', function(request, response){
	if(request.params.id) {
		Assignment.findById(request.params.id, function(err, assignment){
			if(err) {
				console.log(err);
			} else {
				response.send(assignment);
			}
		});
	} else {
		Assignment.find({}, function(err, assignments){
			if(err) {
				console.log(err);
				response.sendStatus(500);
			} else {
				response.send(assignments);
			}
		});
	}
});

router.post('/assignment', function(request, response){
	console.log(request.body);
	var assignment = new Assignment(request.body);
	assignment.save(function(err){
		if(err) {
			console.log(err);
			response.sendStatus(500);
		} else {
			response.sendStatus(200);
		}
	});
});

module.exports = router;
