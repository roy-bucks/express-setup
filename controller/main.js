
const data = {

    index:(req, res)=>{
        res.render("index"); 
    },
    name:(req, res)=>{
        res.render("name"); 
    }, 
    /* this will route into login page 
    */
   login: (req, res) => {
        res.render("login"); 
   },
   /* logimn credentials submit
   */ 
   userLogin:(req, res) =>{ 
    
        const data = {
            password: req.body.password, 
            username: req.body.username,
        }

        if(data.password == 123 && data.username == 'admin'){
            //user access
            res.json(true);
        }
        else{
            //user denied 
            res.json(false); 
        }
   }

}


module.exports = data; 