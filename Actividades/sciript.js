let currentGradeData = null;

const gradesData = [
    {
        key: 'T',
        title: 'TRANSICIÓN',
        image: 'image_80e4ac.jpg',
        activities: [
            { name: 'El Semáforo de las Reglas', materia: 'Habilidades', ambiente: 'Aula' }
        ]
    }
];

// Render inicial
function loadGrades() {
    const container = document.getElementById("grade-cards-container");
    container.innerHTML = "";

    gradesData.forEach(grade => {
        const card = document.createElement("div");
        card.className = "p-6 bg-white shadow-md rounded-lg card-base";
        card.innerHTML = `
            <h3 class="text-xl font-bold">${grade.title}</h3>
        `;
        card.onclick = () => showDetail(grade.key);
        container.appendChild(card);
    });
}

function showDetail(key) {
    currentGradeData = gradesData.find(g => g.key === key);
    document.getElementById("home-view").classList.add("hidden");
    document.getElementById("detail-view").classList.remove("hidden");
}

function showHome() {
    document.getElementById("detail-view").classList.add("hidden");
    document.getElementById("home-view").classList.remove("hidden");
}

loadGrades();
