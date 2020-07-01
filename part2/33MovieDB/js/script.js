// ВАРИАНТ УЧИТЕЛЯ

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
'use strict';

document.addEventListener('DOMContentLoaded', () => {



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

    
    const deleteAdv = (parent) => {
        adv.forEach(item => item.remove());
    };
    let adv = document.querySelectorAll(".promo__adv img"); // удаляем только картинки внутри div с классом 
    deleteAdv(adv);

    //2. изменить жанр фильма: поменять "комедия" на "драма"
    // он у нас в div class="promo__genre"
    document.querySelector(".promo__genre").textContent = "ДРАМА";

    //3. Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    document.querySelector(".promo__bg").style.backgroundImage = "url('./img/bg.jpg')";

    // 4. Список фильмов на странице сформировать на основании данных из этого JS файла.
    //Отсортировать их по алфавиту 
    // 5. Сделать нумерацию
    // удаляем старые данные: всё с классом "promo__interactive-item"
    document.querySelectorAll(".promo__interactive-item").forEach(item => { item.remove(); });
    // сортируем список
    const sortArray = (arr) => {
        arr.sort();
    };
    let moviesList = document.querySelector(".promo__interactive-list");

    // @param films: массив фильмов
    // @param parent: имя родительского <ul>
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);
        films.forEach((film, i) => {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${i + 1}. ${film}<div class="delete"></div></li>`;
        });
        // на корзинки вешаем обработчиик события
        document.querySelectorAll(".delete").forEach((btn,i) => {
            //i - индекс удаляемого массива, btn - ссылка на кнопку-корзину
            btn.addEventListener('click',(e)=> {
                //btn.parentElement.remove(); // удаляем родительский элемент <li> - не имеет смысла
                movieDB.movies.splice(i,1); // удалить i-й элемент из массива - ошибка: не удаляется последний элемент
                //console.log(movieDB.movies);
                createMovieList(films, parent); // перерисовка
            });
        });
    }
    createMovieList(movieDB.movies, moviesList);

    // -------------------------------------------------- Практика 2.33 -------------------------------------


    /*
    Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    */
    // форма имеет класс "add", надо найти потомок-кнопку
    const form = document.querySelector("form.add");
    let btn = form.querySelector("button");
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let movieName = form.querySelector(".adding__input").value.toString();
        // if (movieName.length === 0) {
        //     return false;
        // }
        if(!movieName) {
            return;
        }
        // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
        // "Добавляем любимый фильм"

        const isFavorite = form.querySelector('[type="checkbox"]').checked;
        if (isFavorite) {
            console.log("Добавляем любимый фильм");
        }

        // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
        if (movieName.length > 21) {
            //movieName = movieName.substring(0, 21) + "..."; // мой вариант
            movieName = `${movieName.substring(0, 22)}...`; // вариант учителя
        }
        // добавляеи фильм в <ul class="promo__interactive-list"> как li
        // у нас уже есть moviesList
        movieDB.movies.push(movieName);
        createMovieList(movieDB.movies,moviesList);
        form.reset(); // очищанм форму  
    }); // form event

    //function replaceDeleteListener() {
//        document.querySelectorAll(".delete").forEach(d => d.removeEventListener('click', deleteMovie));
//        document.querySelectorAll(".delete").forEach(d => d.addEventListener('click', deleteMovie));
//    }

    //3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    // удаляем из movieDB.movies[] по тексту и перерисовываем список,
    // причем переделывая нумеряцию

    // сначала для всех div class="delete" устанавливаем обработчик
    // но т.е. для нового фильма
    // function deleteMovie(e) { // e - event
    //     e.preventDefault();
    //     // получаеи текст родительского li - имя фильма
    //     const movieName = e.target.parentElement.textContent.substring(3); 
    //     //console.log('Deleting',movieName,movieName.length);
    //     movieDB.movies = movieDB.movies.filter(a => a != movieName);
    //     moviesList.innerHTML = "";
    //     createMovieList(movieDB.movies, moviesList);
    //     //replaceDeleteListener();
    // }

    //replaceDeleteListener();

});// addEventListener('DOMContentLoaded')

