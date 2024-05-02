import { Inter, Josefin_Sans, Karla, Libre_Franklin, Open_Sans, Poppins } from "next/font/google"
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "600"],
	variable: "--font-inter",
})
const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["200", "400", "500", "600", "700"],
	variable: "--font-poppins",
})
const open_sans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["400"],
	variable: "--font-open-sans",
})
const libre_franklin = Libre_Franklin({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "600", "700"],
	variable: "--font-libre-franklin",
})
const karla = Karla({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
	variable: "--font-karla",
})
const josefin_sans = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "600"],
	variable: "--font-josefin-sans",
})

export { inter, josefin_sans, karla, libre_franklin, open_sans, poppins }
