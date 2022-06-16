$(document).ready(function(){


    $(".login").click(function(){
        
        let username = $(".username").val(); 
        let password = $(".password").val(); 

        $.post("/login-check", {username, password}, function(res){
            if(res){
                alert("user acccess");
            }
            else{
                alert("user denied"); 
            }
        })

    })



})