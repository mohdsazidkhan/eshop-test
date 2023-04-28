$(function () {
  // panel interaction
  $('#cta-m-one').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() < 992) {
      console.log('trigger');
      $('html, body').animate({
        scrollTop: $('#step-1-mobile').offset().top - 64,
      }, 1000);
    } else {
      $('html, body').animate({
        scrollTop: $('#step-1-desktop').offset().top - 30,
      }, 1000);
    }
  });

  // code here
  $("body").on("click",".pub-plan-single>button", function(e){
    e.preventDefault();
    $(this).css('background', '#0CA86C')
    $(this).text('Selected')
    let dataID = $(this).attr("data-id");
    if(dataID !== ''){
      $("#pub-item").text(dataID);
      $("#step-2-desktop").find('.disabled').remove();
      $('html, body').animate({
        scrollTop: $('#step-2-desktop').offset().top - 0,
      }, 1000);
    }
  });

  $("body").on("click",".magazine-plan-single>button", function(e){
    e.preventDefault();
    $(this).css('background', '#0CA86C')
    $(this).text('Selected')
    let dataID = $(this).attr("data-id");
    if(dataID !== ''){
      $("#mag-item").text(dataID);
      $(".comp-catfish-checkout").css({'transform' : 'translateY(' + 0 +')', 'visibility': 'visible'});
      $("#pub-submit").attr('disabled', false);
      $("#pub-submit").css('background', '#005DAA');
      $('html, body').animate({
        scrollTop: $('.comp-catfish-checkout').offset().top - 0,
      }, 1000);
    }
  });

  $("body").on("click",".dropdown-select-selected.mutli-select-pub", function(e){
    e.preventDefault();
    $(this).css('border', '1.5px solid #005DAA')
    $(this).siblings('div').css('display', 'block')
  });

  $("body").on("click",".mutli-select-pub .select>input", function(e){
    e.preventDefault();
    let value = $(this).val();
    let dataImg = $(this).attr('data-img');
    if(value !== ''){
      $(".dropdown-select-options.mutli-select-pub").css('display', 'none')
      $(".mutli-select-pub .selected p").text(value);
      $(".mutli-select-pub img").attr('src',dataImg);
      $(".mutli-select-pub img").css('display', 'block')
      $("#pub-item").text(value);
      $(this).next('label').addClass('selection');
      $(".mutli-select-mag").parent().parent().parent().siblings('.disabled').remove();
      $('html, body').animate({
        scrollTop: $('.mutli-select-mag').offset().top - 200,
      }, 1000);
    }
  });

  $("body").on("click",".dropdown-select-selected.mutli-select-mag", function(e){
    e.preventDefault();
    $(this).siblings('div').css('display', 'block')
  });

  $("body").on("click",".mutli-select-mag .select>input", function(e){
    e.preventDefault();
    let value = $(this).val();
    let dataImg = $(this).attr('data-img');
    if(value !== ''){
      $(".dropdown-select-options.mutli-select-mag").css('display', 'none')
      $(".mutli-select-mag .selected p").text(value);
      $(".mutli-select-mag img").attr('src',dataImg);
      $(".mutli-select-mag img").css('display', 'block')
      $("#mag-item").text(value);
      $(this).next('label').addClass('selection');
      $(".mutli-select-mag").parent().parent().parent().siblings('.disabled').remove();
      $(".comp-catfish-checkout").css({'transform' : 'translateY(' + 0 +')', 'visibility': 'visible'});
      $("#pub-submit").attr('disabled', false);
      $("#pub-submit").css('background', '#005DAA');
      $('html, body').animate({
        scrollTop: $('.comp-catfish-checkout').offset().top - 0,
      }, 1000);
    }
  });

  // form submit
  $('.comp-catfish-checkout').on('submit', function (e) {
    e.preventDefault();
    let postObj = {
      publication: $(this).find('input').eq(0).val(),
      magazine: $(this).find('input').eq(1).val(),
    };
    console.lg(postObj, 'Checkout');
  });

  // m1 reselect prompt
  $('#reselect-prompt').on('click', function (e) {
    e.preventDefault();
    // code here
  });
});
