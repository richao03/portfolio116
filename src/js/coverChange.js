
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


