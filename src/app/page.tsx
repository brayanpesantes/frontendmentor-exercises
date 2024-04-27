import Link from "next/link"

export default function Home() {
	return (
		<main className="flex flex-col">
			<Link href="huddle-landing">huddle-landing-page</Link>
			<Link href="ping-coming-soon">ping-coming-soon</Link>
		</main>
	)
}
