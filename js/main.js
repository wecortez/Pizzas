$(document).ready(function() {
    var downbutton = $('#downbutton');
    var facebook = $('#facebook');
    var twitter = $('#twitter');
    var instagram = $('#instagram');
    var youtube = $('#youtube');

    facebook.on('click', function(e) {
        e.preventDefault();
    });
    twitter.on('click', function(e) {
        e.preventDefault();
    });
    instagram.on('click', function(e) {
        e.preventDefault();
    });
    youtube.on('click', function(e) {
        e.preventDefault();
    });
    // var ulmenu1 = $('#ulmenu');
    // var icono = $('#icono');

    // var contador = 0;

    // icono.on('click', function() {
    //     // ulmenu1.toggle(1000);
    //     if (contador == 0) {
    //         ulmenu1.toggle(1000);
    //         contador = 1;
    //     } else {
    //         ulmenu1.toggle(500);
    //         contador = 0;
    //     }

    // });

    // downbutton.on('click',function(){
    //     downbutton.attr('href', "#ingredientes").slideDown(1000);
    // })

    // This is a functions that scrolls to #{blah}link
    function goToByScroll(id) {
        // Remove "link" from the ID
        // id = id.replace("link", "ingredientes");
        id = "ingredientes";
        // Scroll
        $('html,body').animate({
                scrollTop: $("#" + id).offset().top
            },
            'slow');
    }

    downbutton.click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll(this.id);
    });
});