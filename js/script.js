const form = document.getElementById("formPostal");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const edad = document.getElementById("edad").value;
  const telefono = document.getElementById("telefono").value;
  const estado = document.getElementById("estado").value;
  const cp = document.getElementById("cp").value;
  const direccion = document.getElementById("direccion").value;

  document.getElementById("info").innerHTML = `

    <strong>Nombre:</strong> ${nombre} <br><br>

    <strong>Correo:</strong> ${correo} <br><br>

    <strong>Edad:</strong> ${edad} años <br><br>

    <strong>Teléfono:</strong> ${telefono} <br><br>

    <strong>Estado:</strong> ${estado} <br><br>

    <strong>Código Postal:</strong> ${cp} <br><br>

    <strong>Dirección:</strong> ${direccion}

  `;

  document.getElementById("modal").style.display = "flex";

});

function cerrarModal(){

  document.getElementById("modal").style.display = "none";

}
