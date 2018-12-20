// Gestion du menu sticky
window.onscroll = function() {myFunction()};
      var header = document.querySelectorAll('ul');
      console.log(header[2]);
      
      var sticky = header[2].offsetTop;
      
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header[2].classList.add("sticky");
        } else {
          header[2].classList.remove("sticky");
}
        }

//Gestion de la quantité
var nombre = document.querySelectorAll('input')[1];
nombre.value = '1';

document.getElementById('plus').addEventListener('click', () => {
  if (nombre.value < 99) {
      nombre.value++;
  }
});

document.getElementById('moin').addEventListener('click', () => {
  if (nombre.value > 0) {
      nombre.value--;
  }
});

//Affichage du coeur
var coeur = document.querySelectorAll('i')[1];
console.log(coeur);

coeur.addEventListener('click',()=>{
  // console.log(coeur.style.color);
  if(coeur.style.color == 'grey'||coeur.style.color == ''){
  coeur.style.color = '#DF4343';}
  else {console.log(coeur.style.color);
  coeur.style.color = 'grey';
  }
});
  