'use strict';
// Получение курсов с сайта https://www.cbr-xml-daily.ru/daily_json.js
// Запрос GET должен вернуть json  с курсами валют на сегодня


// формат ответа:
// "Date": "2020-07-10T11:30:00+03:00",
//     "PreviousDate": "2020-07-09T11:30:00+03:00",
//     "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2020\/07\/09\/daily_json.js",
//     "Timestamp": "2020-07-09T14:00:00+03:00",
//     "Valute": {
// 	"USD": {
//             "ID": "R01235",
//             "NumCode": "840",
//             "CharCode": "USD",
//             "Nominal": 1,
//             "Name": "Доллар США",
//             "Value": 70.88,
//             "Previous": 71.2379
//         },
//         "EUR": {
//           ....  

const rubPlaceholder = document.querySelector('#rub'),
  usdPlaceholder = document.querySelector('#usd');

rubPlaceholder.addEventListener('input', (e) => {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
  req.send();
  /*
  req.addEventListener('readystatechange', () => {
    if (req.readyState === 4 && req.status === 200) {
      try {
        const curses = JSON.parse(req.response);
        const usdRate = curses.Valute.USD.Value;
        //usdPlaceholder.value = Math.round(rubPlaceholder.value/ usdRate,2);
        usdPlaceholder.value = (rubPlaceholder.value/ usdRate).toFixed(2);
      } catch(err) {
        usdPlaceholder.value = "Неверное число";
      }
    } else {
      usdPlaceholder.value = "SERVER ERROR";
    }
  });
  */
 req.addEventListener('load',() => {
  if (req.status === 200) {
    try {
      const curses = JSON.parse(req.response);
      const usdRate = curses.Valute.USD.Value;
      usdPlaceholder.value = (rubPlaceholder.value/ usdRate).toFixed(2);
    } catch(err) {
      usdPlaceholder.value = "Неверное число";
    }
  } else {
    usdPlaceholder.value = "SERVER ERROR";
  }
 });
});        