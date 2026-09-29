// ==============================
// FORMULARIO DE CONTACTO
// ==============================

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert(
        "¡Gracias por contactar conmigo, " +
        nombre +
        "! Tu mensaje ha sido recibido."
    );

    formulario.reset();
});


// ==============================
// ENLACES DE PROYECTOS
// ==============================

const enlacesProyecto = document.querySelectorAll(".project-link");

enlacesProyecto.forEach(function (enlace) {
    enlace.addEventListener("click", function (event) {
        event.preventDefault();

        alert(
            "Este proyecto todavía está en desarrollo. " +
            "Próximamente podrás consultar todos sus detalles."
        );
    });
});


// ==============================
// AÑO AUTOMÁTICO DEL FOOTER
// ==============================

const añoActual = new Date().getFullYear();

const textoFooter = document.querySelector(".footer-bottom p");

textoFooter.innerHTML =
    "&copy; " +
    añoActual +
    " Tu Nombre. Todos los derechos reservados.";
