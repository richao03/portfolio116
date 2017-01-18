$(document).ready(function() {
    var about = document.getElementById("coverAbout");
    //init 
    var controller = new ScrollMagic.Controller();


    //build

    var aboutPortal = new ScrollMagic.Scene({
            triggerElement: '.coverAbout',
            reverse: false,

        })
        .setClassToggle(".coverAbout", "startGrowAbout")
        .addTo(controller);


    var aboutColor = new ScrollMagic.Scene({
            triggerElement: ".coverAbout",
            duration: $('div-id').height()
        })
        .setClassToggle(".cover", "color-about")
        .addTo(controller);





    var SkillsPortal = new ScrollMagic.Scene({
            triggerElement: '.coverskills',
            reverse: false
        })
        .setClassToggle(".coverskills", "startGrowskills")
        .addTo(controller);


    var SkillsColor = new ScrollMagic.Scene({
            triggerElement: ".coverskills",
            duration: $('coverskills').height()

        })
        .setClassToggle(".cover", "color-skills")
        .addTo(controller);

    var SkillsPortal1 = new ScrollMagic.Scene({
            triggerElement: ".coverskills"
        })
        .on('start', function() {
            console.log("we in here")
            setTimeout(function() { $("#skillsPortal").css("visibility", "visible") }, 1000)
            setTimeout(function() { $("#skillsPortal").css("display", "block") }, 200)
            setTimeout(function() { $("#skillsPortal").css("opacity", "1") }, 1000)

        })
        .addTo(controller);


    var portfolioPortal = new ScrollMagic.Scene({
            triggerElement: '.coverportfolio',
            duration: $('.coverportfolio').height()
        })
        .setClassToggle(".cover", "color-portfolio")
        .addTo(controller);

    var contact = new ScrollMagic.Scene({
            triggerElement: '.contact',
            duration: $('div-id').height()
        })
        .setClassToggle(".cover", "color-contact")
        .addTo(controller);


})
