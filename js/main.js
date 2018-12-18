
let a = document.querySelector('a:nth-of-type(1)');

console.log(a);

// window.onscroll = function() {myFunction()}; 
let myNav = document.querySelectorAll('nav a');
console.log(myNav);

let main = document.querySelectorAll('main');
console.log(main);

for(let items of myNav){
    console.log(items);}

var sticky = myNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    myNav.classList.add("sticky")
  } else {
    myNav.classList.remove("sticky");
  }
}