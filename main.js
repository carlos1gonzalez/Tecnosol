window.addEventListener('load', iniciar, false);

function iniciar(){
  var imagen =document.getElementById('imagen');

  imagen.addEventListener('mouseover',lista, false);
  imagen.addEventListener('mouseout',restaurar,false);
}

function restaurar(){
  var imagen = document.getElementById('imagen').src = "./imagenes/icon-arrow-down.svg";
}

function lista(){
  var imagen = document.getElementById('imagen').src="./imagenes/icon-arrow-up.svg";
}

