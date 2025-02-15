$('.banner_slider').slick({
  arrows: false,
  dots: true,
});


$('.review_slides').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: `<i class="fa-solid fa-angle-left lft_Arrow"></i>`,
  nextArrow: `<i class="fa-solid fa-angle-right rft_Arrow"></i>`,
  centerMode: true,
  centerPadding: '0px',


  responsive: [
    
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]

  
});