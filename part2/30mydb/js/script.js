/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1. удаление рекламных блоков
// можно удалить отдельные блоки, а можно весь div с классом "promo__adv"
//document.querySelector(".promo__adv").remove(); // мой вариант
// вариант учителя:
let adv = document.querySelectorAll(".promo__adv img"); // удаляем только картинки внутри div с классом 
adv.forEach(a => a.remove());

//2. изменить жанр фильма: поменять "комедия" на "драма"
// он у нас в div class="promo__genre"
document.querySelector(".promo__genre").textContent="ДРАМА";

//3. Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
document.querySelector(".promo__bg").style.backgroundImage = "url('./img/bg.jpg')";

// 4. Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
// 5. Сделать нумерацию
// удаляем старые данные: всё с классом "promo__interactive-item"
document.querySelectorAll(".promo__interactive-item").forEach(item => {item.remove();});
// сортируем список
movieDB.movies.sort();
// в цикле создаем html-код с названиями фильмов -
// это <li> внутри <ul class="promo__interactive-list">
// добавляеем их в "конец" содержимого ul - 'beforeend'
// так обеспечивается правильный порядок - сверху вниз
let moviesList = document.querySelector(".promo__interactive-list");
// for (let i=0; i<movieDB.movies.length; i++) {
//     let html = `<li class="promo__interactive-item">${i+1}. ${movieDB.movies[i]}<div class="delete"></div></li>`;
//     moviesList.insertAdjacentHTML('beforeend',html);
// }
// вариант учителя:
movieDB.movies.forEach((film,i) => {
    moviesList.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}<div class="delete"></div></li>`;
});