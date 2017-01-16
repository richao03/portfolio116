$(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        console.log("we scroll", scroll_pos)
        if (scroll_pos < 720) {

            $(".cover").removeClass(function(index, className) {
                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $(".cover").addClass("color-landing")
        } else

        if (scroll_pos > 721 && scroll_pos < 1866) {
            setTimeout(function() { document.getElementById("coverAbout").className += " startGrowAbout transition15" }, 1500)
            setTimeout(function() { document.getElementById("coverAbout").classList.remove("transition15") }, 3000)
            $(".cover").removeClass(function(index, className) {
                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $(".cover").addClass("color-about")
        } else

        if (scroll_pos > 1867 && scroll_pos < 3944) {
            setTimeout(function() { $("#skillsPortal").css("visibility", "visible") }, 3000)
            setTimeout(function() { $("#skillsPortal").css("display", "block") }, 200)
            setTimeout(function() { $("#skillsPortal").css("opacity", "1") }, 3000)
            if (document.getElementById("coverskills").className.split(" ").indexOf("startGrowskills") < 0) {
            	console.log("this is one")
                setTimeout(function() { document.getElementById("coverskills").className += " startGrowskills transition15" }, 1500)
            }
            setTimeout(function() { document.getElementById("coverskills").classList.remove("transition15") }, 3000)
            $(".cover").removeClass(function(index, className) {
                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $(".cover").addClass("color-training")
        } else

        if (scroll_pos > 3945 && scroll_pos < 7022) {
            $(".cover").removeClass(function(index, className) {
                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $(".cover").addClass("color-portfolio")
        } else

        if (scroll_pos > 7023) {
            if (document.getElementById("covercontact").className.split(" ").indexOf("startGrowcontact") < 0) {
                setTimeout(function() { document.getElementById("covercontact").className += " startGrowcontact transition15" }, 1500)
            }
            setTimeout(function() { document.getElementById("covercontact").classList.remove("transition15") }, 3000)
            $(".cover").removeClass(function(index, className) {
                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $(".cover").addClass("color-contact")
        }


    });


