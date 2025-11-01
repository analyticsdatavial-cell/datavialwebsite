/* transicion.js
   Lee data/actividades.json, toma la lista para la clave "TRANSICION"
   y genera tarjetas con nombre, materia y botón de descarga.
*/

/* Ruta al JSON de actividades */
const JSON_ACTIVIDADES = "data/actividades.json";

/* Contenedor donde se colocarán las tarjetas de actividades */
const activitiesContainer = document.getElementById("activities-container");

/* Nombre de la carpeta donde están los PDFs (según tu estructura B) */
const RUTA_PDFS = "GRADOS/TRANSICION/";

/* Función que crea la tarjeta de una actividad */
function crearTarjetaActividad(act) {
  const card = document.createElement("div");         // contenedor principal
  card.classList.add("card-grado");                    // reutilizamos estilos de tarjeta

  // Estructura interna: título + materia + botón
  const titulo = document.createElement("div");       // nombre de la actividad
  titulo.style.padding = "12px";
  titulo.style.fontWeight = "700";
  titulo.textContent = act.nombre;

  const materia = document.createElement("div");      // materia (texto secundario)
  materia.style.padding = "0 12px 12px 12px";
  materia.style.color = "var(--color-gray)";
  materia.textContent = act.materia;

  // Botón de descarga: enlace a GRADOS/TRANSICION/<archivo>
  const enlace = document.createElement("a");         // elemento <a> para descargar
  enlace.href = RUTA_PDFS + encodeURIComponent(act.archivo); // ruta al archivo (encoded)
  enlace.target = "_blank";                           // abrir en nueva pestaña/ventana
  enlace.rel = "noopener noreferrer";                 // seguridad
  enlace.classList.add("download-button");            // clase para estilo del botón
  enlace.style.display = "inline-block";
  enlace.style.margin = "12px";
  enlace.style.padding = "10px 14px";
  enlace.style.borderRadius = "8px";
  enlace.style.fontWeight = "700";
  enlace.style.textDecoration = "none";
  enlace.style.backgroundColor = "var(--color-green)"; // color verde para acción
  enlace.style.color = "#fff";                         // texto blanco en el botón
  enlace.textContent = "📥 Descargar";

  // Si quieres forzar descarga en vez de abrir, descomenta la siguiente línea:
  // enlace.setAttribute("download", act.archivo);

  // Componer la tarjeta
  card.appendChild(titulo);
  card.appendChild(materia);
  card.appendChild(enlace);

  return card;
}

/* Función que carga actividades desde el JSON y las muestra */
function cargarActividadesTransicion() {
  fetch(JSON_ACTIVIDADES)
    .then(resp => {
      if (!resp.ok) throw new Error("No se pudo cargar data/actividades.json");
      return resp.json();
    })
    .then(data => {
      const lista = data["TRANSICION"] || []; // seguridad: si no existe, lista vacía
      if (lista.length === 0) {
        activitiesContainer.innerHTML = "<p style='padding:16px;color:var(--color-gray)'>No hay actividades definidas para este grado.</p>";
        return;
      }

      // Limpiamos el contenedor y agregamos las tarjetas
      activitiesContainer.innerHTML = "";
      lista.forEach(act => {
        const tarjeta = crearTarjetaActividad(act);
        activitiesContainer.appendChild(tarjeta);
      });
    })
    .catch(err => {
      console.error("Error cargando actividades:", err);
      activitiesContainer.innerHTML = "<p style='padding:16px;color:#c22821;font-weight:bold;'>Error cargando actividades.</p>";
    });
}

/* Ejecutar al cargar la página */
document.addEventListener("DOMContentLoaded", cargarActividadesTransicion);
