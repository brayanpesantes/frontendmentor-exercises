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
				"exercise-02": {
					"blue": "hsl(223, 87%, 63%)",
					"pale-blue": "hsl(223, 100%, 88%)",
					"light-red": "hsl(354, 100%, 66%)",
					"gray": "hsl(0, 0%, 59%)",
					"very-dark-blue": "hsl(209, 33%, 12%)",
				},
				"exercise-03": {
					"cyan": "hsl(179, 62%, 43%)",
					"bright-yellow": "hsl(71, 73%, 54%)",
					"light-gray": "hsl(204, 43%, 93%)",
					"grayish-blue": "hsl(218, 22%, 67%)",
				},
				"04": {
					"red": "hsl(0, 100%, 74%)",
					"green": "hsl(154, 59%, 51%)",
					"blue": "hsl(248, 32%, 49%)",
					"dark-blue": "hsl(249, 10%, 26%)",
					"grayish-blue": "hsl(246, 25%, 77%)",
				},
				"05": {
					"desaturated-red": "hsl(0, 36%, 70%)",
					"soft-red": "hsl(0, 93%, 68%)",
					"dark-grayish-red": "hsl(0, 6%, 24%)",
					"gray-100": "hsl(0, 0%, 100%)",
					"gray-200": "hsl(0, 100%, 98%)",
					"red-100": "hsl(0, 80%, 86%)",
					"red-200": "hsl(0, 74%, 74%)",
				},
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				open_sans: ["var(--font-open-sans)"],
				poppins: ["var(--font-poppins)"],
				libre_franklin: ["var(--font-libre-franklin)"],
				karla: ["var(--font-karla)"],
				josefin_sans: ["var(--font-josefin-sans)"],
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
				"exercise-04-mobile": "url('/images/exercise04/bg-intro-mobile.png')",
				"exercise-04-desktop": "url('/images/exercise04/bg-intro-desktop.png')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
