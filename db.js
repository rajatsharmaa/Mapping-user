const mongoose = require('mongoose');
const { conxnUrl, dbName} = require('./shared/cofig');

// console.log(`${conxnUrl}/${dbName}`)

mongoose.connect(`${conxnUrl}/${dbName}`,{useNewUrlParser: true}, function(err, done){
    if(err){
        console.log("db connection failed" , err);
    }else{
        console.log("DB connected successfullly.")
    }
});