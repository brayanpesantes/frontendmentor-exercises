import { Inter, Open_Sans, Poppins } from "next/font/google"
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins" })
const open_sans = Open_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-open_sans" })
export { inter, open_sans, poppins }
