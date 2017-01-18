$(document).ready(function() {
    $(".hoverStackStore").hover(function() {
        $('#refineryMessage').css("display", "block")
    }, function() {
        $('#refineryMessage').css("display", "none")
    });



    $(".hoverRefinery").hover(function() {
        $('#stackStoreMessage').css("display", "block")
    }, function() {
        $('#stackStoreMessage').css("display", "none")
    });



    $(".hoverNYG").hover(function() {
    $('#weatherMessage').css("display", "block")
    }, function() {
        $('#weatherMessage').css("display", "none")
    });


    $(".hoverWeather").hover(function() {
    	    $('#NYGMessage').css("display", "block")
    }, function() {
        $('#NYGMessage').css("display", "none")
    });
        

    $(".hoverQuote").hover(function() {
    $('#battleMessage').css("display", "block")
    }, function() {
        $('#battleMessage').css("display", "none")
    });

    $(".hoverBattle").hover(function() {
    	     $('#quoteMessage').css("display", "block")
    }, function() {
        $('#quoteMessage').css("display", "none")
    });
       

})
