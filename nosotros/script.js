const hero = document.querySelector(".carrusel");
const images = [
  "carrusel/Agencia Nacional de Seguridad Vial - color.png",
  "carrusel/gob-atl-2024.png",
  "carrusel/atl2020.png",
];

let index = 0;

// 🔹 Esta es la función modificada
function changeBackground(i) {
  index = (i + images.length) % images.length;
  hero.style.background = `url('${images[index]}') center / cover no-repeat`;
}

// Botones
document.querySelector(".prev").addEventListener("click", () => changeBackground(index - 1));
document.querySelector(".next").addEventListener("click", () => changeBackground(index + 1));

// Automático cada 5s
setInterval(() => changeBackground(index + 1), 5000);
