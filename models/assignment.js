var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
	assignmentNumber: Number,
	studentName: { type: String, required: true },
	score: Number,
	dateCompleted: { type: Date, required: true }
});

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
