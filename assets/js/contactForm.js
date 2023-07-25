const formularioWrapper = document.getElementById("formularioWrapper");
const toggleFormulario = document.getElementById("toggleFormulario");

// Función para alternar la visibilidad del formulario al hacer clic en el botón
toggleFormulario.addEventListener("click", function () {
  if (formularioWrapper.classList.contains("d-none")) {
    formularioWrapper.classList.remove("d-none");
    toggleFormulario.innerText = "Cerrar Formulario";
  } else {
    formularioWrapper.classList.add("d-none");
    toggleFormulario.innerText = "Enviar Formulario a WhatsApp";
  }
});

// Función para enviar los datos al número de WhatsApp
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("direccion").value;
    const dni = document.getElementById("dni").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Construir el mensaje de WhatsApp
    const mensaje = `Nombre: ${nombre}\nApellido: ${apellido}\nDirección: ${direccion}\nDNI: ${dni}\nFecha de Nacimiento: ${fechaNacimiento}`;

    // Reemplaza '986117629' con el número de WhatsApp deseado
    const numeroWhatsApp = "986888452";

    // Redirigir a la URL de WhatsApp con el mensaje
    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );

    // Cerrar el formulario después de enviar los datos
    formularioWrapper.classList.add("d-none");
    toggleFormulario.innerText = "Enviar Formulario a WhatsApp";
  });
