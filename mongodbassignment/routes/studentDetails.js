// Import library
const express = require("express");
const studentDetailsModel = require("../models/studentDetailsModels");
// create instance of express
const router = express.Router();


//POST API

router.post("/student/add", async function(req, res){
console.log("req.body", req.body);
try {
    const dataCreation = await  studentDetailsModel.create(req.body);
    console.log("dataCreation", dataCreation);
    res.send({"result": "Data added successfully"});

} catch(error){
    console.log("error occured", error);
}
});

//GET API

router.get("/getStudentDetails", async function(req, res){
    try{
        const getStudentDetails = await  studentDetailsModel.find({},{__v:0, _id:0 });
        console.log("data from database", getStudentDetails);
        res.send({reult: getStudentDetails});
    } catch(error){
        console.log("error occured", err);
    }
    
});

module.exports = router;