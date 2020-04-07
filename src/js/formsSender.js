import * as $ from "jquery";
import calcManager from "./calc";

export const calcSender = (form) => {
  let inputPhone = form.find('input[name="phone"]').val().replace(/\D+/g, "");
  const productType = form.find('select[name="products"]').val();
  const country = form.find('select[name="countries"]').val();
  const weight = parseInt(form.find('input[name="weight"]').val(), 10)
    ? parseInt(form.find('input[name="weight"]').val(), 10)
    : 0;

  const finalCost = calcManager(productType, weight);
  const formElem = document.querySelector(".calc__form");
  const data = new FormData(formElem);
  data.append("finalCost", finalCost);
  const btn = document.querySelector('input[type="submit"]');
  const btnVal = btn.value;
  btn.disabled = true;
  btn.value = "Отправка...";

  if (!inputPhone || inputPhone.lenght < 12) {
    btn.value = btnVal;
    formElem.querySelector('input[name="phone"]').classList.add("animate");
    setTimeout(() => {
      formElem.querySelector('input[name="phone"]').classList.remove("animate");
    }, 500);
    btn.disabled = false;
  } else {
    // $.ajax({
    //   processData: false,
    //   contentType: false,
    //   url: "./send.php",
    //   method: "POST",
    //   data: data,
    //   cache: false,
    //   success: function (res) {
        btn.value = btnVal;
        document.querySelector(".thanks__min").style.display = "none";
        document.querySelector(".thanks__subtitle").style.display = "none";
        document.querySelector(".calc").classList.add("show");

        if (finalCost <= 200) {
          document.querySelector(".thanks__subtitle").style.display = "block";
          document.querySelector(".thanks__min").style.display = "block";
        } 
        setTimeout(() => {
          document.querySelector(".thanks__cargo").innerHTML = productType;
          setTimeout(() => {
            document.querySelector(".thanks__weight").innerHTML = weight + "кг";
            setTimeout(() => {
              document.querySelector(".thanks__country").innerHTML = country;
              setTimeout(() => {
                document.querySelector(".thanks__cost").innerHTML =
                  finalCost + " $";
              }, 500);
            }, 500);
          }, 500);
        }, 500);
        btn.disabled = false;
        formElem.reset();
        // срабатывание целей Google, Yandex, etc.
        // ym(45709953, 'reachGoal', 'RaschetFinal');
        // gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'RaschetFinal' });
        // показываем thankyou page
    //   },
    // });
  }
};

export const getPrice = (form) => {
  let inputPhone = form.find('input[name="phone"]').val().replace(/\D+/g, "");
  const formElem = document.querySelector(".price__form");
  const data = new FormData(formElem);
  if (!inputPhone || inputPhone.lenght < 12) {
    formElem.querySelector('input[name="phone"]').classList.add("animate");
    setTimeout(() => {
      formElem.querySelector('input[name="phone"]').classList.remove("animate");
    }, 500);
  } else {
    // $.ajax({
    //   processData: false,
    //   contentType: false,
    //   method: "POST",
    //   url: "./send.php",
    //   data: data,
    //   success: (res) => {
        // document.querySelector("#open-pdf").click();
        // formElem.reset();
        // if (res === "1") {
          document.querySelector("#open-pdf").click();
          formElem.reset();
        // }
    //   },
    // });
  }
};
