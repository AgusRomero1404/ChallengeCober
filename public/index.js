async function enviarCorreo(correoUsuario) {
  mostrarAlerta();
  await fetch("/enviar-correo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correo: correoUsuario }),
  });
}

function validarCorreoElectronico(correo) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(correo);
}

document.addEventListener("DOMContentLoaded", function () {
  const joinWaitlistButton = document.getElementById("submitemail");
  joinWaitlistButton.addEventListener("click", function () {
    console.log("click");
    const correoUsuario = document.getElementById("inputform").value;
    if (correoUsuario.trim() === "") {
      alert("No cargó ningún correo");
    } else if (!validarCorreoElectronico(correoUsuario.trim())) {
      alert("El formato del correo electrónico es inválido");
    } else {
      enviarCorreo(correoUsuario);
    }
  });
});

document.getElementById("waitlistform").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });

function mostrarFecha() {
  const fechaActual = new Date();
  let diaSemana = fechaActual.toLocaleDateString("es-ES", { weekday: "long" });
  diaSemana = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

  const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const fechaFormateadaConDia = fechaFormateada.replace(
    fechaActual.toLocaleDateString("es-ES", { weekday: "long" }),
    diaSemana
  );

  document.getElementById("fecha").textContent = fechaFormateadaConDia;
}
mostrarFecha();

function mostrarAlerta() {
  const textform = document.getElementById("inputform");
  const correo = textform.value;
  alert("Correo electrónico " + correo + " adherido con éxito");
  textform.value = "";
}
