
            $(document).scroll(function() {
              
                if ($(window).width() < 666) {      
                    scroll_pos = $(this).scrollTop();
                    
                    if (scroll_pos < 344) {
                   
                        $(".cover").removeClass(function(index, className) {
                            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                        });
                        $(".cover").addClass("color-landing")
                    } else

                    if (scroll_pos > 345 && scroll_pos < 879) {
                        
                        if (document.getElementById("coverAbout").className.split(" ").indexOf("startGrowAbout") < 0) {
                            
                            setTimeout(function() { document.getElementById("coverAbout").className += " startGrowAbout transition15" }, 1500)
                        }
                        setTimeout(function() { document.getElementById("coverAbout").classList.remove("transition15") }, 3000)
                        $(".cover").removeClass(function(index, className) {
                            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                        });
                        $(".cover").addClass("color-about")
                    } else

                    if (scroll_pos > 880 && scroll_pos < 1617) {
                      
                        setTimeout(function() { $("#skillsPortal").css("visibility", "visible") }, 3000)
                        setTimeout(function() { $("#skillsPortal").css("display", "block") }, 200)
                        setTimeout(function() { $("#skillsPortal").css("opacity", "1") }, 3000)
                        if (document.getElementById("coverskills").className.split(" ").indexOf("startGrowskills") < 0) {
                           
                            setTimeout(function() { document.getElementById("coverskills").className += " startGrowskills transition15" }, 1500)
                        }
                        setTimeout(function() { document.getElementById("coverskills").classList.remove("transition15") }, 3000)
                        $(".cover").removeClass(function(index, className) {
                            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                        });
                        $(".cover").addClass("color-training")

                    } else

                    if (scroll_pos > 1618 && scroll_pos < 2758) {
                        $(".cover").removeClass(function(index, className) {
                            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                        });
                        $(".cover").addClass("color-portfolio")
                    } else

                    if (scroll_pos > 2759) {
                        if (document.getElementById("covercontact").className.split(" ").indexOf("startGrowcontact") < 0) {
                            setTimeout(function() { document.getElementById("covercontact").className += " startGrowcontact transition15" }, 1500)
                        }
                        setTimeout(function() { document.getElementById("covercontact").classList.remove("transition15") }, 3000)
                        $(".cover").removeClass(function(index, className) {
                            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                        });
                        $(".cover").addClass("color-contact")
                    }



                } else {  
                		scroll_pos = $(this).scrollTop();
                   
                        if (scroll_pos < 299) {


                            $(".cover").removeClass(function(index, className) {
                                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                            });
                            $(".cover").addClass("color-landing")
                        } else

                        if (scroll_pos > 300 && scroll_pos < 980) {
                       
                        if (document.getElementById("coverAbout").className.split(" ").indexOf("startGrowAbout") < 0) {
                           
                            setTimeout(function() { document.getElementById("coverAbout").className += " startGrowAbout transition15" }, 1500)
                        }
                        setTimeout(function() { document.getElementById("coverAbout").classList.remove("transition15") }, 3000)
                            $(".cover").removeClass(function(index, className) {
                                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                            });
                            $(".cover").addClass("color-about")
                        } else

                        if (scroll_pos > 981 && scroll_pos < 2296) {
                            setTimeout(function() { $("#skillsPortal").css("visibility", "visible") }, 3000)
                            setTimeout(function() { $("#skillsPortal").css("display", "block") }, 200)
                            setTimeout(function() { $("#skillsPortal").css("opacity", "1") }, 3000)
  
                            if (document.getElementById("coverskills").className.split(" ").indexOf("startGrowskills") < 0) {
                                setTimeout(function() { document.getElementById("coverskills").className += " startGrowskills transition15" }, 500)
                            }
                            setTimeout(function() { document.getElementById("coverskills").classList.remove("transition15")}, 7000)
                            $(".cover").removeClass(function(index, className) {
                                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                            });
                            $(".cover").addClass("color-training")
                        } else

                        if (scroll_pos > 2297 && scroll_pos < 2650) {
                            $(".cover").removeClass(function(index, className) {
                                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                            });
                            $(".cover").addClass("color-portfolio")
                        } else

                        if (scroll_pos  + $(window).height() == $(document).height()) {
                            if (document.getElementById("covercontact").className.split(" ").indexOf("startGrowcontact") < 0) {
                                setTimeout(function() { document.getElementById("covercontact").className += " startGrowcontact transition15" }, 700)
                            }
                            setTimeout(function() { document.getElementById("covercontact").classList.remove("transition15") }, 5000)
                            $(".cover").removeClass(function(index, className) {
                                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
                            });
                            $(".cover").addClass("color-contact")
                        }


                    };
                })



/* ===========================================================
 * jquery-interactive_bg.js v1.0
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an interactive moving background
 * that reacts to viewer's cursor
 *
 * https://github.com/peachananr/interactive_bg
 * 
 * License: GPL v3
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    strength: 25,
    scale: 1.05,
    animationSpeed: "100ms",
    contain: true,
    wrapContent: false
  };  
  
  $.fn.interactive_bg = function(options){
    return this.each(function(){
      var settings = $.extend({}, defaults, options),
          el = $(this),
          h = el.outerHeight(),
          w = el.outerWidth(),
          sh = settings.strength / h,
          sw = settings.strength / w,
          has_touch = 'ontouchstart' in document.documentElement;
          
      if (settings.contain == true) {
        el.css({
          overflow: "hidden"
        });
      }
      // Insert new container so that the background can be contained when scaled.
      
      if (settings.wrapContent == false) {
        el.prepend("<div class='ibg-bg'></div>")
      } else {
        el.wrapInner("<div class='ibg-bg'></div>")
      }
      
      
      
      // Set background to the newly added container.
      
      if (el.data("ibg-bg") !== undefined) {
        el.find("> .ibg-bg").css({
          background: "url('" + el.data("ibg-bg") + "') no-repeat center center",
          "background-size": "cover",
        });
      }
      
      el.find("> .ibg-bg").css({
        width: w,
        height: h
      })
      
     
      
      if(has_touch || screen.width <= 699) {
        // For Mobile
        // Add support for accelerometeron mobile
        window.addEventListener('devicemotion', deviceMotionHandler, false);

          function deviceMotionHandler(eventData) {
             var accX = Math.round(event.accelerationIncludingGravity.x*10) / 10,
                 accY = Math.round(event.accelerationIncludingGravity.y*10) / 10,
                 xA = -(accX / 10) * settings.strength,
                 yA = -(accY / 10) * settings.strength,
                 newX = -(xA*2),
                 newY = -(yA*2);
                 
                 el.find("> .ibg-bg").css({
                   "-webkit-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
                   "-moz-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
                   "-o-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
                   "transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")"
                 });    

          }
        
      } else {
        // For Desktop 
        // Animate only scaling when mouse enter
        el.mouseenter(function(e) {
          if (settings.scale != 1) el.addClass("ibg-entering")
          el.find("> .ibg-bg").css({
            "-webkit-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + ",0,0)",
            "-moz-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + ",0,0)",
            "-o-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + ",0,0)",
            "transform": "matrix(" + settings.scale + ",0,0," + settings.scale + ",0,0)",
            "-webkit-transition": "-webkit-transform " + settings.animationSpeed + " linear",
            "-moz-transition": "-moz-transform " + settings.animationSpeed + " linear",
            "-o-transition": "-o-transform " + settings.animationSpeed + " linear",
            "transition": "transform " + settings.animationSpeed + " linear"
          }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){

            // This will signal the mousemove below to execute when the scaling animation stops
            el.removeClass("ibg-entering")
          });
        }).mousemove(function(e){
          // This condition prevents transition from causing the movement of the background to lag
          if (!el.hasClass("ibg-entering") && !el.hasClass("exiting")) {
            var pageX = e.pageX || e.clientX,
                pageY = e.pageY || e.clientY,
                pageX = (pageX - el.offset().left) - (w / 2),
                pageY = (pageY - el.offset().top) - (h / 2),
                newX = ((sw * pageX)) * - 1,
                newY = ((sh * pageY)) * - 1;
            // Use matrix to move the background from its origin
            // Also, disable transition to prevent lag
            el.find("> .ibg-bg").css({
              "-webkit-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
              "-moz-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
              "-o-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
              "transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
              "-webkit-transition": "none",
              "-moz-transition": "none",
              "-o-transition": "none",
              "transition": "none"
            });
          }
        }).mouseleave(function(e) {
          if (settings.scale != 1) el.addClass("ibg-exiting")
          // Same condition applies as mouseenter. Rescale the background back to its original scale
          el.addClass("ibg-exiting").find("> .ibg-bg").css({
            "-webkit-transform": "matrix(1,0,0,1,0,0)",
            "-moz-transform": "matrix(1,0,0,1,0,0)",
            "-o-transform": "matrix(1,0,0,1,0,0)",
            "transform": "matrix(1,0,0,1,0,0)",
            "-webkit-transition": "-webkit-transform " + settings.animationSpeed + " linear",
            "-moz-transition": "-moz-transform " + settings.animationSpeed + " linear",
            "-o-transition": "-o-transform " + settings.animationSpeed + " linear",
            "transition": "transform " + settings.animationSpeed + " linear"
          }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            el.removeClass("ibg-exiting")
          });
        });
      }
    });
    
  }
  
  
}(window.jQuery);
$(document).ready(function() {
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

    $('.portfolioLink').click(() => {
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-portfolio")
    });

    $('.contactLink').click(() => {
        $(".cover").removeClass(function(index, className) {
            return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $(".cover").addClass("color-contact")
    });

})

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

$(document).ready(function() {
	$('.skillsIcon').hover(function(){
	$(this).addClass("floating")

	},	
	(function(){
	$(this).removeClass("floating")
	
	}))

	// 	$('.skillsIcon').mouseover(function(){
	// $(this).addClass("animated bounce")
	// console.log(this)
	// })

})
$(document).ready(function() {
    console.log("Facts: Best Fighter = Georges St. Pierre")
    console.log("       Best Cat = Evee")
    console.log("Thanks for visiting!")
    setTimeout(function() { document.getElementById("linevert1").className += " linevert1" }, 300)
    setTimeout(function() { document.getElementById("linevert2").className += " linevert2" }, 300)
    setTimeout(function() { document.getElementById("linevert3").className += " linevert3" }, 300)
    setTimeout(function() { document.getElementById("linevert4").className += " linevert4" }, 300)
     setTimeout(function() { document.getElementById("coverWindow").className += " startGrow transition15" }, 4500)
        setTimeout(function() { document.getElementById("coverWindow").classList.remove("transition15") }, 7000)



    //INTERACTIVE BACKGROUND  
    $(".overlay").hover(function() {
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

    $(".about").hover(function(){
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
    })

    //hovering over different panels
    $(".no-pad").hover(function() {
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-cover");
 
    });


    $(".portfolio").hover(function() {
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)linevert\S+/g) || []).join(' ');
        });
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
      
        setTimeout(function() { $("#skillsPortal").css("visibility", "visible") }, 3000)
        setTimeout(function() { $("#skillsPortal").css("display", "block") }, 200)
        setTimeout(function() { $("#skillsPortal").css("opacity", "1") }, 3000)
       
        $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-skills");
    });





  $(".contact").hover(function() {
     

           $(".line1, .line2, .line3, .line4").removeClass(function(index, className) {
            return (className.match(/(^|\s)line-\S+/g) || []).join(' ');
        });
        $(".line1, .line2, .line3, .line4").addClass("line-contact");
})

    $(".about").hover(function() {
     

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
