module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                font1: ["WindSong", "cursive"],
                font2: ["Poppins", "sans-serif"],
            },

            transformOrigin: {
                transOrigin: "100px 100px 0px",
            },
        },

        screens: {
            "2xl": { max: "1600px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        // ...
    ],
};
