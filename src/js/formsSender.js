import * as $ from "jquery";
import calcManager from "./calc";

export const calcSender = (form) => {
  let inputPhone = form.find('input[name="phone"]').val().replace(/\D+/g, '');
  const productType = form.find('select[name="products"]').val();
  const country = form.find('select[name="countries"]').val();
  const weight = parseInt(form.find('input[name="weight"]').val(), 10)
    ? parseInt(form.find('input[name="weight"]').val(), 10)
    : 0;
  console.log('productType', productType)
  const finalCost = calcManager(productType, weight);
  const formElem = document.querySelector(".calc__form");
  const data = new FormData(formElem);
  data.append("finalCost", finalCost);
  const btn = document.querySelector('input[type="submit"]');
  const btnVal = btn.value;
  // btn.disabled = true;
  // btn.value = "Отправка...";
  // btn.prop('disabled', true).val('Отправка...');
  // if (inputPhone < 12) {
    // btn.prop('disabled', false).val(btnVal);
    // btn.value = btnVal
    // document.querySelector('input[name="phone"]').classList.remove('animate');
    // document.querySelector('input[name="phone"]').classList.add('animate');
    // btn.disabled = false;
    // formElem.reset();
    // todo error phone
  // } else {
    // sendForm(data, './send.php');
    // $.ajax({
    //   processData: false,
    //   contentType: false,
    //   url: "./send.php",
    //   method: "POST",
    //   data: data,
    //   cache: false,
    //   success: function (res) {
    //     $(form).reset();
      btn.value = btnVal
        document.querySelector(".thanks__min").style.display = "none";
        document.querySelector(".calc").classList.add('show'); 
        document.querySelector(".thanks__cargo").innerHTML = productType;
        document.querySelector(".thanks__weight").innerHTML = weight + "кг";
        document.querySelector(".thanks__country").innerHTML = country;
        if (finalCost <= 200) {
          document.querySelector(".thanks__cost").innerHTML = 200 + " $";
          document.querySelector(".thanks__min").style.display = "block";
        } else {
          document.querySelector(".thanks__cost").innerHTML = finalCost + " $";
        }
        btn.disabled = false;
        formElem.reset();
        // form.trigger("reset");
        // btn.prop("disabled", false).val(btnVal);

        // срабатывание целей Google, Yandex, etc.
        // ym(45709953, 'reachGoal', 'RaschetFinal');
        // gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'RaschetFinal' });
        // показываем thankyou page
    //   },
    // });
  // }
};

export const getPrice = (form) => {
  const formElem = document.querySelector(".price__form");
  const data = new FormData(formElem);

  // $.ajax({
  //   processData: false,
  //   contentType: false,
  //   method: "POST",
  //   url: "./send.php",
  //   data: data,
  //   success: (res) => {

      document.querySelector("#open-pdf").click();
      if (res === "1") {
        document.querySelector("#open-pdf").click();
      }

  //   },
  // });

};
