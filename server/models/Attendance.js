const mongoose = require("mongoose")

const schema = mongoose.Schema({
	date: { type : Date, default: Date.now },
    students : [{ type:String, required:true }],
});

module.exports = mongoose.model("Attendance_BTP", schema)