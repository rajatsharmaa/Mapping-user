const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    username : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },

    mobile_no : {
        type : Number,
        unique : true,
        required : true
    },

    email : {
        type : String,
        unique : true
    }
});

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel;