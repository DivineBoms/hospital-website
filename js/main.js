   // Sticky Navbar
   $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.navbar').addClass('sticky-top');
    } else {
        $('.navbar').removeClass('sticky-top');
    }
});

// Dropdown on mouse hover
$(document).ready(function () {
    function toggleNavbarMethod() {
        if ($(window).width() > 992) {
            $('.navbar .dropdown').on('mouseover', function () {
                $('.dropdown-toggle', this).trigger('click');
            }).on('mouseout', function () {
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        } else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
});

      // loader
      function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
      }
      
      function fadeOut(){
        setInterval(loader, 3000);
      }
      
      window.onload = fadeOut();
      $('.testmonial_active').owlCarousel({
        loop:true,
        margin:0,
      items:1,
      autoplay:true,
      navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        nav:false,
      dots:true,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
        responsive:{
            0:{
                items:1,
                dots:false,
            },
            767:{
                items:1,
                dots:false,
            },
            992:{
                items:1,
            },
            1200:{
                items:1,
            },
            1500:{
                items:1
            }
        }
      });

//       $(function() {
//   $('#dp').datepicker();
// });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.backtop').addClass('reveal');
    } else {
        $('.backtop').removeClass('reveal');
    }
});
// :: CounterUp Active Code
 // Facts counter
 $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});

5