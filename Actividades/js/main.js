/* main.js
   Carga la lista de grados desde data/grados.json y crea las tarjetas en la página principal.
*/

/* 1) Ruta al JSON con los grados */
const JSON_GRADOS = "data/grados.json";


/* 2) Seleccionamos el contenedor donde vamos a inyectar las cards */
const catalogoContainer = document.querySelector(".catalogo-container");

/* 3) Función que crea una tarjeta de grado. Todo explicado en cada línea. */
function crearTarjetaGrado(grado) {
  const card = document.createElement("div");         // crear <div> para la tarjeta
  card.classList.add("card-grado");                    // añadir clase base para estilos

  // Al hacer click en la tarjeta navegamos a la página del grado
  card.addEventListener("click", () => {
    // Redirige a la página definida en el JSON (ej. transicion.html)
    window.location.href = grado.pagina;
  });

  const img = document.createElement("img");           // crear elemento <img>
  img.src = grado.imagen;                              // src apunta a la ruta de la imagen
  img.alt = grado.nombre;                              // texto alternativo para accesibilidad

  const titulo = document.createElement("div");        // contenedor del texto del título
  titulo.classList.add("card-titulo");                 // clase para estilos del título
  titulo.textContent = grado.nombre;                   // texto que muestra el nombre del grado

  // Inserta la imagen y el título dentro de la tarjeta
  card.appendChild(img);
  card.appendChild(titulo);

  return card;                                         // devolvemos la tarjeta ya construida
}

/* 4) Función que carga el JSON y genera todas las tarjetas */
function cargarGrados() {
  fetch(JSON_GRADOS)                                   // pedir el archivo JSON
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar data/grados.json");
      return response.json();                          // parsear JSON a objeto JS
    })
    .then(data => {
      // por cada grado en el JSON creamos una tarjeta y la agregamos al DOM
      data.grados.forEach(grado => {
        const tarjeta = crearTarjetaGrado(grado);     // crear tarjeta
        catalogoContainer.appendChild(tarjeta);       // añadir tarjeta al contenedor
      });
    })
    .catch(err => {
      console.error("Error cargando los grados:", err); // mostrar error en consola
      // mostrar feedback visual mínimo si quieres (opcional)
      catalogoContainer.innerHTML = "<p style='padding:20px;color:#c22821;font-weight:bold;'>Error cargando catálogo.</p>";
    });
}

/* 5) Ejecutar la carga cuando la página termine de cargar */
document.addEventListener("DOMContentLoaded", cargarGrados);
