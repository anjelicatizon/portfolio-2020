//Namespacing
const portfolio = {};

// ******* GLOBAL FUNCTIONS ******* 

// Page Piling Plugin Effects
portfolio.pagepiling = function() {

    // Capturing section IDs to show on right-hand menu on hover
    const ids = [];
    const tooltips = [];
    $('.section').each(function () {
        ids.push(this.id);
        tooltips.push($(this).data("navigation-tooltip"));
    });

    // Page Piling plug-in settings
	$('#pagepiling').pagepiling({
        anchors: ids,
        menu: false,
        direction: 'vertical',
        verticalCentered: true,
        navigation: {
            'position': 'right',
            'tooltips': tooltips
        },
        loopBottom: false,
        loopTop: false,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,
	});
}

// Redirect so when a user comes to my site, it will automatically go to #home
portfolio.pageRedirect = function() {
    window.location.replace("http://www.anjelicatizon.com/#home");
}  

// Init
portfolio.init = function() {
    // portfolio.pageRedirect()
    portfolio.pagepiling();
}

// Document Ready
$(function() {
    portfolio.init();
});