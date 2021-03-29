const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

document.addEventListener("DOMContentLoaded", () => {
  formulario.addEventListener("submit", validarFormulario);
});

function validarFormulario(e) {
  e.preventDefault();

  const busqueda = document.getElementById("busqueda").value;

  if (busqueda.length < 3) {
    mostrarMensaje("Busqueda muy corta... añade información");
  }
}

function mostrarMensaje(msg) {
  const alertaPrevia = document.querySelector(".alerta");

  if (!alertaPrevia) {
    const alerta = document.createElement("div");
    alerta.classList.add("bg-gray-100", "p-3", "text-center", "mt-3", "alerta");

    alerta.textContent = msg;

    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
