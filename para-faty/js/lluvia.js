const fotos = ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg"];

function crearFoto() {
  const img = document.createElement("img");
  img.src = fotos[Math.floor(Math.random() * fotos.length)];
  img.classList.add("foto-lluvia");

  img.style.left = Math.random() * 100 + "vw";
  img.style.animationDuration = 5 + Math.random() * 5 + "s"; // entre 5 y 10s
  img.style.opacity = 0.9;

  document.body.appendChild(img);

  setTimeout(() => img.remove(), 12000); // limpiar después
}

// crear una foto cada 350ms
setInterval(crearFoto, 350);
