// Tailwind Config
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00d2ff",
                "accent-blue": "#0072ff",
                "deep-charcoal": "#0a0c10",
                "slate-dark": "#1a1f2e",
                "safety-yellow": "#facc15",
            },
            fontFamily: {
                "display": ["Space Grotesk"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
}
// Redirigir al hacer clic en cada especialidad
document.querySelectorAll('.glass-panel[data-link]').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
