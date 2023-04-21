document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var rut = document.getElementById("rut").value;
  var nombre = document.getElementById("nombre").value;
  var appaterno = document.getElementById("appaterno").value;
  var apmaterno = document.getElementById("apmaterno").value;
  var edad = document.getElementById("edad").value;
  var celular = document.getElementById("celular").value;
  var genero = document.getElementById("genero").value;

  if (rut.length == 0) {
    alert("El campo rut no puede estar vacio.");
    return;
  } else if (!(rut.length >= 9 && rut.length <= 10)) {
    alert("Rut de largo no válido.");
    return;
  }

  if (nombre.length == 0) {
    alert("El campo nombre no puede estar vacio.");
    return;
  } else if (!(nombre.length >= 3 && nombre.length <= 20)) {
    alert("El largo del nombre debe ser mayor a 3 caracteres y menor a 20.");
    return;
  }
  if (appaterno.length == 0) {
    alert("El campo apellido no puede estar vacio.");
    return;
  } else if (!(appaterno.length >= 3 && appaterno.length <= 20)) {
    alert("El largo del apellido debe ser mayor a 3 caracteres y menor a 20.");
    return;
  }
  if (apmaterno.length == 0) {
    alert("El campo apellido no puede estar vacio.");
    return;
  } else if (!(apmaterno.length >= 3 && apmaterno.length <= 20)) {
    alert("El largo del apellido debe ser mayor a 3 caracteres y menor a 20.");
    return;
  }

  if (edad.length == 0) {
    alert("El campo edad no puede estar vacio.");
    return;
  } else if (edad < 18 || edad > 35) {
    alert("La edad mínima son 18 años y la máxima son 35 años.");
  }

  if (celular.length == 0) {
    alert("El campo telefono no puede estar vacio.");
    return;
  } else if (!(celular.length >= 9 && celular.length < 12)) {
    alert("El largo del celular debe ser mayor a 9 caracteres y menor a 12.");
    return;
  }

  if (genero == "valor0") {
    alert("Debe ingresar un genero.");
    return;
  }
  document.getElementById("carta").hidden = false;
  document.getElementById("botonCarta").disabled = false;
  is.submit();
}

document.getElementById("botonCarta").addEventListener("click", llenarCarta);

function llenarCarta() {
  document.getElementById("carta").value =
    "Su Rut es " +
    rut.value +
    " \nSu Nombre es: " +
    nombre.value +
    " " +
    appaterno.value +
    " " +
    apmaterno.value +
    ".\nUsted tiene " +
    edad.value +
    " años.\nSu telefono es " +
    celular.value +
    ".\ny su genero es " +
    genero.options[genero.selectedIndex].text;
  return;
}
