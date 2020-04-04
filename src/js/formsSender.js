import * as $ from "jquery";
import calcManager from "./calc";

// function sendForm(data, url) {
//   return new Promise((resolve, reject) => {
//     let XHR = new XMLHttpRequest();
//     XHR.open('POST', url);
//     XHR.onreadystatechange = function() {
//         if(this.readyState === 4) {
//             if(this.status == 200) resolve(this.responseText);
//             else reject({error: true, status: this.status, message: this.statusText});
//         }
//         else return;
//     }

//     XHR.send(data);
// });
// }

export const calcSender = (form) => {
  const inputPhone = form.find('input[name="phone"]');
  const productType = form.find('select[name="products"]').val();
  const country = form.find('select[name="countries"]').val();
  const weight = parseInt(form.find('input[name="weight"]').val(), 10)
    ? parseInt(form.find('input[name="weight"]').val(), 10)
    : 0;
  const finalCost = calcManager(productType, weight);
  const formElem = document.querySelector(".calc__form");
  const data = new FormData(formElem);
  data.append("finalCost", finalCost);
  const btn = document.querySelector('button[type="submit"]');
  const btnVal = btn.value;
  console.log(btn);

  btn.disabled = true;
  btn.value = "Отправка...";
  // btn.prop('disabled', true).val('Отправка...');
  if (!inputPhone.val() || inputPhone.val() < 10) {
    // btn.prop('disabled', false).val(btnVal);
    console.log("Phone error");
    // todo error phone
  } else {
    // sendForm(data, './send.php');
    $.ajax({
      processData: false,
      contentType: false,
      url: "./send.php",
      method: "POST",
      data: data,
      cache: false,
      success: function (res) {
        // $(form).reset();
        document.querySelector(".calc__inner").style.display = "none";
        document.querySelector(".thanks__inner").style.display = "flex";
        document.querySelector(".thanks__cargo").innerHTML = productType;
        document.querySelector(".thanks__weight").innerHTML = weight + "кг";
        document.querySelector(".thanks__country").innerHTML = country;
        if (finalCost <= 200) {
          document.querySelector(".thanks__cost").innerHTML = 200 + " $";
          document.querySelector(".thanks__min").style.display = "block";
        } else {
          document.querySelector(".thanks__cost").innerHTML = finalCost + " $";
        }

        form.trigger("reset");
        btn.prop("disabled", false).val(btnVal);

        // срабатывание целей Google, Yandex, etc.
        // ym(45709953, 'reachGoal', 'RaschetFinal');
        // gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'RaschetFinal' });
        // показываем thankyou page
      },
    });
  }
};

export const getPrice = (form) => {
  const formElem = document.querySelector(".price__form");
  const data = new FormData(formElem);
  console.log(data);

  $.ajax({
    processData: false,
    contentType: false,
    method: "POST",
    url: "./send.php",
    data: data,
    success: (res) => {
      console.log($("#open-pdf"));
      console.log(res);
      document.querySelector("#open-pdf").click();
      if (res === "1") {
        document.querySelector("#open-pdf").click();
      }
    },
  });
};
