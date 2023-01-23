/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class', /* for media or class */
	theme: {
		extend: {
			screens: {
				'xs': '375px',
				...defaultTheme.screens,
			  },
			backgroundImage: {
				sanFrancisco: "url('./img/sanFrancisco.jpg')",
				sanFranciscoDesktop: "url('./img/sanFranciscoDesktop.jpg')",
				new_york: "url('./img/new_york.jpg')",
				norway: "url('./img/norway.jpg')",
				yosemite: "url('./img/yosemite.jpg')",
				seattle: "url('./img/seattle.jpg')",
				LA: "url('./img/LA.jpg')",
				miami: "url('./img/miami.jpg')",
				sydney: "url('./img/sydney.jpg')",
				switzerland: "url('./img/switzerland.jpg')",
				bali: "url('./img/bali.jpg')",
				chicago: "url('./img/chicago.jpg')",
				europe: "url('./img/europe.jpg')",
				iceland: "url('./img/iceland.jpg')",
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			...colors,
			primary: {
				100: "#f5d5db",
				200: "#ebabb7",
				300: "#e08192",
				400: "#d6576e",
				500: "#cc2d4a",
				600: "#a3243b",
				700: "#7a1b2c",
				800: "#52121e",
				900: "#29090f",
			},
			secondary: {
				100: "#e9eccd",
				200: "#d2da9b",
				300: "#bcc76a",
				400: "#a5b538",
				500: "#8fa206",
				600: "#728205",
				700: "#566104",
				800: "#394102",
				900: "#1d2001",
			},
			terciary: {
				100: "#dfeff4",
				200: "#c0dfe9",
				300: "#a0cedf",
				400: "#81bed4",
				500: "#61aec9",
				600: "#4e8ba1",
				700: "#3a6879",
				800: "#274650",
				900: "#132328",
			},
		},
		fontFamily: {
			Sources: ["Source Sans Pro", "sans-serif"],
		},
	},
	plugins: [],
};
