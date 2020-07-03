'use strict';
// получаем список кнопок
const buttons = document.querySelectorAll("button"),
      wrapper = document.querySelector('#first');
console.log(buttons[0].classList);
buttons[1].classList.add('red');
if(buttons[1].classList.contains('red')) {
  console.log("Кнопка # 2 красная!");
}

/*
buttons[0].addEventListener('click', (e) => {
  buttons[0].classList.toggle('blue-some');
  buttons[4].classList.toggle('red');
  console.log(buttons[4].className);
  
});
*/

// Делегирование событий
// Вместо назначения обработчиков на каждую кнопку, можно повесить 
// один обработчик на родителя - <div> 

wrapper.addEventListener('click',(event)=> {
console.log(event.target.tagName);
if(event.target && event.target.tagName==='BUTTON') {
  console.log('button pressed');
  
}

});