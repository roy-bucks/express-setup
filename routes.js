const express = require("express");
const router = express.Router();

const controller = require('./controller/main'); 

router.get("/index", controller.index);
router.get("/name",controller.name); 


/* This route will route into login page 
*/
router.get("/login", controller.login); 

/* - this routes check the user credentials for login 
   - param (username, password) ;
   - response (boolean true=user access false= user denied)
*/

router.post("/login-check", controller.userLogin); 



module.exports = router; 
