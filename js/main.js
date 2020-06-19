/*start jquery code*/



/************ OWL carousel *****************/




$(document).ready(function(){
  $('.baner-slider').owlCarousel({
    loop:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
        }
    }
})
});


$(document).ready(function(){
    $('.new-arrive').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
           
        }
    }
    
    })
});


$(document).ready(function(){
    $('.soon-arrive').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    dots: false,
    items:1,
    autoplayTimeout:2000,
    autoplaySpeed:500,
    })
});






/************************ Start Tabs Slider *********************/
$(document).ready(function(){
    $('.featured').owlCarousel({
    loop:true,
    margin:20,
    dots: false,

    responsive:{
        0:{items:2,nav:true},
        765:{items:3,nav:true},
        990:{items:4, nav:true,}
    }
    })
});


$(document).ready(function(){
    $('.best-seller').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
    nav:true,
    responsive:{
        0:{items:2,nav:true},
        765:{items:3,nav:true},
        990:{items:4, nav:true,}
    }
    
    })
});


$(document).ready(function(){
    $('.top-rated').owlCarousel({
    loop:true,
    margin:20,
    dots: false,

    responsive:{
        0:{items:2,nav:true},
        765:{items:3,nav:true},
        990:{items:4, nav:true,}
    }
    
    })
});

$(document).ready(function(){
    $('.mostviewed').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
        nav:true,
        responsive:{
            0:{items:2,nav:true},
            765:{items:3,nav:true},
            990:{items:4, nav:true,}
        }
    
    })
    
});

/************************ End Tabs Slider *********************/

/****************** start offer slidre ****************/
$(document).ready(function(){
    $('.offer').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    margin:10,
    dots: false,

    responsive:{
        0:{items:1,nav:true},
        600:{items:1,nav:true},
        1000:{items:1, nav:true,}
    }
    
    })
});







/**********************************About page owl**********************/
/******* our team slider ********/
$(document).ready(function(){
    $('.team').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    margin:20,
    dots: false,
    nav:false,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:4}
    }
    
    })
});

/****************** start offer code img change ****************/
$(document).ready(function(){
    $('.small-img').click(function(){
        var imgSrc =  $(this).attr("src");
        $('.top-img').attr('src',imgSrc);
    });
});

/****************** end offer slidre ****************/



/******************** start testmonial slider ******************/

$(document).ready(function(){
    $('.jumbotron').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    
    })
});

/******************** end testmonial slider ******************/

/********************* start top category slider ***************/

$(document).ready(function(){
    $('.categ1').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    
    })
});

$(document).ready(function(){
    $('.categ2').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    
    })
});

$(document).ready(function(){
    $('.categ3').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    
    })
});



/********************* end top category slider ***************/




/************************* start brands slider******************/
$(document).ready(function(){
  $('.brand').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed:1000,
    margin:10,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
           
        }
    }
})
});
/************************* end brands slider******************/




/************************* start related products slider******************/

$(document).ready(function(){
    $('.related').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{items:2},
        600:{items:3},
        1000:{items:4,nav:true,}
    }
    
    })
});
/************************* end related products slider******************/




/***************** end OWL carousel *****************/




$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


/*********************** start jquery code ****************/
$(document).ready(function(){
  
    
  $("#user").click(function(){
    $("#log-regi").toggle('slow');
  });

        
    
  $("#cart , #cart-items").hover(function(){
  $("#cart-items").toggle();
  });

    
    
    
  $("#wish-list , #wish-list-items").hover(function(){
  $("#wish-list-items").toggle();
  });
    
    /*******************************************************/
//    $("#shop").hover(function(){
//  $(".shop-category").toggle('slow');
//  });

});



/**************************************************************************/
/****************** register validation *****************/
$(document).ready(function(){

       $(" #name").blur(function(){
        if($('#name').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-user').css('color','green');
            $('p.name').addClass('d-none');
            
        }else{
            $(this).css('border-color','red');
            $('.register .fa-user').css('color','red');
            $('p.name').removeClass('d-none');
        }
      });
    
    $("#email").blur(function(){
        if($('#email').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-at').css('color','green');
            $('p.email').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.register .fa-at').css('color','red');
            $('p.email').removeClass('d-none');
        }
      });
    
      $("#pass").blur(function(){
        if($('#pass').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-unlock').css('color','green');
            $('p.pass').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.register .fa-unlock').css('color','red');
            $('p.pass').removeClass('d-none');
        }
      });
    
      $('#re-pass').change(function(){
          if($('#pass').val() == $('#re-pass').val()){
            $(this).css('border-color','green');
            $('.register .fa-undo').css('color','green');
            $('p.re-pass').addClass('d-none');
          }else{
            $(this).css('border-color','red');
            $('.register .fa-undo').css('color','red');
            $('p.re-pass').removeClass('d-none'); 
          }
      });


      $('.register button').click(function(){

        if ($('#name').val() !=''){
                if ($('#email').val() !='') {
                    if ($('#pass').val() !='') {
                        if ($('#re-pass').val() !=''){
                            alert('good');
                        }else{
                        alert('re pass empty');
                        }
                    }else{
                        alert('pass empty');
                    }
                }else{
                    alert('email empty');
                }
            }else{
                alert('name empty');
            }
        
    
        });
    
});


/****************** login validation *****************/
$(document).ready(function(){

    $("#lo-email").blur(function(){
        if($('#lo-email').val() != ""){
            $(this).css('border-color','green');
            $('.login .fa-at').css('color','green');
            $('p.lo-email').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.login .fa-at').css('color','red');
            $('p.lo-email').removeClass('d-none');
        }
      });

      $("#lo-pass").blur(function(){
        if($('#lo-pass').val() != ""){
            $(this).css('border-color','green');
            $('.login .fa-unlock-alt').css('color','green');
            $('p.lo-pass').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.login .fa-unlock-alt').css('color','red');
            $('p.lo-pass').removeClass('d-none');
        }
      });

      $('.login button').click(function(){

        if ($('#lo-email').val() !=''){
                if ($('#lo-pass').val() !='') {alert('good');

                }else{ alert(' pass empty');}

            }else{ alert('email empty');}
        });

});






/**********************************shop page*************** */
$(document).ready(function(){
    $('.filter-icon').click(function(){
        $('#aside').toggleClass('aside-show');
        $('#aside').toggleClass('d-none col-3');
        $('.filter-icon').toggleClass('left-filter-icon');
        // if ($(window).width() > 765) {
        //     alert('hi')
        //     // $('#aside').addClass('d-none col-3');
        // }
    })
});





/**** filter price ****/
$(document).ready(function(){
    $("#myRange").on('input',function(){
      var val=$(this).val();
      $("#price").text(val);
    });
  });






/**********************************cart page ******************* */

// let count = parseInt($('#jq-quant').val()),
//     price = parseInt($('.price').html()),
//     totalPrice = $('#total-price');

// $('#plus').click(function () {
//     if (count >= 1) {
//     $('#jq-quant').val(count += 1);
//     totalPrice.html(parseInt(totalPrice.html()) + price);
// }
//     });

// $('#sub').click(function () {
//     if (count > 1) {
//     $('#jq-quant').val(count -= 1);

//     totalPrice.html(parseInt(totalPrice.html()) - price);
// }

//     });



    $.each($('span#plus'),function(index,element){
        element.addEventListener('click', function(){
            var count = $(this).parent('.qunt-action').parent('.quant').find('input'),
                price = $(this).parentsUntil('li').parent('div');
                
            if(count.val() >= 1){
                count.val(parseInt(count.val()) + 1);
            }
        })
    });

    $.each($('span#sub'),function(index,element){
        element.addEventListener('click', function(){
            var count = $(this).parent('.qunt-action').parent('.quant').find('input'),
                price = $(this).parent('.qunt-action');
                
            if(count.val() > 1){
                count.val(parseInt(count.val()) - 1);
            }
        })
    });





/**************** */

//     var coun = parseInt($('#jq-test').val()),
//     pric = parseInt($('.pric').html()),
//     totalPr = $('#total-pr');

// $('#pl').click(function () {
//     if (coun >= 1) {
//     $('#jq-test').val(coun += 1);
//     totalPr.html(parseInt(totalPr.html()) + pric);
// }
//     });

// $('#su').click(function () {
//     if (coun > 1) {
//     $('#jq-test').val(coun -= 1);

//     totalPr.html(parseInt(totalPr.html()) - pric);
// }

//     });

/**************************single product page ************************* */












/********************* profile page******************/

$('.personal-content .edit').click(function(){
    $('.personal-content .save').removeClass('d-none');
    $(this).addClass('d-none');
    $('.personal-content input').removeAttr('disabled');
    
    $('.personal-content .save').click(function(){
        $('.personal-content input').attr('disabled','disabled');
        $('.personal-content .edit').removeClass('d-none');
        $('.personal-content .save').addClass('d-none');
    });

});







$(document).scroll(function() { 
    if($(document).scrollTop() >= 500){
        $('.back-to-top').css('display','block').animate({top : '85%'} ,'slow');
    }else{
        $('.back-to-top').css('display','none');
    }
    
});
$('.back-to-top').click(function(){
    $(document).scrollTop(0).animate('slow');
});

