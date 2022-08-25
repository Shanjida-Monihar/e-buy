$(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });
      $('.men-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
          
        ]
      });
      $('.latest-product-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }, 
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
           
              
            }
          },
          
        ]
      
      });
      //last-logo slick slider//
      $('.last-logo-slid').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        pauseOnHover:false,
        prevArrow:".left-arw",
        nextArrow:".right-arw",
      });

      /*===Sticky-menu js Start===== */
      $(window) .scroll(function(){
        var top = $ (this) .scrollTop ()
        if( top > 300){
          $(".navbar") .addClass("sticky-menu")
        }
        else{
          $(".navbar") .removeClass("sticky-menu")
        }
      }) 
      /*===Sticky-menu js End===== */
       /*===back-to-top js Start===*/
       $ (".back-to-top") .click (function () {
         $ ("html,body") .animate ({ scrollTop : 0},1000 )
       })
       /*===back-to-top js End===*/
       
       $('.test-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      
      });
      
      
        //hamburger menu
  $(".navbar-toggler").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();
  });
}
    )

   //mixitup
   var containerEl = document.querySelector('.feature-items');

   var mixer = mixitup(containerEl);


         // img-slide 
         $('.last-logo-slide').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
        });
        