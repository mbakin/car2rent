$(document).ready(function(){
  $('#book_pick_date, #book_off_date, #tarih3').datepicker({});

$(window).scroll(function(){
  $('.part2, .part3, .part4,.part5,.part6,.part7, footer').each(function(){
    let ustKenar = $(this).offset().top;
    let pencereAlt = $(window).scrollTop()+$(window).height();
    if(pencereAlt > ustKenar){
      $(this).animate({'opacity':'1'},850);
    }
  })
})




});