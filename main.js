// variabili
var hamMenu = $(".hamburger-menu");
var close = $(".close");
var bars = $(".fa-bars");

// mostro il menù
bars.click( function() {
    hamMenu.addClass("active");
});

// nascondo menù
close.click( function() {
    hamMenu.removeClass("active");
});