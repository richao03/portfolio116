$(document).ready(function() {
    $(".hoverStackStore").hover(function() {
        $('#refineryMessage').css("display", "block")
    }, function() {
        $('#refineryMessage').css("display", "none")
    });


    // $(".hoverRefinery").hover(function() {
    //     document.getElementById('sideBox').innerHTML = "ThIS IS Refinery!"
    // });
    $(".hoverRefinery").hover(function() {
        $('#stackStoreMessage').css("display", "block")
    }, function() {
        $('#stackStoreMessage').css("display", "none")
    });

    // $(".hoverNYG").hover(function() {
    //     document.getElementById('sideBox').innerHTML = "ThIS IS NYG!"
    // });

    $(".hoverNYG").hover(function() {
    $('#weatherMessage').css("display", "block")
    }, function() {
        $('#weatherMessage').css("display", "none")
    });

    // $(".hoverWeather").hover(function() {
    //     document.getElementById('sideBox').innerHTML = "ThIS IS weather!"
    // });

    $(".hoverWeather").hover(function() {
    	    $('#NYGMessage').css("display", "block")
    }, function() {
        $('#NYGMessage').css("display", "none")
    });
        

    // $(".hoverQuote").hover(function() {
    //     document.getElementById('sideBox').innerHTML = "ThIS IS Quote!"
    // });
    $(".hoverQuote").hover(function() {
    $('#battleMessage').css("display", "block")
    }, function() {
        $('#battleMessage').css("display", "none")
    });
    // $(".hoverBattle").hover(function() {
    //     document.getElementById('sideBox').innerHTML = "ThIS IS chat!"
    // });

    $(".hoverBattle").hover(function() {
    	     $('#quoteMessage').css("display", "block")
    }, function() {
        $('#quoteMessage').css("display", "none")
    });
       

})
