const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema({
    "studentFirstName":String,
    "collegeName": String,
    "location": String 
    

},
{
    collection: "studentDetailsCollection",
})


const studentDetailsModel = mongoose.model("studentDetailsModel", studentDetailsSchema);
module.exports = studentDetailsModel;
