$(function () {
  setCarousel("hc-1");
  // setTaglineHeight();

  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $(".android-badge").hide();
  }

  if (/Android/i.test(navigator.userAgent)) {
    $(".ios-badge").hide();
  }

  $(".catfish-btn").on("click", function () {
    $(".catfish-content-container").slideToggle("fast", "linear");
  });
});
