'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const menuItems = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    menuContainer = document.querySelector(".tabheader__items");


  function hideTabContent() {
    // скрываем содержимое 
    //tabContent.forEach((item) => item.style.display="none" );
    tabContent.forEach(item => item.classList.add("hide"));
    // удаляем класс активного пункта (жирный шрифт)
    menuItems.forEach(item => {
      item.classList.remove("tabheader__item_active");
      item.classList.remove("fade");
    }
    );
  }

  // функция показать i-й div контента
  function showTabContent(i = 0) { //default i=0
    //tabContent[i].style.display='block';
    tabContent[i].classList.replace('hide', 'show');
    menuItems[i].classList.add("tabheader__item_active");
    tabContent[i].classList.add("fade");
    menuItems[i].classList.add("fade");
  }

  menuContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      menuItems.forEach((item, i) => {
        if (item === target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }

  });

  hideTabContent();
  showTabContent();
  // -------------------- 41 добаляем таймер акции -----------------------
  const deadline = '2020-08-01 00:00'; // изменить время!

  function getRemainingTime(endtime) {
    const t = Date.parse(endtime) - (new Date()); // разница в ms
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);
    // возвращаем объект
    // используем сокращенный синтаксис: если имя поля объекта
    // совпадаеи с именем переменной, используемой в качестве значения этого свойства,
    // то при опрделении объекта переменную можно опустить
    return ({
      total: t, days, hours, minutes, seconds
    });
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const daysElement = timer.querySelector('#days'),
      hoursElement = timer.querySelector('#hours'),
      minElement = timer.querySelector('#minutes'),
      secElement = timer.querySelector('#seconds'),
      actionsTimer = setInterval(updateClock, 1000);

    updateClock(); // чтобы избежать показа старых значение элементов


    function updateClock() {
      const t = getRemainingTime(endtime);

      if (t.total <= 0) {
        console.log('Timer stop');
        // скрываем div с пром-акцией
        document.querySelector('.promotion').style.display = "none";
        clearInterval(actionsTimer);
      }

      daysElement.textContent = leadingZero(t.days, false);
      hoursElement.textContent = leadingZero(t.hours, true);
      minElement.textContent = leadingZero(t.minutes, true);
      secElement.textContent = leadingZero(t.seconds, true);
    }

    function leadingZero(value, isNeedZero) {
      if (value < 10 && isNeedZero) {
        return "0" + value;
      } else {
        return value;
      }
    }

    function replacePromoText(selector, dateStr) {
      let months = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];
      // 2020-07-01 12:46
      const el = document.querySelector(selector);
      let [ymd, timeStr] = dateStr.split(' ');
      let [year, month, day] = ymd.split("-");
      let newStr = day.substring(0, 2) + " " + months[+month - 1] + " " + year + " " + (timeStr || "");
      el.innerHTML = el.innerHTML.replace('Акция закончится 1 августа в 00:00', 'Акция закончится ' + newStr);
    }

    replacePromoText('.promotion__descr', deadline);
  }

  setClock(".timer", deadline);

  // Modal window

  const modalTriggers = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector('.modal'),
    modalCloseButton = document.querySelector('[data-close]');

  // функции скрытия и показа модального  окна
  function closeModalWindow() {
    modalWindow.classList.toggle('show');
    document.body.style.overflow = '';
  }

  function showModalWindow() {
    modalWindow.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  // вешаем обработчик собыйтий открытия окна
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', showModalWindow);
  });
  // добавляем обработчик собитий на "крестик"
  modalCloseButton.addEventListener('click', closeModalWindow);

  // если кликнули за пределами окна (т.е. попали в div class=modal)
  // или нажали ESC, то закрыть окно
  modalWindow.addEventListener('click', (event) => { // event можно не указывать, но это плохо
    if (event.target === modalWindow) {
      closeModalWindow();
    }
  });
  // обработка ESC
  document.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && modalWindow.classList.contains('show')) {
      closeModalWindow();
    }
  });

  // модальное окно должно появиться через 8 сек
  const modalTimerId = setTimeout(showModalWindow, 8000);
  let isShowedModalAtBottom = false;

  // показать модальное окно, когда юзер долистал до конца страницы
  // window.addEventListener('scroll', (event) => {
  //   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
  //     if (!isShowedModalAtBottom) {
  //       showModalWindow();
  //       isShowedModalAtBottom = true;
  //     }
  //   }
  // });
  // новый вариант:
  function showModalWindowOnScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModalWindow();
      window.removeEventListener('scroll',showModalWindowOnScroll);  
    }
  }
  window.addEventListener('scroll', showModalWindowOnScroll);

}); // window.eventListener




