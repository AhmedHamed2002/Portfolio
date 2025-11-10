/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    extend: {
        keyframes: {
            float: {
            '0%, 100%': { transform: 'translateY(0) rotate(0)' },
            '33%': { transform: 'translateY(-30px) rotate(120deg)' },
            '66%': { transform: 'translateY(20px) rotate(240deg)' },
            },
        },
        animation: {
            float: 'float 20s ease-in-out infinite',
        },
    },
    plugins: [],
}