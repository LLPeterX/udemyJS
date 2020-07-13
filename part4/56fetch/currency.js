'use strict';
// варинт 2 - через fetch
const rubPlaceholder = document.querySelector('#rub'),
  usdPlaceholder = document.querySelector('#usd');

rubPlaceholder.addEventListener('input', (e) => {
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .then(curses => {
      const usdRate = curses.Valute.USD.Value;
      usdPlaceholder.value = (rubPlaceholder.value / usdRate).toFixed(2);
    });
});        