'use strict';

const p = document.querySelectorAll("p");
const res = document.querySelector("#res");
//res.innerHTML = "";
p.forEach(item => {
  res.innerHTML+=`<p>${item}</p>`;
});

const script = document.createElement("script");
script.src="loadable.js";
script.async=false;
document.head.append(script);