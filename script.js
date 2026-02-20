// Configuración de temas y colores para Tailwind
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00d2ff",
                "accent-blue": "#0072ff",
                "deep-charcoal": "#0a0c10",
                "slate-dark": "#1a1f2e",
                "whatsapp": "#25D366",
            },
            fontFamily: {
                "display": ["Space Grotesk"]
            }
        },
    },
}

// Inicialización de funciones
document.addEventListener('DOMContentLoaded', () => {
    console.log("IPE3 Engineering by Corporación 360 cargado correctamente.");

    // Ejemplo: Cerrar menú móvil al hacer click en un enlace (si lo tuvieras)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Lógica para cerrar menús si es necesario
        });
    });
});
