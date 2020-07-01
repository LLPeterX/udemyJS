// нельзя использовать имя переменной p, т.к. оно уже
// использовано в script.js
const res1 = document.querySelector("#res");
res1.innerHTML+="<p>Test</p>";
console.log(res1.textContent); 