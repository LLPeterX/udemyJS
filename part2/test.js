let obj = {
  a: 1,
  b: 2,
  c: "hello"
};
for(var i in obj) {
  console.log(i,typeof(i));
}

let arr = [3,7,8];
for (var i in arr) {
  console.log(i,typeof(i));
}