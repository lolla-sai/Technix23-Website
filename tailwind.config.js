/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pagesections/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "Calibri", "sans-serif"],
                LondrinaSolid: ["Londrina Solid"],
            },
            borderRadius: {
                none: "0",
                sm: "0.125rem",
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                "3xl": "1.5rem",
                mid: "75px",
                full: "9999px",
            },
            colors: {
                "custom-red": "#F3442D",
                "custom-pitch": "#FFE198",
                "footer-bg": "#FFE198",
                "footer-black": "#414141",
            },
            screens: {
                xsm: "390px",
                xs: "450px",
                xmd: "820px",
                avg: "1000px",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
