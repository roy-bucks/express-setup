const express = require("express");
const router = express.Router();

const controller = require('./controller/main'); 


router.get("/user/login", controller.getLogin); 

/* - desciption
   - param: email, pass;
   - respond: true or false;
*/
router.post("/user/login", controller.login); 



module.exports = router; 
