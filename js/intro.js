//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

    $("#empty-box").hide();
    

    $("#toggle-button").click(function(){
        $("#empty-box").toggle();

    });

    $("#empty-box").click(function(){
        $("#empty-box").addClass("movebox");

        setTimeout(function(){
            $("#empty-box").removeClass("movebox");

        },4000);

    });

    $("#name-text").click(function(){
        $("#empty-box").css("background-color","black");

    })

    $("#reset-button").click(function(){
        setTimeout(function(){
            $("#empty-box").removeClass("movebox");
        });
        $("#empty-box").css("background-color","rgb(208, 115, 16)");
        $("#empty-box").hide();
        

    });

});
