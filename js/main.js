// Gestion du menu sticky
  var header = document.querySelectorAll('ul');
  console.log(header[2]);
  var sticky = header[2].offsetTop;
  window.onscroll = ()=>{
      if (window.pageYOffset > sticky) header[2].classList.add("sticky");
      else header[2].classList.remove("sticky");
  } 
 
//Gestion de la quantité et du prix
  // Recuperation des eléments
  var nombre = document.querySelectorAll('input')[1];
  nombre.value = '1';

  var prix = document.getElementsByClassName('center')[0];
  console.log(prix.innerHTML);

  // incrementation
  document.getElementById('plus').addEventListener('click', () => {
    if (nombre.value < 99){
     nombre.value++;
    prix.innerHTML = (7.90 * nombre.value).toFixed(2).concat('€');
    } 
  });

  // decrementation
  document.getElementById('moin').addEventListener('click', () => {
    if (nombre.value > 0) {
      nombre.value--;
      prix.innerHTML = (7.90 * nombre.value).toFixed(2).concat('€');
    }
  });


//Affichage du coeur
  var coeur = document.querySelectorAll('i')[1];
  coeur.addEventListener('click',()=>{
    if(coeur.style.color == 'grey'||coeur.style.color == '') coeur.style.color = '#DF4343';
    else coeur.style.color = 'grey';
  });
  

// Choisir ses produits
  function handleDragStart(e) {
    elementDrag = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }
    
  function handleDrop(e) {
  
    // Si on drag and drop un élément sur lui même on ne fait rien
    if (elementDrag != this) {
      // Echange des colonnes
      elementDrag.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  }
  

  // On recupere tous les produits et les cases ajouter
  var cols = document.querySelectorAll('.choisirProd');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('drop', handleDrop, false);
  });
  
  