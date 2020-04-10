import * as $ from "jquery";
import calcManager from "./calc";

export const calcSender = (form) => {
  let inputPhone = form.find('input[name="phone"]').val().replace(/\D+/g, "");
  const productType = form.find('select[name="products"]').val();
  const country = form.find('select[name="countries"]').val();
  const name = form.find('input[name="name"]').val();
  const instagram = form.find('input[name="instagram"]').val();
  const weight = parseInt(form.find('input[name="weight"]').val(), 10)
    ? parseInt(form.find('input[name="weight"]').val(), 10)
    : 0;

  const finalCost = calcManager(productType, weight);
  const formElem = document.querySelector(".calc__form");
  const data = new FormData(formElem);
  data.append("finalCost", finalCost);
  const btn = document.querySelector('input[type="submit"]');
  const btnVal = btn.value;

  function validForm(element) {
    element.classList.add("animate");
    setTimeout(() => {
      element.classList.remove("animate");
    }, 500);
  }

  if (country === 'Италия') {
    document.querySelector('.thanks__bottom').innerHTML = "*Мы	знаем	среднюю	стоимость	доставки	груза	из	Италии	в	Москву	– 10	евро.	Мы	готовы	сделать	вам	более	выгодное предложение!	Наши	менеджеры	свяжутся	с	вами	в	рабочее	время	(с	10:00	до	18:00	по	МСК)	для	консультации."
  } else {
    document.querySelector('.thanks__bottom').innerHTML = "*Доставка от склада отправителя до Вильнюса рассчитывается индивидуально в зависимости от параметров груза. Наши менеджеры свяжутся с вами в рабочее время (с 10:00 до 18:00 по МСК) для консультации."
  }

  if(!weight) {
    validForm(formElem.querySelector('input[name="weight"]'));    
  } else if(!name) {
    validForm(formElem.querySelector('input[name="name"]'));    
  } else if (!inputPhone || inputPhone.lenght < 12) {
    validForm(formElem.querySelector('input[name="phone"]'));     
  } else if (!instagram) {
    validForm(formElem.querySelector('input[name="instagram"]'));     
  } else {
    btn.disabled = true;
    btn.value = "Отправка...";
    $.ajax({
      processData: false,
      contentType: false,
      url: "./send.php",
      method: "POST",
      data: data,
      cache: false,
      success: function (res) {
        console.log(res)
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
        ym(61473721, 'reachGoal', 'EventCalculation');
        gtag('event', 'send', {'event_category': 'Event', 'event_action': 'Send', 'event_label': 'EventCalculation' });
        // срабатывание целей Google, Yandex, etc.      
        // показываем thankyou page

      },
    });
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
    $.ajax({
      processData: false,
      contentType: false,
      method: "POST",
      url: "./send.php",
      data: data,
      success: (res) => {
        console.log(res)
        document.querySelector("#open-pdf").click();
        formElem.reset();
        if (res === "1") {
          document.querySelector("#open-pdf").click();
          formElem.reset();
        }

        ym(61473721, 'reachGoal', 'EventPrice');
        gtag('event', 'send', {'event_category': 'Event', 'event_action': 'Send', 'event_label': 'EventPrice' });
      },
    });
  }
};
