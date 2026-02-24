import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
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
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
            },
            fontFamily: {
                serif: ["var(--font-playfair-display)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            spacing: {
                "section-py": "clamp(3rem, 10vw, 6rem)",
                "section-px": "clamp(1rem, 5vw, 4rem)",
            },
        },
    },
    plugins: [],
};
export default config;