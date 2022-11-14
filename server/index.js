const express = require('express');
const http = require("http");
var cors = require('cors');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Attendance = require("./models/Attendance");

const app = express();

const server = http.createServer(app);
const cors_white_list = [ "http://localhost:3000/", "http://localhost:3000"];

app.use(express.json());
app.use(bodyParser.json())
app.use(cors({
  origin:cors_white_list,
  credentials:false,
}))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

mongoose.connect('mongodb+srv://pawan:5z53bhmGB3gYTzb@cluster0-okmid.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology: true }, ()=>{
    console.log('Mongodb Connected');
});

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.post("/mark-attendance", (req,res)=>{
    console.log(req.body);
    const students = req.body.students;

    const newRecord = new Attendance({
        students: students,
	});

	newRecord.save().then(()=>{
        res.send({message: "Record Saved"});
    }).catch(e => { 
        res.send({message: "Error!", error: e});
    });
});

app.get('/show-attendance-records', (req,res)=>{

    Attendance.find({}).then(data => {
        res.render('AttendanceRecords', {
            data:data,
        });
    }).catch(error => {
        res.send(`Error : ${error.message}`);
    });
});

server.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});