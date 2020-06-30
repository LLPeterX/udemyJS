function pressMe() {
  alert("Ой!");
}

const buttons = document.querySelectorAll("button");
buttons.forEach(b => b.addEventListener('click',pressMe));

function pressNo() {
  alert("Нет!");
}
// Обработчики можно добавлять:
// на 3-й кнопке будут 2 алерта - "Ой!" и "Нет"
buttons[2].addEventListener('click',pressNo); 

// event. Добавим к 3-й кнопке еще и слушатель с event:
buttons[2].addEventListener('mouseenter',(e) => {
  const target = e.target; // taget = button[2]
  target.innerText="Уйти отсюда!"; // меняем текст кнопки
});

buttons[2].addEventListener('mouseleave',(e) => {
  e.target.innerText = buttons[0].innerText;
});
// удаляем 2-ю кнопку при наведении:
// buttons[1].addEventListener('mouseover',(e)=> {
//   e.target.remove();
// });

// при клике будет алерт "Ой", а потом кнопка исчезнет
// причем событие однократное (once: true)
buttons[1].addEventListener('click',(e)=> {
  e.target.remove();
},true);


// тест preventDefault():
let link = document.querySelector("a"); // какая-то ссылка
link.addEventListener('click',(e) => {
  e.preventDefault();
  console.log(e.target.href);
});

