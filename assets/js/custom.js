/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader Js
3.WoW Animation Js
4.Sticky Header JS
=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";


	// Loader JS Start
	$(window).ready(function(){
		$('.loader-box-one').fadeOut();
		$('body').removeClass('fixed');
   });
	// Loader JS End

	// Wow Animation JS Start
	new WOW().init(); 
	// Wow Animation JS End

    // Sticky Header JS Start
	$(window).on( 'scroll', function(){
		if ($(window).scrollTop() >= 100) {
		  $('.site-header').addClass('sticky-header');
		 }
		 else {
		  $('.site-header').removeClass('sticky-header');
		 }
	});
	// Sticky Header JS End

    // Toogle Menu Mobile JS Start
$(".toggle-button").on('click', function() {
    $(".main-navigation").toggleClass('toggle-menu');
    $(".header-menu .black-shadow").fadeToggle();
});
$(".main-navigation ul li a").on('click', function() {
    $(".main-navigation").removeClass('toggle-menu');
    $(".header-menu .black-shadow").fadeOut();
});
$(".main-navigation ul li.sub-items>a").on('click', function() {
    $(".main-navigation").addClass('toggle-menu');
    $(".header-menu .black-shadow").stop();
});
$(".header-menu .black-shadow").on('click', function() {
    $(this).fadeOut();
    $(".main-navigation").removeClass('toggle-menu');
});
// Toogle Menu Mobile JS End
    

if ($(window).width() < 992) {
    // Submenu For Mobile JS Start
    $('body').on('click', '.main-navigation ul li.sub-items>a', function() {
        if (($(this).parent().hasClass('active-sub-menu'))) {
        $(this).parent().removeClass('active-sub-menu');
        $(this).parent().find('ul').slideUp();
        } else {
            $(this).parent().addClass('active-sub-menu');
            $(this).parent().find('ul').slideDown();
        }
    });
    // Submenu For Mobile JS End	
}


   
});