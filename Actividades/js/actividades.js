// =======================================================================
// activities.js - Código Completo y Funcional con Filtrado Dinámico
// =======================================================================

// --- CONTENIDO GLOBAL DE SECCIONES ---

const HEADER_HTML = `
    <header>
    <link rel="stylesheet" href="../footer.css">
        <div class="header-main-content"> 
            <div class="logo-title-group">
                <img id="logo" src="../images/logo.png" alt="Logo de DATAVIAL ANALYTICS" class="main-logo">
                <div class="title-and-subtitle">
                    <h1>CATÁLOGO <span class="app-name">DataVial<span class="red-char">A</span>naly<span class="red-char">TIC</span>s</span></h1>
                    <p>Actividades Lúdicas y Creativas por Grado.</p>
                </div>
            </div>
            <a href="catalogo.html" class="back-link">← Volver a Portadas</a>
        </div>
    </header>

    <section class="grade-header">
        <h2>📚 GRADO: <span id="current-grade"></span></h2>
        <hr>
    </section>
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
            <p><strong>Punto de Verificación (Inicio):</strong> El docente se capacita en el uso del formulario y la plataforma de evidencias.</p>
        </div>
        <div class="flow-step">
            <span class="step-icon step-mitad">📒</span> 
            <p><strong>Punto de Verificación (Mitad):</strong> Se desarrolan las actividades por grado y materia, guiadas por el docente.</p>
        </div>
        <div class="flow-step">
            <span class="step-icon step-entrega">✅</span> 
            <p><strong>Punto de Verificación (Entrega):</strong> El docente registra las evidencias en el formulario, y el equipo de DataVialAnalytics gestiona su análisis y retroalimentación técnica.
</p>
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
                activitiesGrid.innerHTML = `<p style="width: 100%; text-align: center;">No hay actividades disponibles para el grado ${currentGradeDisplay}.</p>`;
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
         activitiesGrid.innerHTML = `<p style="width: 100%; text-align: center; margin-top: 30px;">No se encontraron actividades que coincidan con los filtros.</p>`;
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
