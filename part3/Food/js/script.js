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
    //clearInterval(modalTimerId);
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
  // закомментировано, чтобы не мешало
  //const modalTimerId = setTimeout(showModalWindow, 8000);
  let isShowedModalAtBottom = false;

  // новый вариант:
  function showModalWindowOnScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModalWindow();
      window.removeEventListener('scroll', showModalWindowOnScroll);
    }
  }
  window.addEventListener('scroll', showModalWindowOnScroll);

  //jshint ignore:start
/*  
// мой вариант шаблонного добления элементов:
const menu = [
  {
    title: "Фитнес",
    img: "img/tabs/vegy.jpg",
    alt: "vegy",
    menuDecription: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
    price: "229"
  },
  {
    title: "Премиум",
    img: "img/tabs/elite.jpg",
    alt: "elite",
    menuDecription: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
    price: "550"
  },
  {
    title: "Постное",
    img: "img/tabs/post.jpg",
    alt: "post",
    menuDecription: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',  // jshint ignore:line
    price: "180"
  }

];
const menuContent = document.querySelector(".menu__field>.container");
//console.log(menuContent);
menuContent.innerHTML = "";
let html = "";
menu.forEach(item => {
  html += `<div class="menu__item"><img src="${item.img}" alt="${item.alt}">
<h3 class="menu__item-subtitle">Меню "${item.title}"</h3>
<div class="menu__item-descr">${item.menuDecription}</div>
<div class="menu__item-divider"></div>
<div class="menu__item-price">
    <div class="menu__item-cost">Цена:</div>
    <div class="menu__item-total"><span>${item.price}</span> грн/день</div>
</div>
</div>`;
});
menuContent.innerHTML=html;

*/
// jshint ignore:end
// ниже = вариант учителя

class MenuCard {
  constructor(src, alt,title,descr,price,parentSelector, ...classes) {
    this.src=src;
    this.alt=alt;
    this.title=title;
    this.descr = descr;
    this.price=price; // в USD
    this.classes = classes; // array or undefined
    //this.classes = classes.length>0 ? classes : ["menu__item"];
    this.parent = document.querySelector(parentSelector);
    this.currencyRate = 72.171; // на 08.07.2020. Потом будем брать с сайта ЦБ
    this.changeToRUR(); // преобразуем цену USD в RUR
  }
  // метод конвертации валюты в рубли. price в долларах
  changeToRUR() {
    this.price = Math.round(this.price * this.currencyRate,2);
  }
  // отображение карточки продукта
  render() {
    // в цену падает сконвертированное значение
    let html = `<img src=${this.src} alt=${this.alt}>
    <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
    <div class="menu__item-descr">${this.descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> руб.</div>
    </div>`;
    const el = document.createElement("div");
    if(this.classes.length===0) {
      this.classes = ['menu__item'];
    }
    this.classes.forEach(className => el.classList.add(className));
  //  } else {
      //el.classList.add("menu__item")
    //}

    el.innerHTML = html;
    this.parent.append(el);
  }
 }
// создаем карточки продуктов. Можно в цикле
// jshint ignore: start
const selector = ".menu__field>.container";
new MenuCard("img/tabs/vegy.jpg","vegy","Фитнес",
'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
3.5,selector,"menu__item").render();
new MenuCard("img/tabs/elite.jpg","elite","Премиум",
'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
4.2,selector,"menu__item").render();
new MenuCard("img/tabs/post.jpg","post","Постное",
'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
1.0,selector).render();
// jshint ignore: end


}); // window - контент загружен





