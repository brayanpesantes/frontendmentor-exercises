import Link from "next/link"

export default function Home() {
	return (
		<main className="flex flex-col">
			<Link href="huddle-landing">huddle-landing-page</Link>
			<Link href="ping-coming-soon">ping-coming-soon</Link>
			<Link href="single-price-grid">single-price-grid</Link>
			<Link href="intro-component-with-signup-form">intro-component-with-signup-form</Link>
			<Link href="base-apparel-coming-soon">base-apparel-coming-soon</Link>
			<Link href="four-card-feature-section">four-card-feature-section</Link>
		</main>
	)
}
