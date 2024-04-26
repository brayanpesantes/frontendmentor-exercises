import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			screens: {
				"2xl": "1440px",
			},
			colors: {
				"exercise-01": {
					"violet": "hsl(257, 40%, 49%)",
					"soft-magenta": "hsl(300, 69%, 71%)",
				},
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				open_sans: ["var(--font-open-sans)"],
				poppins: ["var(--font-poppins)"],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				"exercise-01-mobile": "url('/images/exercise01/bg-mobile.svg')",
				"exercise-01-desktop": "url('/images/exercise01/bg-desktop.svg')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
