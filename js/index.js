// Sticky Header


        $('.main_h').addClass('sticky');

 


// Sticky Backtop
$(window).scroll(function() {

    if ($(window).scrollTop() > 966) {
        $('.backtop').addClass('sticky2');
    } else {
        $('.backtop').removeClass('sticky2');
    }
});



// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_v').addClass('sticky');
    } else {
        $('.main_v').removeClass('sticky');
    }
});

// Sticky Backtop
$(window).scroll(function() {

    if ($(window).scrollTop() > 966) {
        $('.backtop').addClass('sticky2');
    } else {
        $('.backtop').removeClass('sticky2');
    }
});



// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_v').hasClass('open-nav')) {
        $('.main_v').removeClass('open-nav');
    } else {
        $('.main_v').addClass('open-nav');
    }
});

$('.main_v li a').click(function() {
    if ($('.main_v').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_v').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 200);
    event.preventDefault();
});

// navigation scroll lijepo radi materem
$('a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 200);
    event.preventDefault();
});

$('logo a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 200);
    event.preventDefault();
});


// Fullsize startpicture & active section in navigation

var x = $(window).height();
$('.hero').css('height',x);

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight()+47;

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href=".sec'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
