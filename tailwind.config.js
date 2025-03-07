/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "alacer-bg": "#FFFCF5",
        "alacer-text": "#34302D",
        "alacer-primary": "#4F382B",
        "alacer-secondary": "#917E6E",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        afacad: ["Afacad", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "wave-1": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "wave-2": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        "wave-3": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        "wave-4": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
        "wave-out-1": {
          "0%": { strokeDasharray: "0 100", opacity: 0 },
          "100%": { strokeDasharray: "100 100", opacity: 1 },
        },
        "wave-out-2": {
          "0%": { strokeDasharray: "0 100", opacity: 0 },
          "25%": { strokeDasharray: "0 100", opacity: 0 },
          "100%": { strokeDasharray: "100 100", opacity: 1 },
        },
        "wave-out-3": {
          "0%": { strokeDasharray: "0 100", opacity: 0 },
          "50%": { strokeDasharray: "0 100", opacity: 0 },
          "100%": { strokeDasharray: "100 100", opacity: 1 },
        },
        "wave-out-4": {
          "0%": { strokeDasharray: "0 100", opacity: 0 },
          "75%": { strokeDasharray: "0 100", opacity: 0 },
          "100%": { strokeDasharray: "100 100", opacity: 1 },
        },
      },
      animation: {
        "wave-1": "wave-1 4s ease-in-out infinite",
        "wave-2": "wave-2 4s ease-in-out infinite 0.2s",
        "wave-3": "wave-3 4s ease-in-out infinite 0.4s",
        "wave-4": "wave-4 4s ease-in-out infinite 0.6s",
        "wave-out-1": "wave-out-1 3s ease-out infinite",
        "wave-out-2": "wave-out-2 3s ease-out infinite",
        "wave-out-3": "wave-out-3 3s ease-out infinite",
        "wave-out-4": "wave-out-4 3s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
