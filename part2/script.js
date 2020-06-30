/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами

 ------------ Задание 2 ------------------

  1) Первая часть as is
 
  2) создать функцию showNMyDB, которая будет проверять свойство privat. 
     Если false, вывести главный объект программы (?)

  3) создать ф-ю writeYourGenres()

---------------  Задание 3: --------------

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';

// Код возьмите из предыдущего домашнего задания
//let numberOfFiles; // после 3 задания не нужно

// основной класс
let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  toggleVisibleMyDB: function() {
    this.privat = !this.privat;
  },
  writeYourGenres: function() {
    let genre;
    for (let i = 1; i <= 3; i++) {
      do {
        genre = prompt(`Ваш любимый жанр под номером ${i}`);
      } while (genre == null || genre.length === 0);
  
      this.genres.push(genre);
    }
    this.genres.forEach((e,i) => console.log(`Любимый жанр #${i+1}: ${e}`));
  },
  rememberMyFilms: function() {
    for (let i = 1; i <= 2; i++) {
      let movieName, ocenka;
      do {
        movieName = prompt('Один из последних просмотренных фильмов?', '');
      } while (movieName == null || movieName.length === 0 || movieName.length > 50);
  
      do {
        ocenka = prompt('На сколько оцените его?', '');
      } while (ocenka == null || ocenka.length === 0);
  
      this.movies[movieName] = ocenka;
    }
  },
  detectPersonalLevel: function() {
    if (this.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (this.count < 30) {
      console.log("Вы классический зритель");
    } else if (this.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function() {
    // если база не скрыта, о показываем её
    if (! this.privat) {
      console.log(this);
    } else {
      console.log("База приватная! Нечего тебе тут смотреть!");
    }
  },
  start: function() { // нельзя стрелочную ф-ю, иначе далее personalMovieDB.count=0. Теряется контекст.
    do {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?');
      console.log("this.count="+this.count);
    } while (isNaN(this.count) || this.count === 0);
  }
}; //end object personalMovieDB

personalMovieDB.start();
console.log(" -- count = "+personalMovieDB.count);
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();
console.log('Show DB 1:');
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
console.log('Show DB 2:');
personalMovieDB.showMyDB();
