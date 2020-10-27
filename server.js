const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("<h1>Welcome to BMI Calculator.<br> It is just a simple BMI Calculator</h1>");
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = weight/ (height*height);
    res.send("Your BMI is " + bmi);

});

app.listen("3000", function(){
    console.log("The server has started!!!");
});