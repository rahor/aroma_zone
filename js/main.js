// Gestion du menu sticky
  var header = document.querySelectorAll('ul');
  console.log(header[2]);
  var sticky = header[2].offsetTop;
  window.onscroll = ()=>{
      if (window.pageYOffset > sticky) header[2].classList.add("sticky");
      else header[2].classList.remove("sticky");
  } 
 
//Gestion de la quantité
  var nombre = document.querySelectorAll('input')[1];
  nombre.value = '1';

  document.getElementById('plus').addEventListener('click', () => {
    if (nombre.value < 99) nombre.value++;
  });

  document.getElementById('moin').addEventListener('click', () => {
    if (nombre.value > 0) nombre.value--;
  });

//Affichage du coeur
  var coeur = document.querySelectorAll('i')[1];
  coeur.addEventListener('click',()=>{
    if(coeur.style.color == 'grey'||coeur.style.color == '') coeur.style.color = '#DF4343';
    else coeur.style.color = 'grey';
  });
  