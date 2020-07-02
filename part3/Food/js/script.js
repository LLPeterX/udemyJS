'use strict';

window.addEventListener('DOMContentLoaded',() => {

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
    tabContent[i].classList.replace('hide','show');
    menuItems[i].classList.add("tabheader__item_active");
    tabContent[i].classList.add("fade");
    menuItems[i].classList.add("fade");
  }

  menuContainer.addEventListener('click',(event) => {
    event.preventDefault();
    const target = event.target;
    if(target && target.classList.contains("tabheader__item")) {
      menuItems.forEach((item,i) => {
        if(item === target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
    
  });

  hideTabContent();
  showTabContent();


});

      