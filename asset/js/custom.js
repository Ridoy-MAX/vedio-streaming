
/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   reset: true
// })

// sr.reveal(`.easy-writing, .img`,{delay: 400})
// sr.reveal(`.quality`,{delay: 300})
// sr.reveal(`.banner-slider, .footer`,{delay: 300, origin: 'top'})

// sr.reveal(`.work, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 50})
// sr.reveal(`.our-feature, .discount__animate`,{origin: 'left', interval: 50})

// sr.reveal(``,{origin: 'top'})
// sr.reveal(``)


/*=============== banner ===============*/
$(document).ready(function(){ 
      //slider start;
    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 1,
        arrows:false,
        // prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        // nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;


});     


  











 /* Periodic Timer. Period is equal 10 days */
 $("#periodic-timer_period_days").syotimer({
  date: new Date(2015, 0, ),
  layout: "smh",
  periodic: true,
  periodInterval: 10,
  periodUnit: "d",
});


