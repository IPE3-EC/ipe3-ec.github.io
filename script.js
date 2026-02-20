tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00d2ff",
        "accent-blue": "#0072ff",
        "deep-charcoal": "#0a0c10",
        "slate-dark": "#1a1f2e",
        "safety-yellow": "#facc15",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
