import { Inter, Open_Sans, Poppins } from "next/font/google"
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "600"],
	variable: "--font-inter",
})
const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "600"],
	variable: "--font-poppins",
})
const open_sans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["400"],
	variable: "--font-open-sans",
})
export { inter, open_sans, poppins }
