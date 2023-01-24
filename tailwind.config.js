const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
            }
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            red: colors.red,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            green: colors.green,
            slate: colors.slate,
            blue: {
                '50': '#f3f8fc',
                '100': '#e7f1f9',
                '200': '#c3dcef',
                '300': '#9fc7e5',
                '400': '#579dd2',
                '500': '#0f73be',
                '600': '#0e68ab',
                '700': '#0b568f',
                '800': '#094572',
                '900': '#07385d'
            },
            sky: {
                '50': '#f5fbf4',
                '100': '#ebf8ea',
                '200': '#cdedca',
                '300': '#aee3ab',
                '400': '#72cd6b',
                '500': '#35b82c',
                '600': '#30a628',
                '700': '#288a21',
                '800': '#206e1a',
                '900': '#1a5a16'
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
