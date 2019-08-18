const mongoose = require("mongoose");
const schema = mongoose.Schema;


const locationSchema = new schema({
    longitude : {
        type : Number,
        required : true
    },
    lattitude : {
        type : Number,
        required: true;
    }
});


const locationModel = mongoose.model("location", locationSchema);
module.exports = locationModel;