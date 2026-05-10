(function ($) {
  "use strict";

  function initImageLazyLoading() {
    $.each(document.images, function () {
      var this_image = this;
      var src = $(this_image).attr("src") || "";
      if (!src.length > 0) {
        var lsrc = $(this_image).attr("lsrc") || "";
        if (lsrc.length > 0) {
          var img = new Image();
          img.src = lsrc;
          $(img).on("load", function () {
            this_image.src = this.src;
          });
        }
      }
    });
  }

  function initExpandableSections() {
    $("#nlptag").click(function () {
      $("#nlpfull").fadeIn();
      $(this).css("cursor", "default");
    });

    $("#hcitag").click(function () {
      $("#hcifull").fadeIn();
      $(this).css("cursor", "default");
    });
  }

  function initEmailScramble() {
    var emailLink = document.getElementById("emaillink");
    if (emailLink && typeof scrambledString !== "undefined") {
      new scrambledString(
        emailLink,
        "emailLinkScramble",
        "manojkaushik93@gmail.com",
        [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22,
        ],
        "email address",
      );
    }
  }

  function initResponsiveImages() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      $(".sideimg").remove();
    }
  }

  $(function () {
    initImageLazyLoading();
    initExpandableSections();
    initEmailScramble();
    initResponsiveImages();
  });
})(jQuery);

// ===== GOOGLE ANALYTICS =====
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-99569818-5");
