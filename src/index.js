import * as $ from "jquery";
import "./styles/main.scss";
import Swiper from "swiper";
import AOS from "aos";
import Inputmask from "inputmask";
import Iti from "intl-tel-input";
import { calcSender } from "./js/formsSender";
import { getPrice } from "./js/formsSender";
import { phoneBack } from "./js/formsSender";
import mobileMenu from "./js/mobile-menu";
import tabManager from "./js/tab-manager";
import calcManager from "./js/calc-manager";
import scrollManager from "./js/scroll";
import goal from "./js/goal";
import utils from "./js/utils";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    mobileMenu();
    tabManager();
    calcManager();
    scrollManager();
    goal();
    $("#open-pdf").on("click", () => true);
    const params = new URLSearchParams(window.location.search);
    $('input[name="utm_term"]').val(params.get("utm_term"));
    $('input[name="utm_source"]').val(params.get("utm_source"));
    $('input[name="utm_medium"]').val(params.get("utm_medium"));
    $('input[name="utm_campaign"]').val(params.get("utm_campaign"));
    $('input[name="utm_content"]').val(params.get("utm_content"));

    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });

    $(".calc__form").on("submit", function (e) {
      e.preventDefault();
      calcSender($(".calc__form"));
    });

    $(".modal__inner").on("submit", function (e) {
      e.preventDefault();
      phoneBack($(".modal__inner"));
    });

    $(".price__form").on("submit", function (e) {
      e.preventDefault();
      getPrice($(this));
    });

    const mySwiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 15,
      breakpoints: {
        1600: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    const input = document.querySelector("#id-phone-inter");
    //       errorMsg = document.querySelector("#error-msg"),
    //       validMsg = document.querySelector("#valid-msg");

    // var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

    var iti = new Iti(input, {
      // initialCountry: "ru",
      preferredCountries: ["ru", "by"],
      allowExtensions: true,
      autoFormat: false,
      autoHideDialCode: false,
      autoPlaceholder: false,
      defaultCountry: "auto",
      ipinfoToken: "yolo",
      nationalMode: false,
      numberType: "MOBILE",
      preventInvalidNumbers: true,
      utilsScript: utils,
    });

    iti._init();

//     var reset = function() {
//       input.classList.remove("error");
//       errorMsg.innerHTML = "";
//       errorMsg.classList.add("hide");
//       validMsg.classList.add("hide");
//     };

//     // on blur: validate
// input.addEventListener('blur', function() {
//   reset();
//   if (input.value.trim()) {
//     if (iti.isValidNumber()) {
//       validMsg.classList.remove("hide");
//     } else {
//       input.classList.add("error");
//       var errorCode = iti.getValidationError();
//       errorMsg.innerHTML = errorMap[errorCode];
//       errorMsg.classList.remove("hide");
//     }
//   }
// });

// // on keyup / change flag: reset
// input.addEventListener('change', reset);
// input.addEventListener('keyup', reset);


    const inputs = document.querySelectorAll("#id-phone");
    const im = new Inputmask({ mask: "+9 (999) 999-99-99[9]" });
    im.mask(inputs);
  },
  false
);
