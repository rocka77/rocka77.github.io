

// MENU RESPONSABLE //

function accion(){
  console.log('esta funcionando');
  var ancla = document.getElementsByClassName('nav-enlace');
  for(var i = 0; i < ancla.length; i++){
    ancla[i].classList.toggle("desaparece");
  }
}