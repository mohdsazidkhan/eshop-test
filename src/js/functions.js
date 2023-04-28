// Start of Custom Functions.js

$.fn.digits = function () {
  return this.each(function () {
    $(this).text(
      $(this)
        .text()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    );
  });
};

$.fn.wrapInTag = function (opts) {
  var tag = opts.tag || "strong";
  var words = opts.words || [];
  var regex = RegExp(words.join("|"), "gi");
  var replacement = "<" + tag + ">$&</" + tag + ">";

  return this.html(function () {
    return $(this).html().replace(regex, replacement);
  });
};

// Runtime
$(document).ready(function () {
  respBgswitch();
  solidToGradient();
  solidToGradLeft();
  solidToGradLRight();

  $("#account-logged-in").click(function (e) {
    e.preventDefault();

    if ($(".account-nav").hasClass("show")) {
      $(".top-help-menu").removeClass("show");
      $(".account-nav").removeClass("show");
      $(".helper-box-overlay").hide();
    } else {
      $(".top-help-menu").removeClass("is-active");
      $(".account-nav").addClass("show");
      $(".helper-box-overlay").show();
    }
  });

  $(".comp-user-plan-overview .sub-label").on("click", function () {
    if ($(window).width() < 768) {
      $(".sub-plan").toggleClass("open");
      $(".sub-label").toggleClass("open");
    }
  });

  $(".publication-single").hover(
    function () {
      // var heightOpen =  $(this).find('p.tagline').attr('data-collapse');
      // $(this).find('p.tagline').animate({"height": heightOpen+'px'}, 300);

      if ($(window).width() > 426) {
        $(this).find("p.tagline").slideToggle("fast");

        var brandIcon = $(this).find(".pub-icon img").attr("data-img-clear");
        $(this).find(".pub-icon img").attr("src", brandIcon);
      }
    },
    function () {
      if ($(window).width() > 426) {
        $(this).find("p.tagline").slideToggle("fast");
        var brandIcon = $(this).find(".pub-icon img").attr("data-img");
        $(this).find(".pub-icon img").attr("src", brandIcon);
      }
    }
  );

  $(".dismiss").click(function () {
    $(this).parent().fadeOut(1000);
    if ($(".helper-box-overlay").is(":visible")) {
      $(".helper-box-overlay").removeAttr("style");
    }
  });

  $(".plan-value").click(function () {
    if (isMobScreen()) {
      $(this).toggleClass("active");
    }
  });

  $(".info-toggle").click(function () {
    $(".info-box").fadeOut(50);

    var id = $(this).attr("for");
    if ($("#" + id).css("display") != "block") {
      $("#" + id).fadeIn(300);
    } else {
      $("#" + id).fadeOut(300);
    }
  });

  $(".top-help").click(function () {
    $(".top-help-menu").removeClass("is-active");
    $(".account-nav").removeClass("show");
    if ($(".top-help .top-help-menu").hasClass("is-active")) {
      $(".top-help .top-help-menu").removeClass("is-active");
    } else {
      $(".top-help .top-help-menu").addClass("is-active");
      $(".helper-box-overlay").fadeIn(300);
    }
  });

  $(".lang-switcher").click(function () {
    $(".account-nav").removeClass("show");
    $(".top-help-menu").removeClass("is-active");

    if ($("#cur-lang").attr("changed") == "true") {
      $(".lang-switcher .top-help-menu").removeClass("is-active");
      $(".helper-box-overlay").delay(10).hide();
      $("#cur-lang").attr("changed", "false");
    } else {
      console.log(
        "here there 22" +
          $(".lang-switcher .top-help-menu").hasClass("is-active")
      );
      $(".lang-switcher .top-help-menu").addClass("is-active");
      $(".helper-box-overlay").show();
    }
  });

  $(".lang-switcher .top-help-menu a").click(function () {
    var valLang = $(this).attr("data-val");
    $("#cur-lang").text(valLang);
    $("#cur-lang").attr("changed", "true");
    console.log("run this second");
  });

  $(".main-nav").click(function (e) {
    e.preventDefault();
    $(".top-help-menu").removeClass("is-active");
    $(".account-nav").removeClass("show");
    $(".nav-drop").addClass("active");
    $(".helper-box-overlay").fadeIn(300);
    lockScroll();
  });

  $(".close-menu").click(function (e) {
    e.preventDefault();

    $(".nav-drop").removeClass("active");
    unlockScroll();
  });

  $(".nav-child-item.got-child>a").click(function (e) {
    e.preventDefault();
    $(this).parent().children("ul").fadeToggle(300);
    $(this).toggleClass("active");
  });

  $("#common .overlay").click(function () {
    console.log("run close overlay");
    $("#common").removeClass("show");

    $(".lightbox-overlay").fadeOut(300);
    unlockScroll();
  });

  $(".close-lightbox").click(function () {
    console.log("hello");
    var getID = $(this).attr("for");

    $(".sph-lightbox").removeClass("show");
    $("#" + getID).removeClass("show");
    $(".lightbox-overlay").fadeOut(300);

    unlockScroll();
  });

  $(".product-help").click(function () {
    $(".help-box").fadeToggle(300);
  });

  // $('#proceed-checkout').click(function(e){
  //   e.preventDefault();

  //   window.location = "checkout.html";
  //  });

  $(".multi-select-selected .selected").on("click", function () {
    $(".multi-select-options").fadeToggle(300);
    // $(".helper-box-overlay").fadeToggle(100);
  });

  // remove attr of
  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $(".multi-select-options").removeAttr("style");
    }
  });

  $(".multi-select-options.sub label").on("click", function () {
    var formID = $(this).parents(".multi-select-options").attr("for");

    var getPackageNm = $(this).find(".packageNm").html();
    var getCorsAddr = $(this).find(".cors-addr").html();

    console.log(formID);
    console.log(getCorsAddr);

    $("#" + formID + " .selected .packageNm").html(getPackageNm);
    $("#" + formID + " .selected .cors-addr").html(getCorsAddr);

    $(".multi-select-options").fadeOut(300);

    $(".helper-box-overlay").fadeOut(300);
  });

  $(".comp-promo-accordian-hori .accordian-single .accordian-header").click(
    function () {
      var qid = $(this).attr("for");

      console.log("click on this: " + qid);
      $("#" + qid)
        .find(".accordian-body")
        .slideToggle("fast");
    }
  );

  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $("header").addClass("onScroll");
    } else {
      $("header").removeClass("onScroll");
    }

    if ($(".comp-promo-footer.b").length) {
      console.log("got promo");

      var scrollableElement = document.body; // document.getElementById('scrollableElement');
      var direction;

      scrollableElement.addEventListener(
        "wheel",
        (direction = checkScrollDirection)
      );

      console.log(direction);
    }
  });

  $(".comp-promo-carousel-default .next").click(function () {
    var carId = $(this).attr("for");
    var currentSlide = $("#" + carId)
      .find(".promo-carousel-slide")
      .val();
    var ttlslide = $("#" + carId).find(".promo-carousel-single").length;

    // var getTtlHt = $(".comp-promo-carousel-default").height();

    // var getHt = $("#" + carId).find('.html-content-container').height();
    // console.log(getTtlHt + " vs " + getHt);

    if (currentSlide < ttlslide - 1) {
      currentSlide++;
      console.log(currentSlide + " vs " + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-single")
        .removeClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");

      $("#pcd-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#pcd-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    } else {
      currentSlide = 0;
      console.log(currentSlide + " vs " + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-single")
        .removeClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");

      $("#pcd-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#pcd-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    }

    var componenetHT = $(window).height() * 0.5;
    var header = $("#" + carId)
      .find("h2")
      .outerHeight();

    var getHt =
      $("#pcd-" + currentSlide + " .html-content-container").outerHeight() +
      $("#pcd-" + currentSlide + " .img-container").outerHeight();

    var getTtlHt = $("#" + carId)
      .find(".promo-carousel-container")
      .outerHeight();

    if (getTtlHt < getHt) {
      console.log("more");
      $("#" + carId)
        .find(".promo-carousel-container")
        .outerHeight(getHt);
    } else {
      $("#" + carId)
        .find(".promo-carousel-container")
        .outerHeight(componenetHT);
    }
    console.log(
      header + " vs " + componenetHT + " vs " + getTtlHt + " vs " + getHt
    );
  });

  $(".comp-promo-carousel-default .prev").click(function () {
    var carId = $(this).attr("for");
    console.log("CARID", carId);

    var currentSlide = $("#" + carId)
      .find(".promo-carousel-slide")
      .val();
    console.log(currentSlide, "currentSlide");
    var ttlslide = $("#" + carId).find(".promo-carousel-single").length;

    if (currentSlide > 0) {
      currentSlide--;
      // console.log(currentSlide + ' vs ' + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-single")
        .removeClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");

      $("#pcd-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#pcd-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    } else {
      currentSlide = ttlslide - 1;
      // console.log(currentSlide + ' vs ' + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-single")
        .removeClass("active");

      $("#pcd-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");
      $("#pcd-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    }

    var componenetHT = $(window).height() * 0.5;
    var header = $("#" + carId)
      .find("h2")
      .outerHeight();

    var getHt =
      $("#pcd-" + currentSlide + " .html-content-container").outerHeight() +
      $("#pcd-" + currentSlide + " .img-container").outerHeight();

    var getTtlHt = $("#" + carId)
      .find(".promo-carousel-container")
      .outerHeight();

    if (getTtlHt < getHt) {
      console.log("more");
      $("#" + carId)
        .find(".promo-carousel-container")
        .outerHeight(getHt);
    } else {
      $("#" + carId)
        .find(".promo-carousel-container")
        .outerHeight(componenetHT);
    }
    console.log(
      header + " vs " + componenetHT + " vs " + getTtlHt + " vs " + getHt
    );
  });

  // dots click to slide
  $(".bt .circ-thb").each(function (i) {
    $(this).click(function () {
      var carId = "comp-promo-corp-plans-testimony";
      // remove dots ative
      $(".comp-promo-carousel-default .circ-thb").removeClass("active");
      $(this).addClass("active");

      $("#" + carId)
        .find(".promo-carousel-single")
        .removeClass("active");
      $("#pcd-" + i).addClass("active");

      console.log($(this).attr("id"), "i am click");
    });
  });

  $(".comp-promo-carousel-image .next").click(function () {
    var carId = $(this).attr("for");
    console.log("CARID-next", carId);
    var currentSlide = $("#" + carId)
      .find(".promo-carousel-slide")
      .val();
    consolo.log(currentSlide, "currentSlide-next");
    var ttlslide = $("#" + carId).find(".promo-carousel-image-single").length;
    console.log("hello:" + carId);
    if (currentSlide < ttlslide - 1) {
      currentSlide++;
      console.log(currentSlide + " vs " + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-image-single")
        .removeClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");

      $("#pci-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#pci-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    } else {
      currentSlide = 0;
      console.log(currentSlide + " vs " + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-image-single")
        .removeClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");

      $("#pci-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#pci-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    }
  });

  $(".comp-promo-carousel-image .prev").click(function () {
    var carId = $(this).attr("for");
    var currentSlide = $("#" + carId)
      .find(".promo-carousel-slide")
      .val();
    var ttlslide = $("#" + carId).find(".promo-carousel-image-single").length;

    if (currentSlide > 0) {
      currentSlide--;
      console.log(currentSlide + " vs " + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-image-single")
        .removeClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");

      $("#pci-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#pci-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    } else {
      currentSlide = ttlslide - 1;
      console.log(currentSlide + " vs " + ttlslide);
      $("#" + carId)
        .find(".promo-carousel-image-single")
        .removeClass("active");
      $("#" + carId)
        .find(".circ-thb")
        .removeClass("active");

      $("#pci-thb-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#pci-" + currentSlide)
        .delay(500)
        .addClass("active");
      $("#" + carId)
        .find(".promo-carousel-slide")
        .val(currentSlide);
    }
  });

  $(".comp-promo-carousel-waterwheel .next").click(function () {
    var carId = $(this).attr("for");
    var currentSlide = $("#" + carId)
      .find(".promo-carousel-slide")
      .val();
    var ttlslide = $("#" + carId).find(
      ".promo-carousel-waterwheel-single"
    ).length;

    var prevSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.prev-item")
      .attr("id");
    var lastSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.last-item")
      .attr("id");
    var activeSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.active")
      .attr("id");
    var firstSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.first-item")
      .attr("id");
    var nextSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.next-item")
      .attr("id");

    var newNext = "";
    if (parseInt(currentSlide) + 3 >= ttlslide) {
      newNext = "pcw-" + (parseInt(currentSlide) - 3);
    } else {
      newNext = "pcw-" + (parseInt(currentSlide) + 3);
    }
    console.log(
      "active:" +
        newNext +
        " vs " +
        (parseInt(currentSlide) + 3) +
        " vs " +
        ttlslide
    );

    $("#" + prevSlide).removeClass("prev-item");
    $("#" + lastSlide)
      .removeClass("last-item")
      .addClass("prev-item");
    $("#" + activeSlide)
      .removeClass("active")
      .addClass("last-item");
    $("#" + firstSlide)
      .removeClass("first-item")
      .addClass("active");
    $("#" + nextSlide)
      .removeClass("next-item")
      .addClass("first-item");
    $("#" + newNext).addClass("next-item");

    console.log("after:" + currentSlide);

    if (currentSlide < ttlslide - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    $("#" + carId)
      .find(".circ-thb")
      .removeClass("active");
    $("#pcw-thb-" + parseInt(currentSlide + 1))
      .delay(500)
      .addClass("active");
    $("#" + carId)
      .find(".promo-carousel-slide")
      .val(currentSlide);
  });

  $(".comp-promo-carousel-waterwheel .prev").click(function () {
    var carId = $(this).attr("for");
    var currentSlide = $("#" + carId)
      .find(".promo-carousel-slide")
      .val();
    var ttlslide = $("#" + carId).find(
      ".promo-carousel-waterwheel-single"
    ).length;

    var prevSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.prev-item")
      .attr("id");
    var lastSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.last-item")
      .attr("id");
    var activeSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.active")
      .attr("id");
    var firstSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.first-item")
      .attr("id");
    var nextSlide = $("#" + carId)
      .find(".promo-carousel-waterwheel-single.next-item")
      .attr("id");

    console.log(
      "current : " +
        currentSlide +
        " | condition : " +
        (parseInt(currentSlide) + 3)
    );

    var newNext = "";
    if (parseInt(currentSlide) - 3 >= 0) {
      newNext = "pcw-" + (parseInt(currentSlide) - 3);
    } else {
      newNext = "pcw-" + (parseInt(currentSlide) + 3);
    }
    console.log(
      "newNext:" +
        newNext +
        " vs " +
        Math.abs(parseInt(currentSlide) - 3) +
        " vs " +
        ttlslide
    );

    $("#" + nextSlide).removeClass("next-item");
    $("#" + firstSlide)
      .removeClass("first-item")
      .addClass("next-item");
    $("#" + activeSlide)
      .removeClass("active")
      .addClass("first-item");
    $("#" + lastSlide)
      .removeClass("last-item")
      .addClass("active");
    $("#" + prevSlide)
      .removeClass("prev-item")
      .addClass("last-item");
    $("#" + newNext).addClass("prev-item");

    console.log("after:" + currentSlide);

    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = ttlslide - 1;
    }

    $("#" + carId)
      .find(".circ-thb")
      .removeClass("active");
    $("#pcw-thb-" + parseInt(currentSlide + 1))
      .delay(500)
      .addClass("active");
    $("#" + carId)
      .find(".promo-carousel-slide")
      .val(currentSlide);
  });

  $(".slide-container.next").click(function () {
    clearInterval(window.runInterval);

    var carId = $(this).attr("for");

    var slideWidth = $("#" + carId)
      .find(".single-carousel")
      .width();
    var blockWidth = $("#" + carId)
      .find(".carousel-block")
      .width();
    var maxCnt = $("#" + carId).find(".single-carousel").length;
    var cntCount = $("#" + carId)
      .find(".current-slide")
      .val();

    if (cntCount < maxCnt) {
      $("#" + carId)
        .find(".carousel-wrapper")
        .animate(
          {
            marginLeft: "-=" + slideWidth + "px",
          },
          300
        );

      $(".dash-thb").removeClass("active");
      cntCount++;
    } else {
      $("#" + carId)
        .find(".carousel-wrapper")
        .animate(
          {
            marginLeft: "0px",
          },
          300
        );
      $(".dash-thb").removeClass("active");
      cntCount = 1;
    }
    $("#" + carId)
      .find(".current-slide")
      .val(cntCount);

    $(
      "#thb-" +
        $("#" + carId)
          .find(".current-slide")
          .val()
    ).addClass("active");
    // window.runInterval = setInterval(function () {
    //   slideshowHero();
    // }, 4000);
  });

  $(".slide-container.prev").click(function () {
    clearInterval(window.runInterval);
    var carId = $(this).attr("for");

    var slideWidth = $("#" + carId)
      .find(".single-carousel")
      .width();
    var blockWidth = $("#" + carId)
      .find(".carousel-block")
      .width();
    var maxCnt = $("#" + carId).find(".single-carousel").length;
    var cntCount = $("#" + carId)
      .find(".current-slide")
      .val();

    var maxPos =
      $("#" + carId)
        .find(".carousel-wrapper")
        .width() -
      slideWidth * 2;

    if (cntCount > 1) {
      $("#" + carId)
        .find(".carousel-wrapper")
        .animate(
          {
            marginLeft: "+=" + slideWidth + "px",
          },
          300
        );

      $(".dash-thb").removeClass("active");

      cntCount--;
    } else {
      console.log(maxPos);
      $("#" + carId)
        .find(".carousel-wrapper")
        .animate(
          {
            marginLeft: "-" + slideWidth * (maxCnt - 1) + "px",
          },
          300
        );

      $(".dash-thb").removeClass("active");

      cntCount = maxCnt;
    }

    $("#" + carId)
      .find(".current-slide")
      .val(cntCount);

    $(
      "#thb-" +
        $("#" + carId)
          .find(".current-slide")
          .val()
    ).addClass("active");

    window.runInterval = setInterval(function () {
      slideshowHero();
    }, 4000);
  });

  $(".comp-hero-carousel .dash-cont").on("click", function () {
    var id = $(this).attr("for");
    var ind = id.replace("hcs-", "");

    var slideWidth = $(this)
      .parents(".carousel-container")
      .find(".single-carousel")
      .width();

    var distMargin = (parseInt(ind) - 1) * slideWidth;

    $(this)
      .parents(".carousel-container")
      .find(".carousel-wrapper")
      .animate(
        {
          marginLeft: "-" + distMargin + "px",
        },
        300
      );

    $(".dash-thb").removeClass("active");
    $("#thb" + ind).addClass("active");

    $(".current-slide").val(ind);
    console.log(ind + " x " + distMargin);
  });

  $(".single-action").click(function () {
    var gerID = $(this).attr("id");

    $(".action-inner-menu[for=" + gerID).fadeIn(300);
  });

  $(".close-button").click(function () {
    var gerID = $(this).attr("for");

    $(".action-inner-menu[for=" + gerID).fadeOut(300);
  });

  $(".overlayer").click(function () {
    var gerID = $(this).attr("for");

    $(".action-inner-menu[for=" + gerID).fadeOut(300);
  });

  $(".dropbtn").click(function () {
    var getID = $(this).attr("for").replace("pro-", "");
    console.log("got-in " + getID);
    $("#share-" + getID).fadeIn(300);
    $(".helper-box-overlay").fadeIn(300);
  });

  $(".helper-box-overlay").click(function () {
    $(".dropdown-content").fadeOut(100);
    $(".prompt.login").fadeOut(100);
    $(".top-help-menu").removeClass("is-active");

    $(".nav-drop").removeClass("active");
    $(".account-nav").removeClass("show");
    $(".multi-select-options").fadeOut(300);
    $(".helper-box-overlay").fadeOut(100);

    if ($(window).width() < 426) {
      $(".comp-user-plan-overview").find(".card-body").slideUp("fast");
    } else {
      $(".comp-user-plan-overview").find(".sub-details ").slideUp("fast");
      $(".comp-user-plan-overview").find(".helper-liner ").slideUp("fast");
    }
    $(".comp-user-plan-overview").find(".toggle-arr").removeClass("open");

    unlockScroll();
  });

  $(".comp-hero-carousel .carousel-container").on("swipeleft", function () {
    clearInterval(window.runInterval);

    var carId = $(this).attr("for");
    var len = $("#" + carId).find(".single-carousel").length;

    var cntCount = $("#" + carId)
      .find(".current-slide")
      .val();

    if ($(window).width() < 1025) {
      var padding =
        parseFloat(
          $("#" + carId)
            .find(".single-carousel")
            .css("paddingLeft")
            .replace("px", "")
        ) +
        parseFloat(
          $("#" + carId)
            .find(".single-carousel")
            .css("paddingRight")
            .replace("px", "")
        );

      var calSwipeWidth = $("#" + carId)
        .find(".single-carousel")
        .width();

      var limitRight =
        $("#" + carId)
          .find(".carousel-wrapper")
          .width() -
        (calSwipeWidth + 2 * len);

      var position = $("#" + carId)
        .find(".carousel-wrapper")
        .css("marginLeft");
      var mrn = Math.abs(parseFloat(position.replace("px", "")));

      console.log(mrn + " vs " + limitRight + " vs " + calSwipeWidth);

      if (mrn < limitRight) {
        $("#" + carId)
          .find(".carousel-wrapper")
          .animate(
            {
              "margin-left": "-=" + calSwipeWidth + "px",
            },
            300
          );
        cntCount++;

        var blockObj = $("#" + carId).find(".carousel-block");
        $("#" + carId)
          .find(".carousel-block")
          .animate(
            {
              marginLeft: "+=" + blockObj.width() + "px",
            },
            300
          );
      }
      $("#" + carId)
        .find(".current-slide")
        .val(cntCount);

      window.runInterval = setInterval(function () {
        slideshowHero();
      }, 4000);
    }
  });

  $(".comp-hero-carousel .carousel-container").on("swiperight", function () {
    clearInterval(window.runInterval);
    var carId = $(this).attr("for");

    console.log(carId);
    // var actualRightLimit = -limitRight * (len - 1);
    var cntCount = $("#" + carId)
      .find(".current-slide")
      .val();
    if ($(window).width() < 1025) {
      var padding =
        parseFloat(
          $("#" + carId)
            .find(".single-carousel")
            .css("paddingLeft")
            .replace("px", "")
        ) +
        parseFloat(
          $("#" + carId)
            .find(".single-carousel")
            .css("paddingRight")
            .replace("px", "")
        );

      var calSwipeWidth = $("#" + carId)
        .find(".single-carousel")
        .width();
      var position = $("#" + carId)
        .find(".carousel-wrapper")
        .css("marginLeft");

      var mrn = parseFloat(position.replace("px", ""));

      console.log(
        "swipe right : " +
          $("#" + carId)
            .find(".carousel-wrapper")
            .css("marginLeft") +
          event.target
      );

      if (mrn < -1) {
        $("#" + carId)
          .find(".carousel-wrapper")
          .animate(
            {
              marginLeft: "+=" + calSwipeWidth + "px",
            },
            300
          );
        cntCount--;

        var blockObj = $("#" + carId).find(".carousel-block");

        $("#" + carId)
          .find(".carousel-block")
          .animate(
            {
              marginLeft: "-=" + blockObj.width() + "px",
            },
            300
          );
      }
      $("#" + carId)
        .find(".current-slide")
        .val(cntCount);

      window.runInterval = setInterval(function () {
        slideshowHero();
      }, 4000);
    }
  });

  $(".radio-actions select").change(function () {
    var getHeight = $(".radio-img-placeholder").height();
    var getStation = $(this).val();

    $(".radio-img-placeholder").removeClass("active");
    $(".radio-img-placeholder[for=" + getStation + "]").addClass("active");
  });

  $(".accodian-questions-container #accordian-ll-btn").click(function (e) {
    console.log(e.target.innerHTML, "thss");
    e.preventDefault();

    $(".accordian-single.rest").fadeToggle(300);
    // chnage text
    if (e.target.innerHTML == "Load more") {
      e.target.innerHTML = "Load less";
    } else if (e.target.innerHTML == "Load less") {
      e.target.innerHTML = "Load more";
    }
  });

  // corp-plans-skect
  $(".select-selected").click(function (e) {
    console.log(e, "jquery click gen code");
    /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });

  // Tab panel methods

  $(".tab-header .nav-item .nav-link").on("click", function (e) {
    var targetID = $(this).attr("aria-controls");
    console.log("clicked for", targetID);

    if ($(this).attr("aria-selected") === "false") {
      console.log($(this).parent());
      $(".tab-header .nav-item").removeClass("active");
      $(".tab-header .nav-item .nav-link").attr("aria-selected", "false");

      $("#" + targetID + "-tab")
        .parent()
        .addClass("active");
      $(this).attr("aria-selected", "true");

      showTabContent(targetID);
    }
  });

  $(".tt-toggle").on("click", function () {
    var targetID = $(this).attr("for");
    var getPos = $("#" + targetID).offset();
    console.log("getPos.left", getPos.left);
    if (getPos.left < 16) {
      $("#" + targetID).removeClass("left");
      $("#" + targetID).addClass("right");
    } else {
      $("#" + targetID).removeClass("right");
      $("#" + targetID).addClass("left");
    }

    if ($("#" + targetID).hasClass("show")) {
      $("#" + targetID).removeClass("show");
    } else {
      $(".tt-box").removeClass("show");
      $("#" + targetID).addClass("show");
    }
  });
});

$(window).resize(function () {
  setCarousel("hc-1");
  respBgswitch();
});

function lockScroll () {
  // lock scroll position, but retain settings for later
  window.scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop,
  ];
  window.html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
}

function getEffectiveDate (startDt, days) {
  var dt = new Date(startDt);
  dt.setDate(dt.getDate() + days); // add 30 days

  return dt;
}

function unlockScroll () {
  // un-lock scroll position
  window.html = jQuery("html");
  window.scrollPosition = html.data("scroll-position");
  html.css("overflow", "auto");
}

// Common Functions
function isMobScreen () {
  if ($(window).width() < 426) {
    return true;
  } else {
    return false;
  }
}

function respBgswitch () {
  if ($(window).width() < 480) {
    if ($(".resp-bg").length > 0) {
      $(".resp-bg").each(function (i) {
        $(this).css({
          "background-image": "url(" + $(this).attr("data-mob-bg") + ")",
        });
      });
    }

    if ($(".resp-img").length > 0) {
      $(".resp-img").each(function (i) {
        $(this).attr("src", $(this).attr("data-mob-bg"));
      });
    }
  } else if ($(window).width() < 768) {
    if ($(".resp-bg").length > 0 && $(".resp-bg").hasClass("bt")) {
      $(".resp-bg").each(function (i) {
        $(this).css({
          "background-image": "url(" + $(this).attr("data-mob-bg") + ")",
        });
      });
    }
  } else {
    if ($(".resp-bg").length > 0) {
      $(".resp-bg").each(function (i) {
        $(this).css({
          "background-image": "url(" + $(this).attr("data-des-bg") + ")",
        });
      });
    }

    if ($(".resp-img").length > 0) {
      $(".resp-img").each(function (i) {
        $(this).attr("src", $(this).attr("data-des-bg"));
      });
    }
  }

  // console.log($('.hero-image-bg').css('background-image') + " vs " + $('.hero-image-bg').attr('data-mob-bg'));
}

function setTaglineHeight () {
  $("p.tagline").each(function () {
    $(this).attr("data-collapse", $("p.tagline").height());
    $(this).height(0);
  });
}

// tab functions

function showTabContent (tid) {
  $(".tab-pane").removeClass("active");
  $("#" + tid).addClass("active");
}

function setCarousel (id) {
  var car = $("#" + id);

  var len = car.find(".single-carousel").length;

  car.find(".single-carousel").width(car.find(".carousel-container").width);
  var singleWidth = Math.ceil(car.find(".single-carousel").outerWidth()) + 1;
  car.find(".carousel-wrapper").width(singleWidth * len);

  console.log(car.find(".single-carousel").width());

  var scaleLen = car.find(".carousel-scale").width();

  car.find(".carousel-block").width(scaleLen / len);
}

function setFullCarousel (id) {
  var car = $("#" + id);

  var len = car.find(".single-carousel").length;
  var limitRight = car.find(".single-carousel").outerWidth() + 1;
  var marginLeft = car.find(".single-carousel").css("marginLeft");
  var offset = parseFloat(marginLeft.replace("px", "")) * 2;
  var counter = 0;
  car.find(".full-carousel-wrapper").width((limitRight + offset) * len);

  if ($(window).width() > 0) {
    counter = limitRight + offset;
  }

  if ($(window).width() > 415) {
    offset = offset * 2;
    counter = limitRight * 2 + offset;
  }
  console.log(limitRight + offset);

  console.log(
    "full-carl: " +
      car.find(".full-carousel-wrapper").width() +
      "counter: " +
      counter
  );
  var wrapperWidth = Math.ceil(
    car.find(".full-carousel-wrapper").width() / counter
  );
  var scaleLen = car.find(".carousel-scale").width();

  car.find(".carousel-block").width(scaleLen / wrapperWidth);
}

function setContCarousel (id) {
  var car = $("#" + id);

  var len = car.find(".single-carousel").length;
  var limitRight = car.find(".single-carousel").outerWidth();
  var marginLeft = car.find(".single-carousel").css("marginRight");
  var offset = parseFloat(marginLeft.replace("px", ""));

  car.find(".carousel-wrapper").width((limitRight + offset) * len);

  var wrapperWidth = Math.ceil(
    car.find(".carousel-wrapper").width() /
      car.find(".carousel-container").width()
  );

  console.log(wrapperWidth);
  var scaleLen = car.find(".carousel-scale").width();
  if ($(window).width() < 414) {
    car.find(".carousel-block").width(scaleLen / len);
  } else {
    car.find(".carousel-block").width(scaleLen / wrapperWidth);
  }
}

function inputOnFocus (inputNm) {
  var inputID = inputNm.attr("id");
  var inputType = inputNm.attr("type");

  if (inputType == "text" || inputType == "number") {
    $("label[for='" + inputID + "']").css({
      color: "#0C2B57",
      "background-color": "#fff",
    });
    $("label[for='" + inputID + "']").animate(
      {
        top: "0px",
        left: "25px",
        zoom: "80%",
      },
      300
    );
  }
}

function inputOffFocus (inputNm) {
  var inputID = inputNm.attr("id");
  var inputType = inputNm.attr("type");

  if (inputType == "text" || inputType == "number") {
    if (inputNm.val() == "") {
      $("label[for='" + inputID + "']").css({
        color: "#d8d8d8",
        "background-color": "#fff",
      });
      $("label[for='" + inputID + "']").animate(
        {
          top: "50%",
          left: "15px",
          zoom: "100%",
        },
        300
      );
    } else {
      $("label[for='" + inputID + "']").css("color", "#d8d8d8");
    }
  }
}

function getRand (d) {
  console.log(d);
  return Math.floor(Math.random() * d.length) + 1;
}

function formatDate (ts) {
  var d = new Date(ts);

  // console.log(d);
  var datestring =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " | " +
    d.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  // d.getHours() + ":" + d.getMinutes();

  return datestring;
}

function checkSelectedField (id) {
  var getValue = $("#" + id + " option:selected").val();
  var result;
  if (!getValue) {
    $("#" + id + "-err").text(
      "This field cannot be empty. Please select a category"
    );
    $("#" + id + "-err").fadeIn(300);
    $("#" + id).addClass("error");
    $("#" + id).attr("data-err", "1");
    result = false;
  } else {
    $("#" + id + "-err").fadeOut(300);
    $("#" + id).removeClass("error");
    $("#" + id).attr("data-err", "0");
    result = true;
  }
  return result;
}

function getMailingAddr (pos, id, rid) {
  console.log(pos + " " + id + " " + rid);

  var apiurl =
    "https://developers.onemap.sg/commonapi/search?searchVal=" +
    pos +
    "&returnGeom=N&getAddrDetails=Y";
  $(".loading-ani").fadeIn(100);
  $.getJSON(apiurl, function (data) {
    console.log(data);
    // wad u wanna do here?
  })
    .done(function (data) {
      console.log(data.found);
      $(".loading-ani").fadeOut(100);
      if (data.found > 0) {
        var rdNm = data.results[0].ROAD_NAME.toLowerCase().replace(
          /\b[a-z]/g,
          function (txtVal) {
            return txtVal.toUpperCase();
          }
        );
        var strAddr = data.results[0].BLK_NO + " " + rdNm + " ";

        $("#" + id + "-err").text("");
        $("#" + rid).val(strAddr);
        $("#" + rid).removeClass("error");
        $("#" + rid).addClass("valid");
        $("#" + id + "-err").fadeOut(300);
        $("#" + rid + "-err").fadeOut(300);
        $("#" + id).removeClass("error");
        $("#" + rid).attr("data-err", 0);
        $("#" + rid).attr("disabled", false);
      } else {
        $("#" + id + "-err").text(
          "This postal code is not valid. Please enter another."
        );
        $("#" + id + "-err").fadeIn(300);
        $("#" + rid).val("");
        $("#" + id).addClass("error");
        $("#" + rid).removeClass("valid");
        $("#" + rid).attr("data-err", 1);
      }
    })
    .fail(function () {
      console.log("error");
    })
    .always(function () {
      console.log("complete");
    });
}

function checkEmptyField (id) {
  if (validator.isEmpty($("#" + id).val())) {
    $("#" + id + "-err").text(
      "This field cannot be empty. Please fill up this field."
    );
    $("#" + id + "-err").fadeIn(300);
    $("#" + id).addClass("error");
    $("#" + id).attr("data-err", "1");
    result = false;
  } else {
    $("#" + id + "-err").hide();
    $("#" + id).removeClass("error");
    $("#" + id).attr("data-err", "0");
    result = true;
  }
  return result;
}

function checkLength (id, lenMin, lenMax, fldType) {
  var result;
  if (
    validator.isLength($("#" + id).val(), {
      min: lenMin,
      max: lenMax,
    })
  ) {
    $("#" + id + "-err").fadeOut(300);
    $("#" + id).removeClass("error");
    $("#" + id).attr("data-err", "0");
    result = true;
  } else {
    console.log("errr" + id);
    $("#" + id + "-err").text("Please enter the valid " + fldType);
    $("#" + id + "-err").fadeIn(300);
    $("#" + id).addClass("error");

    $("#" + id).attr("data-err", "1");
    result = false;
  }
  return result;
}

function checkNumericFieldSolo (id) {
  var result;
  if (validator.isNumeric($("#" + id).val(), true)) {
    $("#" + id + "-err").fadeOut(300);
    $("#" + id).removeClass("error");
    $("#" + id).attr("data-err", "0");
    result = true;
  } else {
    $("#" + id + "-err").text("Please enter a valid contact number.");
    $("#" + id + "-err").fadeIn(300);
    $("#" + id).addClass("error");
    $("#" + id).attr("data-err", "1");
    result = false;
  }
  return result;
}

function checkSGMobile (id) {
  var result;
  var userNoArr = $("#" + id)
    .val()
    .split("");
  if (userNoArr[0] == "6" || userNoArr[0] == "8" || userNoArr[0] == "9") {
    $("#" + id + "-err").fadeOut(300);
    $("#" + id).removeClass("error");
    $("#" + id).attr("data-err", "0");
    result = true;
  } else {
    $("#" + id + "-err").text(
      "Invalid format. Please enter a valid Mobile No."
    );
    $("#" + id + "-err").fadeIn(300);
    $("#" + id).addClass("error");
    $("#" + id).attr("data-err", "1");
    result = false;
  }
  return result;
}

function checkNumericFieldPair (id) {
  var result;
  if (validator.isNumeric($("#" + id).val(), true)) {
    $("#" + id + "-err").fadeIn(300);
    $("#" + id).removeClass("error");
    result = true;
  } else {
    $("#" + id).addClass("error");
    result = false;
  }
  return result;
}

function checkPairNumeric (id, errID) {
  if (!validator.isNumeric($("#" + id).val(), true)) {
    $("#" + errID + "-err").text("Invalid format. Please enter only numbers");
    $("#" + errID + "-err").fadeIn(300);
    $("#" + id).addClass("error");
    $("#" + id).attr("data-err", 1);
    result = true;
  } else {
    $("#" + errID + "-err").fadeOut(300);
    $("#" + id).removeClass("error");
    $("#" + id).attr("data-err", 0);
    result = false;
  }

  return result;
}

function checkhouseNo (id) {
  if (!checkEmptyField(id + "-floor") || !checkEmptyField(id + "-unit")) {
    $("#" + id + "-house-err").text(
      "This field cannot be empty. Please fill up this field."
    );
    $("#" + id + "-house-err").fadeIn(300);
    $("#" + id + "-floor").addClass("error");
    $("#" + id + "-unit").addClass("error");
    $("#" + id + "-floor").attr("data-err", "1");
    $("#" + id + "-unit").attr("data-err", "1");
  } else {
    if (
      !checkNumericFieldPair(id + "-floor") ||
      !checkNumericFieldPair(id + "-unit")
    ) {
      $("#" + id + "-house-err").text(
        "Invalid format. Please enter only numbers"
      );
      $("#" + id + "-house-err").fadeIn(300);
      $("#" + id + "-floor").addClass("error");
      $("#" + id + "-unit").addClass("error");
      $("#" + id + "-floor").attr("data-err", "1");
      $("#" + id + "-unit").attr("data-err", "1");
    } else {
      $("#" + id + "-house-err").animate(
        {
          opacity: "0 ",
        },
        300
      );
      $("#" + id + "-floor").removeClass("error");
      $("#" + id + "-unit").removeClass("error");
      $("#" + id + "-floor").attr("data-err", "0");
      $("#" + id + "-unit").attr("data-err", "0");
    }
  }
}

function checkPairEmpty (id, errID) {
  if (!checkEmptyField(id)) {
    console.log("id, errID" + id + " | " + errID);
    $("#" + errID + "-err").text(
      "This field cannot be empty. Please fill up this field."
    );
    $("#" + errID + "-err").fadeIn(300);
    $("#" + id).addClass("error");
    $("#" + id).attr("data-err", "1");

    return false;
  } else {
    $("#" + errID + "-err").fadeOut(300);
    $("#" + id).removeClass("error");
    $("#" + id).attr("data-err", "0");

    return true;
  }
}

function checkName (id) {
  if (
    !checkEmptyField(id + "-first-name") ||
    !checkEmptyField(id + "-last-name")
  ) {
    console.log("check in");
    $("#" + id + "-name-err").text(
      "This field cannot be empty. Please fill up this field."
    );
    $("#" + id + "-name-err").fadeIn(300);
    $("#" + id + "-first-name").addClass("error");
    $("#" + id + "-last-name").addClass("error");
    $("#" + id + "-first-name").attr("data-err", "1");
    $("#" + id + "-last-name").attr("data-err", "1");
  } else {
    $("#" + id + "-err").fadeOut(300);
    $("#" + id + "-first-name").removeClass("error");
    $("#" + id + "-last-name").removeClass("error");
    $("#" + id + "-first-name").attr("data-err", "0");
    $("#" + id + "-last-name").attr("data-err", "0");
  }
}

function checkEmailField (id) {
  var result;
  if (validator.isEmail($("#" + id).val())) {
    $("#" + id + "-err").fadeOut(300);
    $("#" + id).attr("data-err", "0");
    result = true;
  } else {
    $("#" + id + "-err").text("Please enter a valid email address.");
    $("#" + id + "-err").fadeIn(300);
    $("#" + id).attr("data-err", "1");
    result = false;
  }
  return result;
}

function checkCheckedBox (id, formId) {
  var result;
  $(id).each(function () {
    if ($(this).is(":checked")) {
      if ($(formId)) {
        $(formId).hide();
      }
      $(id).attr("data-err", "0");
      console.log("checked", $(id).attr("data-err"));
      result = true;
    } else {
      if ($(formId)) {
        $(formId).show();
      }
      $(id).attr("data-err", "1");
      console.log("not-checked");
      result = false;
    }

    $(this).on("change", function () {
      if ($(this).is(":checked")) {
        if ($(formId)) {
          $(formId).hide();
        }
        $(id).attr("data-err", "0");
        console.log("checked", $(id).attr("data-err"));
        result = true;
      } else {
        if ($(formId)) {
          $(formId).show();
        }
        $(id).attr("data-err", "1");
        console.log("not-checked");
        result = false;
      }
      console.log(result, "check result");
      return result;
    });
  });
}

function getWideImg (imgUrl) {
  var newImg = imgUrl.split(".jpg");
  console.log(newImg[0]);

  return newImg[0] + "-wide.jpg";
}

function solidToGradient () {
  if ($(".center .hex-rgba").length > 0) {
    $(".center .hex-rgba").each(function (i) {
      $(this).css({
        "background-image":
          "linear-gradient(to top, " +
          convertHex($(this).attr("bgColor"), 100) +
          " 0%, " +
          convertHex($(this).attr("bgColor"), 0) +
          " 80%)",
      });

      console.log(
        "linear-gradient(to top, " +
          convertHex($(this).attr("bgColor"), 100) +
          " 0%, " +
          convertHex($(this).attr("bgColor"), 0) +
          " 80%)"
      );
    });
  }
}

function solidToGradLeft () {
  if ($(".hex-rgba-left").length > 0) {
    $(".hex-rgba-left").each(function (i) {
      $(this).css({
        "background-image":
          "linear-gradient(to right, " +
          convertHex($(this).attr("bgColor"), 100) +
          " 40%, " +
          convertHex($(this).attr("bgColor"), 0) +
          " 80%)",
      });

      console.log(
        "linear-gradient(to top, " +
          convertHex($(this).attr("bgColor"), 100) +
          " 0%, " +
          convertHex($(this).attr("bgColor"), 0) +
          " 80%)"
      );
    });
  }
}

function solidToGradLRight () {
  if ($(".hex-rgba-right").length > 0) {
    $(".hex-rgba-right").each(function (i) {
      $(this).css({
        "background-image":
          "linear-gradient(to left, " +
          convertHex($(this).attr("bgColor"), 100) +
          " 40%, " +
          convertHex($(this).attr("bgColor"), 0) +
          " 80%)",
      });

      console.log(
        "linear-gradient(to top, " +
          convertHex($(this).attr("bgColor"), 100) +
          " 0%, " +
          convertHex($(this).attr("bgColor"), 0) +
          " 80%)"
      );
    });
  }
}

function convertHex (hex, opacity) {
  hex = hex.replace("#", "");
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  return result;
}

// Content Functions

function slideshowHero () {
  var carId = $(".comp-hero-carousel .carousel-container").attr("for");
  var blockWidth = $("#" + carId)
    .find(".carousel-block")
    .width();
  var maxCnt = $("#" + carId).find(".single-carousel").length;
  var cntCount = $("#" + carId)
    .find(".current-slide")
    .val();
  var slideWidth = 0;

  if ($(window).width() < 415) {
    slideWidth = $("#" + carId)
      .find(".single-carousel")
      .width();
  } else {
    slideWidth =
      $("#" + carId)
        .find(".single-carousel")
        .width() + 1;
  }
  if (cntCount < maxCnt) {
    $("#" + carId)
      .find(".carousel-wrapper")
      .animate(
        {
          marginLeft: "-=" + slideWidth + "px",
        },
        300
      );
    $("#" + carId)
      .find(".carousel-block")
      .animate(
        {
          marginLeft: "+=" + blockWidth + "px",
        },
        300
      );
    cntCount++;
  } else {
    $("#" + carId)
      .find(".carousel-wrapper")
      .animate(
        {
          marginLeft: "0px",
        },
        300
      );
    $("#" + carId)
      .find(".carousel-block")
      .animate(
        {
          marginLeft: "0px",
        },
        300
      );
    cntCount = 1;
  }
  $("#" + carId)
    .find(".current-slide")
    .val(cntCount);
}

$(window).on("load", function () {
  console.log("runn on load");
  $(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");

  // if ($(".prompt.login").length) {
  //   $(".prompt.login").delay(3000).fadeIn(1000);
  //   $(".helper-box-overlay").delay(3000).fadeIn(1000);
  // }
});

var countryCode = [
  {
    countryName: "Afghanistan",
    code: "AF",
    phoneCode: "93",
  },
  {
    countryName: "Åland Islands",
    code: "AX",
    phoneCode: "358",
  },
  {
    countryName: "Albania",
    code: "AL",
    phoneCode: "355",
  },
  {
    countryName: "Algeria",
    code: "DZ",
    phoneCode: "213",
  },
  {
    countryName: "American Samoa",
    code: "AS",
    phoneCode: "1684",
  },
  {
    countryName: "Andorra",
    code: "AD",
    phoneCode: "376",
  },
  {
    countryName: "Angola",
    code: "AO",
    phoneCode: "244",
  },
  {
    countryName: "Anguilla",
    code: "AI",
    phoneCode: "1264",
  },
  {
    countryName: "Antigua and Barbuda",
    code: "AG",
    phoneCode: "1268",
  },
  {
    countryName: "Argentina",
    code: "AR",
    phoneCode: "54",
  },
  {
    countryName: "Armenia",
    code: "AM",
    phoneCode: "374",
  },
  {
    countryName: "Aruba",
    code: "AW",
    phoneCode: "297",
  },
  {
    countryName: "Australia",
    code: "AU",
    phoneCode: "61",
  },
  {
    countryName: "Austria",
    code: "AT",
    phoneCode: "43",
  },
  {
    countryName: "Azerbaijan",
    code: "AZ",
    phoneCode: "994",
  },
  {
    countryName: "Bahamas",
    code: "BS",
    phoneCode: "1242",
  },
  {
    countryName: "Bahrain",
    code: "BH",
    phoneCode: "973",
  },
  {
    countryName: "Bangladesh",
    code: "BD",
    phoneCode: "880",
  },
  {
    countryName: "Barbados",
    code: "BB",
    phoneCode: "1246",
  },
  {
    countryName: "Belarus",
    code: "BY",
    phoneCode: "375",
  },
  {
    countryName: "Belgium",
    code: "BE",
    phoneCode: "32",
  },
  {
    countryName: "Belize",
    code: "BZ",
    phoneCode: "501",
  },
  {
    countryName: "Benin",
    code: "BJ",
    phoneCode: "229",
  },
  {
    countryName: "Bermuda",
    code: "BM",
    phoneCode: "1441",
  },
  {
    countryName: "Bhutan",
    code: "BT",
    phoneCode: "975",
  },
  {
    countryName: "Bolivia",
    code: "BO",
    phoneCode: "591",
  },
  {
    countryName: "Bosnia and Herzegovina",
    code: "BA",
    phoneCode: "387",
  },
  {
    countryName: "Botswana",
    code: "BW",
    phoneCode: "267",
  },
  {
    countryName: "Brazil",
    code: "BR",
    phoneCode: "55",
  },
  {
    countryName: "British Indian Ocean Territory",
    code: "IO",
    phoneCode: "246",
  },
  {
    countryName: "British Virgin Islands",
    code: "VG",
    phoneCode: "1284",
  },
  {
    countryName: "Brunei",
    code: "BN",
    phoneCode: "673",
  },
  {
    countryName: "Bulgaria",
    code: "BG",
    phoneCode: "359",
  },
  {
    countryName: "Burkina Faso",
    code: "BF",
    phoneCode: "226",
  },
  {
    countryName: "Burundi",
    code: "BI",
    phoneCode: "257",
  },
  {
    countryName: "Cambodia",
    code: "KH",
    phoneCode: "855",
  },
  {
    countryName: "Cameroon",
    code: "CM",
    phoneCode: "237",
  },
  {
    countryName: "Canada",
    code: "CA",
    phoneCode: "1",
  },
  {
    countryName: "Cape Verde",
    code: "CV",
    phoneCode: "238",
  },
  {
    countryName: "Cayman Islands",
    code: "KY",
    phoneCode: "1345",
  },
  {
    countryName: "Central African Republic",
    code: "CF",
    phoneCode: "236",
  },
  {
    countryName: "Chad",
    code: "TD",
    phoneCode: "235",
  },
  {
    countryName: "Chile",
    code: "CL",
    phoneCode: "56",
  },
  {
    countryName: "China",
    code: "CN",
    phoneCode: "86",
  },
  {
    countryName: "Christmas Island",
    code: "CX",
    phoneCode: "61",
  },
  {
    countryName: "Cocos (Keeling) Islands",
    code: "CC",
    phoneCode: "61",
  },
  {
    countryName: "Colombia",
    code: "CO",
    phoneCode: "57",
  },
  {
    countryName: "Comoros",
    code: "KM",
    phoneCode: "269",
  },
  {
    countryName: "Cook Islands",
    code: "CK",
    phoneCode: "682",
  },
  {
    countryName: "Costa Rica",
    code: "CR",
    phoneCode: "506",
  },
  {
    countryName: "Croatia",
    code: "HR",
    phoneCode: "385",
  },
  {
    countryName: "Cuba",
    code: "CU",
    phoneCode: "53",
  },
  {
    countryName: "Curaçao",
    code: "CW",
    phoneCode: "5999",
  },
  {
    countryName: "Cyprus",
    code: "CY",
    phoneCode: "357",
  },
  {
    countryName: "Czechia",
    code: "CZ",
    phoneCode: "420",
  },
  {
    countryName: "DR Congo",
    code: "CD",
    phoneCode: "243",
  },
  {
    countryName: "Denmark",
    code: "DK",
    phoneCode: "45",
  },
  {
    countryName: "Djibouti",
    code: "DJ",
    phoneCode: "253",
  },
  {
    countryName: "Dominica",
    code: "DM",
    phoneCode: "1767",
  },
  {
    countryName: "Dominican Republic",
    code: "DO",
    phoneCode: "1809",
  },
  {
    countryName: "Dominican Republic",
    code: "DO",
    phoneCode: "1829",
  },
  {
    countryName: "Dominican Republic",
    code: "DO",
    phoneCode: "1849",
  },
  {
    countryName: "Ecuador",
    code: "EC",
    phoneCode: "593",
  },
  {
    countryName: "Egypt",
    code: "EG",
    phoneCode: "20",
  },
  {
    countryName: "El Salvador",
    code: "SV",
    phoneCode: "503",
  },
  {
    countryName: "Equatorial Guinea",
    code: "GQ",
    phoneCode: "240",
  },
  {
    countryName: "Eritrea",
    code: "ER",
    phoneCode: "291",
  },
  {
    countryName: "Estonia",
    code: "EE",
    phoneCode: "372",
  },
  {
    countryName: "Ethiopia",
    code: "ET",
    phoneCode: "251",
  },
  {
    countryName: "Falkland Islands",
    code: "FK",
    phoneCode: "500",
  },
  {
    countryName: "Faroe Islands",
    code: "FO",
    phoneCode: "298",
  },
  {
    countryName: "Fiji",
    code: "FJ",
    phoneCode: "679",
  },
  {
    countryName: "Finland",
    code: "FI",
    phoneCode: "358",
  },
  {
    countryName: "France",
    code: "FR",
    phoneCode: "33",
  },
  {
    countryName: "French Guiana",
    code: "GF",
    phoneCode: "594",
  },
  {
    countryName: "French Polynesia",
    code: "PF",
    phoneCode: "689",
  },
  {
    countryName: "Gabon",
    code: "GA",
    phoneCode: "241",
  },
  {
    countryName: "Gambia",
    code: "GM",
    phoneCode: "220",
  },
  {
    countryName: "Georgia",
    code: "GE",
    phoneCode: "995",
  },
  {
    countryName: "Germany",
    code: "DE",
    phoneCode: "49",
  },
  {
    countryName: "Ghana",
    code: "GH",
    phoneCode: "233",
  },
  {
    countryName: "Gibraltar",
    code: "GI",
    phoneCode: "350",
  },
  {
    countryName: "Greece",
    code: "GR",
    phoneCode: "30",
  },
  {
    countryName: "Greenland",
    code: "GL",
    phoneCode: "299",
  },
  {
    countryName: "Grenada",
    code: "GD",
    phoneCode: "1473",
  },
  {
    countryName: "Guadeloupe",
    code: "GP",
    phoneCode: "590",
  },
  {
    countryName: "Guam",
    code: "GU",
    phoneCode: "1671",
  },
  {
    countryName: "Guatemala",
    code: "GT",
    phoneCode: "502",
  },
  {
    countryName: "Guernsey",
    code: "GG",
    phoneCode: "44",
  },
  {
    countryName: "Guinea",
    code: "GN",
    phoneCode: "224",
  },
  {
    countryName: "Guinea-Bissau",
    code: "GW",
    phoneCode: "245",
  },
  {
    countryName: "Guyana",
    code: "GY",
    phoneCode: "592",
  },
  {
    countryName: "Haiti",
    code: "HT",
    phoneCode: "509",
  },
  {
    countryName: "Honduras",
    code: "HN",
    phoneCode: "504",
  },
  {
    countryName: "Hong Kong",
    code: "HK",
    phoneCode: "852",
  },
  {
    countryName: "Hungary",
    code: "HU",
    phoneCode: "36",
  },
  {
    countryName: "Iceland",
    code: "IS",
    phoneCode: "354",
  },
  {
    countryName: "India",
    code: "IN",
    phoneCode: "91",
  },
  {
    countryName: "Indonesia",
    code: "ID",
    phoneCode: "62",
  },
  {
    countryName: "Iran",
    code: "IR",
    phoneCode: "98",
  },
  {
    countryName: "Iraq",
    code: "IQ",
    phoneCode: "964",
  },
  {
    countryName: "Ireland",
    code: "IE",
    phoneCode: "353",
  },
  {
    countryName: "Isle of Man",
    code: "IM",
    phoneCode: "44",
  },
  {
    countryName: "Israel",
    code: "IL",
    phoneCode: "972",
  },
  {
    countryName: "Italy",
    code: "IT",
    phoneCode: "39",
  },
  {
    countryName: "Ivory Coast",
    code: "CI",
    phoneCode: "225",
  },
  {
    countryName: "Jamaica",
    code: "JM",
    phoneCode: "1876",
  },
  {
    countryName: "Japan",
    code: "JP",
    phoneCode: "81",
  },
  {
    countryName: "Jersey",
    code: "JE",
    phoneCode: "44",
  },
  {
    countryName: "Jordan",
    code: "JO",
    phoneCode: "962",
  },
  {
    countryName: "Kazakhstan",
    code: "KZ",
    phoneCode: "77",
  },
  {
    countryName: "Kazakhstan",
    code: "KZ",
    phoneCode: "76",
  },
  {
    countryName: "Kenya",
    code: "KE",
    phoneCode: "254",
  },
  {
    countryName: "Kiribati",
    code: "KI",
    phoneCode: "686",
  },
  {
    countryName: "Kosovo",
    code: "XK",
    phoneCode: "383",
  },
  {
    countryName: "Kuwait",
    code: "KW",
    phoneCode: "965",
  },
  {
    countryName: "Kyrgyzstan",
    code: "KG",
    phoneCode: "996",
  },
  {
    countryName: "Laos",
    code: "LA",
    phoneCode: "856",
  },
  {
    countryName: "Latvia",
    code: "LV",
    phoneCode: "371",
  },
  {
    countryName: "Lebanon",
    code: "LB",
    phoneCode: "961",
  },
  {
    countryName: "Lesotho",
    code: "LS",
    phoneCode: "266",
  },
  {
    countryName: "Liberia",
    code: "LR",
    phoneCode: "231",
  },
  {
    countryName: "Libya",
    code: "LY",
    phoneCode: "218",
  },
  {
    countryName: "Liechtenstein",
    code: "LI",
    phoneCode: "423",
  },
  {
    countryName: "Lithuania",
    code: "LT",
    phoneCode: "370",
  },
  {
    countryName: "Luxembourg",
    code: "LU",
    phoneCode: "352",
  },
  {
    countryName: "Macau",
    code: "MO",
    phoneCode: "853",
  },
  {
    countryName: "Macedonia",
    code: "MK",
    phoneCode: "389",
  },
  {
    countryName: "Madagascar",
    code: "MG",
    phoneCode: "261",
  },
  {
    countryName: "Malawi",
    code: "MW",
    phoneCode: "265",
  },
  {
    countryName: "Malaysia",
    code: "MY",
    phoneCode: "60",
  },
  {
    countryName: "Maldives",
    code: "MV",
    phoneCode: "960",
  },
  {
    countryName: "Mali",
    code: "ML",
    phoneCode: "223",
  },
  {
    countryName: "Malta",
    code: "MT",
    phoneCode: "356",
  },
  {
    countryName: "Marshall Islands",
    code: "MH",
    phoneCode: "692",
  },
  {
    countryName: "Martinique",
    code: "MQ",
    phoneCode: "596",
  },
  {
    countryName: "Mauritania",
    code: "MR",
    phoneCode: "222",
  },
  {
    countryName: "Mauritius",
    code: "MU",
    phoneCode: "230",
  },
  {
    countryName: "Mayotte",
    code: "YT",
    phoneCode: "262",
  },
  {
    countryName: "Mexico",
    code: "MX",
    phoneCode: "52",
  },
  {
    countryName: "Micronesia",
    code: "FM",
    phoneCode: "691",
  },
  {
    countryName: "Moldova",
    code: "MD",
    phoneCode: "373",
  },
  {
    countryName: "Monaco",
    code: "MC",
    phoneCode: "377",
  },
  {
    countryName: "Mongolia",
    code: "MN",
    phoneCode: "976",
  },
  {
    countryName: "Montenegro",
    code: "ME",
    phoneCode: "382",
  },
  {
    countryName: "Montserrat",
    code: "MS",
    phoneCode: "1664",
  },
  {
    countryName: "Morocco",
    code: "MA",
    phoneCode: "212",
  },
  {
    countryName: "Mozambique",
    code: "MZ",
    phoneCode: "258",
  },
  {
    countryName: "Myanmar",
    code: "MM",
    phoneCode: "95",
  },
  {
    countryName: "Namibia",
    code: "NA",
    phoneCode: "264",
  },
  {
    countryName: "Nauru",
    code: "NR",
    phoneCode: "674",
  },
  {
    countryName: "Nepal",
    code: "NP",
    phoneCode: "977",
  },
  {
    countryName: "Netherlands",
    code: "NL",
    phoneCode: "31",
  },
  {
    countryName: "New Caledonia",
    code: "NC",
    phoneCode: "687",
  },
  {
    countryName: "New Zealand",
    code: "NZ",
    phoneCode: "64",
  },
  {
    countryName: "Nicaragua",
    code: "NI",
    phoneCode: "505",
  },
  {
    countryName: "Niger",
    code: "NE",
    phoneCode: "227",
  },
  {
    countryName: "Nigeria",
    code: "NG",
    phoneCode: "234",
  },
  {
    countryName: "Niue",
    code: "NU",
    phoneCode: "683",
  },
  {
    countryName: "Norfolk Island",
    code: "NF",
    phoneCode: "672",
  },
  {
    countryName: "North Korea",
    code: "KP",
    phoneCode: "850",
  },
  {
    countryName: "Northern Mariana Islands",
    code: "MP",
    phoneCode: "1670",
  },
  {
    countryName: "Norway",
    code: "NO",
    phoneCode: "47",
  },
  {
    countryName: "Oman",
    code: "OM",
    phoneCode: "968",
  },
  {
    countryName: "Pakistan",
    code: "PK",
    phoneCode: "92",
  },
  {
    countryName: "Palau",
    code: "PW",
    phoneCode: "680",
  },
  {
    countryName: "Palestine",
    code: "PS",
    phoneCode: "970",
  },
  {
    countryName: "Panama",
    code: "PA",
    phoneCode: "507",
  },
  {
    countryName: "Papua New Guinea",
    code: "PG",
    phoneCode: "675",
  },
  {
    countryName: "Paraguay",
    code: "PY",
    phoneCode: "595",
  },
  {
    countryName: "Peru",
    code: "PE",
    phoneCode: "51",
  },
  {
    countryName: "Philippines",
    code: "PH",
    phoneCode: "63",
  },
  {
    countryName: "Pitcairn Islands",
    code: "PN",
    phoneCode: "64",
  },
  {
    countryName: "Poland",
    code: "PL",
    phoneCode: "48",
  },
  {
    countryName: "Portugal",
    code: "PT",
    phoneCode: "351",
  },
  {
    countryName: "Puerto Rico",
    code: "PR",
    phoneCode: "1787",
  },
  {
    countryName: "Puerto Rico",
    code: "PR",
    phoneCode: "1939",
  },
  {
    countryName: "Qatar",
    code: "QA",
    phoneCode: "974",
  },
  {
    countryName: "Republic of the Congo",
    code: "CG",
    phoneCode: "242",
  },
  {
    countryName: "Romania",
    code: "RO",
    phoneCode: "40",
  },
  {
    countryName: "Russia",
    code: "RU",
    phoneCode: "7",
  },
  {
    countryName: "Rwanda",
    code: "RW",
    phoneCode: "250",
  },
  {
    countryName: "Réunion",
    code: "RE",
    phoneCode: "262",
  },
  {
    countryName: "Saint Barthélemy",
    code: "BL",
    phoneCode: "590",
  },
  {
    countryName: "Saint Kitts and Nevis",
    code: "KN",
    phoneCode: "1869",
  },
  {
    countryName: "Saint Lucia",
    code: "LC",
    phoneCode: "1758",
  },
  {
    countryName: "Saint Martin",
    code: "MF",
    phoneCode: "590",
  },
  {
    countryName: "Saint Pierre and Miquelon",
    code: "PM",
    phoneCode: "508",
  },
  {
    countryName: "Saint Vincent and the Grenadines",
    code: "VC",
    phoneCode: "1784",
  },
  {
    countryName: "Samoa",
    code: "WS",
    phoneCode: "685",
  },
  {
    countryName: "San Marino",
    code: "SM",
    phoneCode: "378",
  },
  {
    countryName: "Saudi Arabia",
    code: "SA",
    phoneCode: "966",
  },
  {
    countryName: "Senegal",
    code: "SN",
    phoneCode: "221",
  },
  {
    countryName: "Serbia",
    code: "RS",
    phoneCode: "381",
  },
  {
    countryName: "Seychelles",
    code: "SC",
    phoneCode: "248",
  },
  {
    countryName: "Sierra Leone",
    code: "SL",
    phoneCode: "232",
  },
  {
    countryName: "Singapore",
    code: "SG",
    phoneCode: "65",
    delivery: true,
  },
  {
    countryName: "Sint Maarten",
    code: "SX",
    phoneCode: "1721",
  },
  {
    countryName: "Slovakia",
    code: "SK",
    phoneCode: "421",
  },
  {
    countryName: "Slovenia",
    code: "SI",
    phoneCode: "386",
  },
  {
    countryName: "Solomon Islands",
    code: "SB",
    phoneCode: "677",
  },
  {
    countryName: "Somalia",
    code: "SO",
    phoneCode: "252",
  },
  {
    countryName: "South Africa",
    code: "ZA",
    phoneCode: "27",
  },
  {
    countryName: "South Georgia",
    code: "GS",
    phoneCode: "500",
  },
  {
    countryName: "South Korea",
    code: "KR",
    phoneCode: "82",
  },
  {
    countryName: "South Sudan",
    code: "SS",
    phoneCode: "211",
  },
  {
    countryName: "Spain",
    code: "ES",
    phoneCode: "34",
  },
  {
    countryName: "Sri Lanka",
    code: "LK",
    phoneCode: "94",
  },
  {
    countryName: "Sudan",
    code: "SD",
    phoneCode: "249",
  },
  {
    countryName: "Suriname",
    code: "SR",
    phoneCode: "597",
  },
  {
    countryName: "Svalbard and Jan Mayen",
    code: "SJ",
    phoneCode: "4779",
  },
  {
    countryName: "Swaziland",
    code: "SZ",
    phoneCode: "268",
  },
  {
    countryName: "Sweden",
    code: "SE",
    phoneCode: "46",
  },
  {
    countryName: "Switzerland",
    code: "CH",
    phoneCode: "41",
  },
  {
    countryName: "Syria",
    code: "SY",
    phoneCode: "963",
  },
  {
    countryName: "São Tomé and Príncipe",
    code: "ST",
    phoneCode: "239",
  },
  {
    countryName: "Taiwan",
    code: "TW",
    phoneCode: "886",
  },
  {
    countryName: "Tajikistan",
    code: "TJ",
    phoneCode: "992",
  },
  {
    countryName: "Tanzania",
    code: "TZ",
    phoneCode: "255",
  },
  {
    countryName: "Thailand",
    code: "TH",
    phoneCode: "66",
  },
  {
    countryName: "Timor-Leste",
    code: "TL",
    phoneCode: "670",
  },
  {
    countryName: "Togo",
    code: "TG",
    phoneCode: "228",
  },
  {
    countryName: "Tokelau",
    code: "TK",
    phoneCode: "690",
  },
  {
    countryName: "Tonga",
    code: "TO",
    phoneCode: "676",
  },
  {
    countryName: "Trinidad and Tobago",
    code: "TT",
    phoneCode: "1868",
  },
  {
    countryName: "Tunisia",
    code: "TN",
    phoneCode: "216",
  },
  {
    countryName: "Turkey",
    code: "TR",
    phoneCode: "90",
  },
  {
    countryName: "Turkmenistan",
    code: "TM",
    phoneCode: "993",
  },
  {
    countryName: "Turks and Caicos Islands",
    code: "TC",
    phoneCode: "1649",
  },
  {
    countryName: "Tuvalu",
    code: "TV",
    phoneCode: "688",
  },
  {
    countryName: "Uganda",
    code: "UG",
    phoneCode: "256",
  },
  {
    countryName: "Ukraine",
    code: "UA",
    phoneCode: "380",
  },
  {
    countryName: "United Arab Emirates",
    code: "AE",
    phoneCode: "971",
  },
  {
    countryName: "United Kingdom",
    code: "GB",
    phoneCode: "44",
  },
  {
    countryName: "United States",
    code: "US",
    phoneCode: "1",
  },
  {
    countryName: "United States Virgin Islands",
    code: "VI",
    phoneCode: "1340",
  },
  {
    countryName: "Uruguay",
    code: "UY",
    phoneCode: "598",
  },
  {
    countryName: "Uzbekistan",
    code: "UZ",
    phoneCode: "998",
  },
  {
    countryName: "Vanuatu",
    code: "VU",
    phoneCode: "678",
  },
  {
    countryName: "Vatican City",
    code: "VA",
    phoneCode: "379",
  },
  {
    countryName: "Venezuela",
    code: "VE",
    phoneCode: "58",
  },
  {
    countryName: "Vietnam",
    code: "VN",
    phoneCode: "84",
  },
  {
    countryName: "Wallis and Futuna",
    code: "WF",
    phoneCode: "681",
  },
  {
    countryName: "Western Sahara",
    code: "EH",
    phoneCode: "212",
  },
  {
    countryName: "Yemen",
    code: "YE",
    phoneCode: "967",
  },
  {
    countryName: "Zambia",
    code: "ZM",
    phoneCode: "260",
  },
  {
    countryName: "Zimbabwe",
    code: "ZW",
    phoneCode: "263",
  },
];
// INDUSTRY
// COUNTRY CODE

function genCountryCode () {
  console.log("runs gen code");
  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("comp-country-code");

  for (i = 0; i < x.length; i++) {
    if (x[i].getElementsByClassName("select-items").length < 1) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
                create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /* When an item is clicked, update the original select box,
                    and the selected item: */
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
    }
  }
  //   a.addEventListener("click", function (e) {
  //     console.log(e, 'click gen code');
  //     /* When the select box is clicked, close any other select boxes,
  //     and open/close the current select box: */
  //     e.stopPropagation();
  //     closeAllSelect(this);
  //     this.nextSibling.classList.toggle("select-hide");
  //     this.classList.toggle("select-arrow-active");
  // });
}

function checkScrollDirection (event) {
  if (checkScrollDirectionIsUp(event)) {
    console.log("UP");

    $(".comp-promo-footer").animate({ bottom: "0" }, 300);
  } else {
    console.log("Down");
    $(".comp-promo-footer").animate({ bottom: "-120px" }, 100);
    return false;
  }
}

function checkScrollDirectionIsUp (event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

function closeAllSelect (elmnt) {
  /* A function that will close all select boxes in the document,
    except the current select box: */
  var x;
  var y;
  var i;
  var arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

function checkIsTick (id, url, btn) {
  $(id).each(function () {
    if (this.checked) {
      window.location.href = url;
      $(btn).prop("disabled", false);
    } else {
      $(btn).prop("disabled", true);
    }
  });
}

function getUrlParameter (name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

document.addEventListener("click", closeAllSelect);
