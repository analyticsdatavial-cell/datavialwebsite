// Scroll Reveal Effect
    const secciones = document.querySelectorAll(".contenido, .download-section");

    const mostrarSecciones = () => {
      secciones.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          sec.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", mostrarSecciones);
    mostrarSecciones();

    // Mostrar/ocultar submenús tipo dropdown
    document.querySelectorAll(".download-buttons button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = btn.nextElementSibling;

        // Cerrar otros submenús
        document.querySelectorAll(".submenu").forEach((sm) => {
          if (sm !== submenu) sm.style.display = "none";
        });

        // Alternar visibilidad
        submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
      });
    });

    // Cerrar si se hace clic fuera
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".btn-wrapper")) {
        document.querySelectorAll(".submenu").forEach((sm) => sm.style.display = "none");
      }
    });

  