'use strict';

const p = document.querySelectorAll("p");
const res = document.querySelector("#res");
//res.innerHTML = "";
p.forEach(item => {
  res.innerHTML += `<p>${item}</p>`;
});

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.head.append(script);
}

loadScript("loadable.js");
loadScript("another.js");
