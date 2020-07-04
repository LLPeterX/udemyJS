'use strict';
const res = document.querySelector('#res'),
      textArea = document.querySelector('#jsonText'),
      btn = document.querySelector('#show');

// ---- test data ---
let testObj = {
  name: "FooBar",
  age: 10,
  isTest: true,
  loc: {
    x: 10,
    y: 20,
    map: {
      foo: "bar",
      zen: false
    },
    locat: 'Y'
  },
  boo: [1, 2, 3]
};

let testJson = JSON.stringify(testObj,null,2);
textArea.value = testJson;
//console.log(testJson);
//--------------- end test data -----

btn.addEventListener('click',() => {
  try {
    let obj = JSON.parse(textArea.value);
    res.innerHTML=""; // cleanup result
    getFiniteValue(obj, showObject);
  } catch(e) {
    alert("Syntax error");
  }

});


function getFiniteValue(obj, callback) {
  let offset = -1;
  let arr = [];
  getProp(obj);

  function getProp(o) {
    offset++;
    for (var prop in o) {
      arr[offset]=prop;
      if (typeof (o[prop]) === 'object' && !Array.isArray(o[prop])) {
        getProp(o[prop]);
      } else {
        console.log(arr, offset, prop, o[prop]);
        callback(offset, prop, o[prop]);
      }
    }
    offset--;
  }
}

function showObject(offset, propName, propValue) {
  let el = document.createElement("div");
  el.classList.add("box");
  if (Array.isArray(propValue)) {
    el.innerHTML = `${propName}: [${propValue}]`;
  } else {
    el.innerHTML = propName + ": " + propValue;
  }
  el.style.left = (offset * 20) + 'px';
  res.insertAdjacentElement('beforeend', el);
}


