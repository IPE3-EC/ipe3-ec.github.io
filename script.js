// Configuración de Tailwind extendida
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
                "whatsapp": "#25D366"
            },
            fontFamily: {
                "display": ["Space Grotesk"]
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            animation: {
                marquee: "marquee 25s linear infinite",
                "ken-burns": "kenburns 20s ease infinite alternate",
                "pulse-soft": "pulse-soft 2s infinite"
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" }
                },
                kenburns: {
                    "0%": { transform: "scale(1) translate(0, 0)" },
                    "100%": { transform: "scale(1.1) translate(-2%, -2%)" }
                },
                "pulse-soft": {
                    "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)" },
                    "70%": { boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" }
                }
            }
        }
    }
};
