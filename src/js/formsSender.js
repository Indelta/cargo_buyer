import * as $ from 'jquery';
import calcManager from './calc';

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

export const calcSender = form => {
  const path = $(form).attr('action');
  console.log(path);
  const inputPhone = form.find('input[name="phone"]');
  const productType = form.find('select[name="products"]').val();
  const weight = parseInt(form.find('input[name="weight"]').val(), 10);
  const finalCost = calcManager(productType, weight) || 200;
  const formElem = document.querySelector('.calc__form');
  const data = new FormData(formElem).append( 'finalCost' , finalCost );
  const btn = form.find('button[type="submit"]');
  const btnVal = btn.val();

  btn.prop('disabled', true).val('Отправка...');
  if (!inputPhone.val() || inputPhone.val()  < 12 ) {
    btn.prop('disabled', false).val(btnVal);
    console.log('Phone error');
    // todo error phone
  }
  else {
    sendForm(data, './send.php');
    $.ajax({
      'url': 'send.php',
      'method': 'POST',
      data: data,
      cache: false,
      success: function(res) {
        $(form).reset(); // form.trigger('reset');
        btn.prop('disabled', false).val(btnVal);
        console.log(res);
        // срабатывание целей Google, Yandex, etc.
        // ym(45709953, 'reachGoal', 'RaschetFinal');
        // gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'RaschetFinal' });
        // показываем thankyou page
      }
    });
  }
} 

export const getPrice = form => {
  const formElem = document.querySelector('.price__form');
  const data = new FormData(formElem);

  $.ajax({
    method: 'POST',
    url: 'send.php',
    data: data,
    success: (res) => {
      if (res === '1') {
        $('#open-pdf').trigger('click');
      }
    }
  })
}