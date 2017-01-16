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
