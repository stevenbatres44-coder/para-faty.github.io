function verificarClave() {
  const clave = document.getElementById("clave").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje");

  if (clave === "yo te lobo") {
    mensaje.style.color = "#317d3b";
    mensaje.textContent = "💚 Acceso concedido...";
    setTimeout(() => {
      window.location.href = "pagina2.html"; // Redirige a tu siguiente vista
    }, 1200);
  } else if (clave === "") {
    mensaje.textContent = "Por favor, escribe la palabra clave.";
  } else {
    mensaje.textContent = "❌ Palabra incorrecta, inténtalo otra vez.";
  }
}
