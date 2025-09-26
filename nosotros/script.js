const hero = document.querySelector(".hero-quienes");
const images = [
  "../images/wallpaper.jpg",
  "../images/wallpaper1.jpeg",
  "../images/wallpaper2.jpeg",
  "../images/wallpaper3.jpg",
  "../images/wallpaper4.jpg",
];

let index = 0;

// Función para cambiar el fondo
function changeBackground(i) {
  index = (i + images.length) % images.length; // asegura ciclo circular
  hero.style.backgroundImage = `url(${images[index]})`;
}

// Botones
document.querySelector(".prev").addEventListener("click", () => changeBackground(index - 1));
document.querySelector(".next").addEventListener("click", () => changeBackground(index + 1));

// Automático cada 5s
setInterval(() => changeBackground(index + 1), 5000);