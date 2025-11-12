// =======================================================================
// activities.js - Código Completo y Funcional con Filtrado Dinámico
// =======================================================================

// --- CONTENIDO GLOBAL DE SECCIONES ---

const HEADER_HTML = `
    <header>
      <link rel="stylesheet" href="../footer.css">
      <link rel="stylesheet" href="../header.css">
        <div id="start">
            <img id="logo" src="../images/favicon.png" alt="LOGO DE DATAVIAL">
            <h1 id="title">DataVialAnalytics</h1>
        </div>
    <nav>
<ul>
  <li>
    <a href="../index.html">INICIO</a>
    <ul class="submenu">
      <li><a href="../index.html#sobre">Sobre el Proyecto</a></li>
      <li><a href="../index.html#objetivo">Objetivos</a></li>
      <li><a href="../index.html#metodologia">Metodología</a></li>
    </ul>
  </li>
  <li>
    <a href="../nosotros/nosotros.html">QUIENES SOMOS</a>
    <ul class="submenu">
      <li><a href="../nosotros/nosotros.html#valores">Valores</a></li>
      <li><a href="../nosotros/nosotros.html#equipo">Equipo</a></li>
    </ul>
  </li>
  <li>
    <a href="../analisis/analisis.html">ANALISIS</a>
    <ul class="submenu">
      <li><a href="../analisis/analisis.html#consultas">Consultas</a></li>
      <li><a href="../analisis/analisis.html#descargas">Descargas</a></li>
    </ul>
  </li>
  <li>
    <a href="../prevenciones/prevenciones.html">PREVENCIONES</a>
    <ul class="submenu">
      <li><a href="../prevenciones/prevenciones.html#cultura" style="text-align: center;">Cultura de Movilidad en Barranquilla</a></li>
      <li class="sub"><img src="../images/conductorV3.png" alt="FOTO DE CONDUCTOR" width="40px" height="40px"><a href="../prevenciones/prevenciones.html#conductores">Conductores</a></li>
      <li class="sub"><img src="../images/walk.png" alt="FOTO DE PEATON" width="40px" height="40px"><a href="../prevenciones/prevenciones.html#peatones">Peatones</a></li>
      <li class="sub"><img src="../images/bicicleta.png" alt="FOTO DE PASAJERO" width="40px" height="40px"><a href="../prevenciones/prevenciones.html#pasajeros">Pasajeros</a></li>
    </ul>
  </li>
  <li>
    <a href="../recursos/recursos.html">RECURSOS EDUCATIVOS</a>
    <ul class="submenu">
      <li><a href="../recursos/recursos.html#videos">Videos</a></li>
      <li><a href="../recursos/recursos.html#señales">Señales de transito</a></li> 
      <li><a href="../recursos/recursos.html#interactivo">Sección Interactiva</a></li>
    </ul>
  </li>
  <button id="btn"><img src="../images/lupa.png" alt="BOTON DE BUSQUEDA" hidden></button>
</ul>
        </nav>


    <article class="">
        <p><a style="color: inherit; text-decoration: none;" href="./catalogo.html">Volver al catálogo</a></p>
    </article>
    </header>
`;

// ... (El resto de tu actividades.js permanece sin cambios)
const FOOTER_HTML = `
<!--FOOTER-->
<div class="footer-logo-depa-bar">
    <img id="atl" src="../images/LOGOTRANSITO.png" height="160" width="150" alt="FOTO DEL DEPARTAMENTO DEL ATLANTICO">
    <img src="../logos/sena_black.png" height="90" width="90" alt="Logo Sena" style="margin-top: 0.5rem;">
    <img id="spr" src="../images/supertransporte_footer.png" height="160" width="150" alt="FOTO DE LA SUPERINTENDENCIA DE TRANSPORTE">
</div>
  <footer>
    <!--BANDA BLANCA*-->

  <!-- 🔹 Column 1: Redes + Sena -->
  <div class="footer-col">
    <h2>Síguenos</h2>
    <ul class="logos">
      <li><a href="https://www.facebook.com/share/16LubPom5W/" target="_blank"><img src="../logos/facebook.png" height="40" width="40" alt="FACEBOOK"></a></li>
      <li><a href="https://github.com/analyticsdatavial-cell" target="_blank"><img src="../logos/github.png" height="40" width="40" alt=""></a></li>
      <li><a href="https://www.instagram.com/data_vialanalytics?igsh=MWx5bmppaHk0czVrag==" target="_blank"><img src="../logos/instagram.png" height="40" width="40" alt=""></a></li>
      <li><a href="https://www.linkedin.com/in/data-vial-analytics-1b2627382?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSUz6cn9FQRSaJ5VYcaNm%2FA%3D%3D" target="_blank"><img src="../logos/linkedin.png" height="40" width="40" alt=""></a></li>
      <li><a href="https://www.tiktok.com/@datavial_analytics?_t=ZS-8zjLNM77zkn&_r=1" target="_blank"><img src="../logos/tik-tok.png" height="40" width="40" alt=""></a></li>
    </ul>
  </div>

  <!-- 🔹 Column 2: Contactos -->
  <div class="footer-col">
    <h1 style="font-size: 32px;">Contacto</h1>
    <ul class="contact">
      <li>Correo: analyticsdatavial@gmail.com</li>
      <li>Dirección: Cra. 54 #68 – 80, Nte. Centro Historico,<br>Barranquilla, Atlántico.</li>
    </ul>
  </div>

  <!-- 🔹 Bottom section -->
  <div class="footer-bottom">
    <p>© 2025 Data Vial Analytics. Todos los derechos reservados.</p>
    <a href="#logo"><img src="../images/arrow.svg" alt="INICIO" class="borde"></a>
  </div>
</footer>
`;

const FLOW_HTML = `
    <section class="flow-container">
        <div class="flow-title">
            <span class="flow-icon">✅</span>
            <h2>Flujo de Seguimiento del Plan</h2>
        </div>
        <div class="flow-step">
            <span class="step-icon step-inicio">📍</span> 
            <p><strong>Punto de Verificación (Inicio):</strong> El Project Manager (Natalia) valida que los tutores tengan los materiales y el plan de cada actividad.</p>
        </div>
        <div class="flow-step">
            <span class="step-icon step-mitad">📒</span> 
            <p><strong>Punto de Verificación (Mitad):</strong> El equipo de Calidad y Análisis (Juan) realiza una visita sorpresa a 2 aulas por ciclo para recolectar evidencias fotográficas de la actividad en curso.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaaM4tdDM7HIAKuAwGSzbngNP9SlmfaXwgMhTatXKQB4ExRA/viewform?usp=publish-editor">Formulario de envío de actividades</a>
        </div>
        <div class="flow-step">
            <span class="step-icon step-entrega">✅</span> 
            <p><strong>Punto de Verificación (Entrega):</strong> Los estudiantes suben las evidencias finales (videos, reportes, mockups) a una carpeta compartida y el equipo de Investigación (José Daniel) resume los 3 proyectos más exitosos de cada ciclo para presentación.</p>
        </div>
    </section>
`;

// --- LÓGICA CORE Y FUNCIONES AUXILIARES ---

// Variable para almacenar todas las actividades del grado
let allActivities = []; 
// Elementos de Filtro y Contenedores (acceso global dentro del DOMContentLoaded)
let activitiesGrid;
let filterMateria;
let filterAmbiente;
let currentGradeDisplay;
let currentGradeKey;

// Función auxiliar para eliminar acentos (tildes)
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('body'); 
    
    // 1. INYECTAR SECCIONES GLOBALES
    if (mainContainer) {
        mainContainer.insertAdjacentHTML('afterbegin', HEADER_HTML);
    }
    
    // 2. IDENTIFICACIÓN DEL GRADO
    const filename = window.location.pathname.split('/').pop().replace('.html', ''); 
    currentGradeDisplay = filename.toUpperCase(); 
    currentGradeKey = removeAccents(filename).toUpperCase(); 

    // Inyectar el nombre del grado
    const gradoDisplayElement = document.getElementById('current-grade');
    if (gradoDisplayElement) {
        gradoDisplayElement.textContent = currentGradeDisplay;
    }

    // 3. OBTENER REFERENCIAS DE ELEMENTOS
    activitiesGrid = document.getElementById('activities-grid');
    filterMateria = document.getElementById('filter-materia');
    filterAmbiente = document.getElementById('filter-ambiente');

    // 4. INYECTAR FLUJO Y FOOTER (después de obtener las referencias)
    if (mainContainer) {
        mainContainer.insertAdjacentHTML('beforeend', FLOW_HTML);
        mainContainer.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
    
    // 5. ESCUCHAR CAMBIOS EN LOS FILTROS
    filterMateria.addEventListener('change', applyFilters);
    filterAmbiente.addEventListener('change', applyFilters);

    // Iniciar la carga de actividades
    loadActivities();
});


// --- FUNCIONES DE CARGA Y RENDERIZADO ---

function loadActivities() {
    fetch('./data/actividades.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el JSON: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            allActivities = data[currentGradeKey] || []; // Guardamos la data completa
            
            if (allActivities.length === 0) {
                activitiesGrid.innerHTML = `<p style="width: 100%; text-align: center; grid-column: 2 / 3;">No hay actividades disponibles para el grado ${currentGradeDisplay}.</p>`;
                return;
            }

            // Inicializar Filtros y Renderizar
            populateFilters(allActivities);
            renderActivities(allActivities);
        })
        .catch(error => {
            console.error("Fallo en la carga o procesamiento de actividades:", error);
            activitiesGrid.innerHTML = `<p style="width: 100%; text-align: center;">⚠️ No se pudieron cargar las actividades. Verifica la consola para más detalles.</p>`;
        });
}

function renderActivities(activities) {
    activitiesGrid.innerHTML = ''; // Limpia el contenedor
    if (activities.length === 0) {
         activitiesGrid.innerHTML = `<p style="width: 100%; text-align: center; margin-top: 30px; grid-column: 2 / 3;">No se encontraron actividades que coincidan con los filtros.</p>`;
         return;
    }

    activities.forEach(activity => {
        const cardHTML = createActivityCard(activity);
        activitiesGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function createActivityCard(activity) {
    const cardClass = activity.colorClase === 'verde' ? 'activity-card card-green' : 'activity-card card-blue';

    return `
        <div class="${cardClass}">
            <span class="tag tag-area">${activity.areaPrincipal}</span>
            <div class="tags-row">
                <span class="tag tag-materia">${activity.materia}</span>
                <span class="tag tag-ambiente">${activity.ambiente}</span>
            </div>
            <h3>${activity.titulo}</h3>
            <p class="description">${activity.descripcion}</p>
            <div class="objective-box">
                <strong>Objetivo:</strong> ${activity.objetivo}
            </div>
            <a href="${activity.planUrl}" class="btn-download" target="_blank">
                <span class="icon">↑</span> Descargar Plan
            </a>
        </div>
    `;
}

// --- FUNCIONES DE FILTRADO ---

function populateFilters(activities) {
    const materias = new Set();
    const ambientes = new Set();

    activities.forEach(a => {
        materias.add(a.materia);
        ambientes.add(a.ambiente);
    });

    // Llenar filtro de Materia (mantenemos la primera opción "Todas")
    materias.forEach(m => {
        const option = document.createElement('option');
        option.value = m;
        option.textContent = m;
        filterMateria.appendChild(option);
    });

    // Llenar filtro de Ambiente (mantenemos la primera opción "Todos")
    ambientes.forEach(a => {
        const option = document.createElement('option');
        option.value = a;
        option.textContent = a;
        filterAmbiente.appendChild(option);
    });
}

function applyFilters() {
    const selectedMateria = filterMateria.value;
    const selectedAmbiente = filterAmbiente.value;

    // Filtrar basado en los valores seleccionados
    const filteredActivities = allActivities.filter(activity => {
        
        // Condición de Materia: si el valor es 'Todas las Materias' o coincide con la actividad
        const materiaMatch = (selectedMateria === 'Todas las Materias' || activity.materia === selectedMateria);

        // Condición de Ambiente: si el valor es 'Aula / Exterior' o coincide con la actividad
        const ambienteMatch = (selectedAmbiente === 'Aula / Exterior' || activity.ambiente === selectedAmbiente);
        
        return materiaMatch && ambienteMatch;
    });

    renderActivities(filteredActivities);
}
