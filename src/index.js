import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Function Expression and Declaration</h1>
</div>`;

//let fn = (arg1,arg2,arg3) => expression;

let sum = (a, b) => a + b;

alert(sum(2, 3));

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

//1 argument
let double = (n) => n * 2;
alert(double(2));

//no arg
let sayHi = () => alert("hello !");
sayHi();
