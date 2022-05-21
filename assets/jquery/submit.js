$(document).ready(function(){

    

    $(".add_new_input").click(function(){
      $(".input-parent").append("<div class='d-flex parent mt-2 justify-content-center'><input class='value form-control' type='text' placeholder='Please type your name'> <i class=' del bi bi-x-circle-fill text-danger ms-2 mt-2' style='font-size: 20px; cursor: pointer;'></i></div>"); 
    //   ("<input class='first_name form-control' type='text' placeholder='Please type your name'>").$(".first_name")
    })


    $(document).on('click','.del',function(){
      $(this).parents('.parent').remove();  
    });


    $(".sum").click(function(){

        $(".value").each(function(){
          let x = parseInt($(this).val()); 

        })

    })




})