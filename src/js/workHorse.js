$(document).ready(function() {
    setTimeout(function() { document.getElementById("linevert1").className += " linevert1" }, 300)
    setTimeout(function() { document.getElementById("linevert2").className += " linevert2" }, 300)
    setTimeout(function() { document.getElementById("linevert3").className += " linevert3" }, 300)
    setTimeout(function() { document.getElementById("linevert4").className += " linevert4" }, 300)
    setTimeout(function() { document.getElementById("coverWindow").className += " startGrow transition15", console.log(document.getElementById("coverWindow").className) }, 4500)
    setTimeout(function() { document.getElementById("coverWindow").classList.remove("transition15") }, 7000)

    // setTimeout(function() { document.getElementById("coverAbout").className += " startGrowAbout transition15", console.log(document.getElementById("coverAbout").className) }, 4500)
    // setTimeout(function() { document.getElementById("coverAbout").classList.remove("transition15") }, 7000)




    //INTERACTIVE BACKGROUND  
    $(".overlay").hover(function() {
        s
        $(".landing").mousemove(function(e) {
            var movementStrength = 25;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            var pageX = 2 * (e.pageX - ($(window).width() / 1));
            var pageY = 4 * (e.pageY - ($(window).height() / 1));
            var newvalueX = width * pageX * 1;
            var newvalueY = height * pageY * 1;
            $('.landing').css("background-position", newvalueX + "px     " + newvalueY + "px");

        });
    })

    $(".skills").hover(function() {

        $(".skills").mousemove(function(e) {
            var movementStrength = 25;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            var pageX = 2 * (e.pageX - ($(window).width() / 1));
            var pageY = 1 * (e.pageY - ($(window).height() / 1));
            var newvalueX = width * pageX * 1;
            var newvalueY = height * pageY * 1;
            $('.skills').css("background-position", newvalueX + "px     " + newvalueY + "px");

        });
    })

    //hovering over different panels
    $(".no-pad").hover(function() {
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-cover");
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-landing")
    });


    $(".portfolio").hover(function() {

        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });

        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)linevert\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-portfolio")
        $(".line1, .line2, .line3, .line4").addClass("line-portfolio");
        $(".line1").addClass("portline1")
        $(".line2").addClass("portline2")
        $(".line4").addClass("portline4")
        $(".line3").addClass("portline3")
    });

    $(".portfolio").mouseleave(() => {

        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)portline\S+/g) || []).join(' ');
        });
        $(".line1").addClass("linevert1")
        $(".line2").addClass("linevert2")
        $(".line3").addClass("linevert3")
        $(".line4").addClass("linevert4")
    })

    $(".skills").hover(function() {
        if (document.getElementById("coverskills").className.split(" ").indexOf("startGrowskills") < 0) {
            setTimeout(function() { document.getElementById("coverskills").className += " startGrowskills transition15", console.log(document.getElementById("coverskills").className) }, 500)
        }
        setTimeout(function() { document.getElementById("coverskills").classList.remove("transition15") }, 7000)
        setTimeout(function() { $("#skillsPortal").css("visibility", "visible") }, 3000)
           setTimeout(function() { $("#skillsPortal").css("display", "block") }, 200)
        setTimeout(function() { $("#skillsPortal").css("opacity", "1") }, 3000)
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-training")
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-skills");
    });

    $(".about").hover(function() {
        if (document.getElementById("coverAbout").className.split(" ").indexOf("startGrowAbout") < 0) {
            setTimeout(function() { document.getElementById("coverAbout").className += " startGrowAbout transition15", console.log(document.getElementById("coverAbout").className) }, 700)
        }
        setTimeout(function() { document.getElementById("coverAbout").classList.remove("transition15") }, 5000)
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-about")
        $(".about").mousemove(function(e) {
            var movementStrength = 25;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            var pageX = 2 * (e.pageX - ($(window).width() / 1));
            var pageY = 4 * (e.pageY - ($(window).height() / 1));
            var newvalueX = width * pageX * 1;
            var newvalueY = height * pageY * 1;
            $('.about').css("background-position", newvalueX + "px     " + newvalueY + "px");

        });
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-about");
    })

    //clicking menu links
    $('.homeLink').click(() => {
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-landing")
    });

    $('.aboutLink').click(() => {
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-about")
    });

    $('.skillsLink').click(() => {
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-training")
    });

  $(".contact").hover(function() {
        if (document.getElementById("covercontact").className.split(" ").indexOf("startGrowcontact") < 0) {
            setTimeout(function() { document.getElementById("covercontact").className += " startGrowcontact transition15", console.log(document.getElementById("covercontact").className) }, 700)
        }
        setTimeout(function() { document.getElementById("covercontact").classList.remove("transition15") }, 5000)
               $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-contact")
           $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-contact");
})

    $(".about").hover(function() {
        setTimeout(function() { document.getElementById("coverAbout").className += " startGrowAbout transition15", console.log(document.getElementById("coverAbout").className) }, 700)
        setTimeout(function() { document.getElementById("coverAbout").classList.remove("transition15") }, 5000)
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-about")
        $(".about").mousemove(function(e) {
            var movementStrength = 25;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            var pageX = 2 * (e.pageX - ($(window).width() / 1));
            var pageY = 4 * (e.pageY - ($(window).height() / 1));
            var newvalueX = width * pageX * 1;
            var newvalueY = height * pageY * 1;
            $('.about').css("background-position", newvalueX + "px     " + newvalueY + "px");

        });
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-about");
    })


    $('.menuBurger').click(() => {
        $('.menu').css("background-color", "red")
        $('.menuBurger').fadeOut(200, () => {})
        setTimeout(function() { $('.menuPane').css('margin-left', '0px') }, 200);

    })

    $('.menu').mouseleave(() => {
        $('.menu').css("background-color", "transparent")
        setTimeout(function() { $('.menuBurger').fadeIn(2000, () => {}) }, 500);
        $('.menuPane').css('margin-left', '-400px')

    })

    $('.type-it').css( "font-family","'Josefin Slab', serif").typeIt({})
        .tiType('Hello. ')
        .tiSettings({ speed: 60 })
        .tiType('I am Rich Chao,')
        .tiSettings({ speed: 60 })
        .tiType('  human')
        .tiPause(350)
        .tiDelete(5)
        .tiType('web developer for humans!');

    $('.about-it').css( "font-family","'Josefin Slab', serif").typeIt({
            loop: true,
            loopDelay: 4200
        })
        .tiType('Richard Chao - ')
        .tiType('Code Munkey')
        .tiPause(500)
        .tiDelete(5)
        .tiType("onkey")
        .tiPause(500)
        .tiDelete(6)
        .tiType("Junky")

    $('.portfolio-it').typeIt({})

    //portfolio hovering

});
