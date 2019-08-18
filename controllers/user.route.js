const express = require("express");
const router = express.Router();
const UserModel = require("./../models/user.model")


router.get('/', function(req, res,next){
    res.send("Welcome to Mapping system.");
});

router.post('/login', function(req, res, next){
    UserModel.findOne({ username : req.body.username})
        .exec(function(err, user){
           if(err){
               return next(err);
           } 
           if(user){
                if(user.password = req.body.password){
                    res.json(user);
                }else{
                    res.json({
                        msg: "invalid Password"
                    })
                }             
           }else{
            res.json("Invalid credentials.");
        }  
        })
})

router.post('/register', function(req, res, next){
    let newUser = new UserModel({});
    newUser.name = req.body.fullName;
    newUser.username = req.body.username;
    newUser.phone_no = req.body.contact;
    newUser.email = req.body.email;

    newUser.save()
        .then(function(data){
            res.status(200).json(data)
        })
        .catch(function(err){
            next(err);
        });
});


module.exports = router;