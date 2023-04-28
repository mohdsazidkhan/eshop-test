// start of lightbox js

// Runtime
$(function () {
  console.log('lightbox loaded');

  window.err = 0;

  $('.package-options input').on('change', function () {
    $('.package-options .term input').each(function () {
      console.log('in loop term');

      if ($(this).is(':checked')) {
        window.err = 0;
        return false;
      } else {
        window.err = window.err + 1;
      }
    });

    $('.package-options .vas input').each(function () {
      console.log('in loop vas');
      if ($(this).is(':checked')) {
        window.err = 0;
        return false;
      } else {
        window.err = window.err + 1;
      }
    });

    if (window.err == 0) {
      $('#proceed-checkout').prop('disabled', false);
    }
  });

  $('#proceed-checkout').on('click', function (e) {
    e.preventDefault();
    if ($('#promo-code').val() == '') {
      $('.checkout-error-server p').text('Please enter a promo code (*sample error)');
      $('.checkout-error-server').addClass('active');

      console.log('in here error');

      $('.right-rail-scroll').animate({
        scrollTop: $(".checkout-error-server").offset().top,
      }, 500);
    } else {
      window.location = "checkout.html";
    }
  });

  $("#saveNewsletter").on('click', function (e) {
    e.preventDefault();
    saveNewsletter();
    return false;
  });

  if ($('#email-prompt').length) {
    $('.lightbox-overlay').show();
  };

  if ($('#renewal-prompt').length) {
    $('.lightbox-overlay').fadeIn(300);
  };
  // staff prompt simulation
  $('#dismiss').on('click', function (e) {
    e.preventDefault();
    let id = '#' + $(this).data("id");
    $(id).removeClass('show');
    $('.lightbox-overlay').hide();

    $('.form-style').each(function () {
      let getId = $(this).children().data('id');
      if (getId == 'The Straits Times') {
        $(this).children().attr('disabled', true);
        $(this).children().html('subscribed');
      };
    });

    $('.stuff-promo').find('.cta-button').eq(0).attr('disabled', true).html('Subscribed');
    $('.cancel').removeAttr("style");
  });

  if ($('.js-stuff-flow').length > 0) {
    $('.cta-button.button-text').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        let getId = $(this).data('id');
        let string = `Would you like to change your current print subscription from The Straits Times to <strong>${getId}</strong>?`;
        $('#renewal-prompt').addClass('show');
        $('.lightbox-body').fadeIn(300);
        $('.lightbox-overlay').fadeIn(300);
        $('.lightbox-footer').hide();
        $('#pub-title').html(getId);
        $('.current-plan').html(string);
      });
    });
  }
});
