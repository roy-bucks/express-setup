$(document).ready(function(){

    /*
        1. detect the login button 
        2. get the email
        3. get the password 
        4. validate the data
         - empty 
        5. send to backend
    */


    function login(){

        let email = $(".email").val(); 
        let pass = $(".pass").val(); 

        if(validate.isEmpty(email) ||validate.isEmpty(pass)){
            alert("input should not be empty"); 
            return; 
        }

        $.post("/user/login", {email, pass}, function(res){
            if(res){
                location.reload();
            }
            else{
                alert("Something went wrong");
            }
        })

    }




    $(".login").click(function(){
        login(); 
    })


})