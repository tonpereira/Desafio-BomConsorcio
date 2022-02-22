const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#floatingPassword");

togglePassword.addEventListener("click", function () {
   
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye icon
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

$(document).ready(function(){

    $(".owl-carousel.carouselCards").owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        mouseDrag: false,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots: true
            },
            600:{
                items:2,
                nav:false,
                dots: true
            },
            1000:{
                items:3,
                nav:true,
                dots: false
            }
        }
    });

    $(".owl-carousel.carouselfooter").owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        mouseDrag: false,
        responsive:{
            0:{
                items:3,
                nav:false,
                dots: true
            },
            550:{
                items:3,
                nav:false,
                dots: true
            }
        }
    });

    var larguratela = $(document).width();
    
    $.fn.extend({
        alteracaoCelular: function (largura) {
            return this.each(function () {
                if(largura <= 576){
                    $('button#IdbtnComprar').text("Comprar");
                    $('button#IdbtnVender').text("Vender");
                    $('nav.navbar').removeClass('shadow-sm');
                    $('footer').addClass('text-center');
                } else {
                    $('button#IdbtnComprar').text("Comprar consórcio");
                    $('button#IdbtnVender').text("Vender consórcio");
                    $('nav.navbar').addClass('shadow-sm');
                    $('footer').removeClass('text-center');
                }
              });
        }
    });

    $(this).alteracaoCelular(larguratela);

    $(window).resize(function() {
        var larguratela = $(document).width();
        $(this).alteracaoCelular(larguratela);
    });
});

