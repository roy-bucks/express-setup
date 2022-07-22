
const data = {

    getLogin: (req, res)=>{
        res.render("login.ejs") 
    }, 
    login: (req, res)=>{


        //1. validate the dtaa 
        //2. check the databsse
        console.log("server recieve the data");
        console.log(req.body.email); 
        console.log(req.body.pass);


        if(req.body.email == "test" && req.body.pass == "test"){
            res.json({status: 200, message: "Go top go", error: false}); 
        }
        else{
            res.json({status: 400, message: "Forbidden", error: true}); 
        }
    }

}


module.exports = data; 