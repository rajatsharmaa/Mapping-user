const router = require('express').Router();
const userRoute = require("./user.route");
const locationRoute = require("./location.route");

module.exports = function(){
    router.use("/user", userRoute);
    router.use("/location", locationRoute);

    return router;

}