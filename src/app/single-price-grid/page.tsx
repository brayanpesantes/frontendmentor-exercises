import { Button } from "@/components/ui/button"
import React from "react"

export default function SimplePriceGridPage() {
	return (
		<main className="font-karla bg-exercise-03-light-gray min-h-screen max-w-screen-2xl text-base font-normal md:flex md:items-center md:justify-center">
			<section className="mx-auto px-8 py-[70px] md:grid md:w-[640px] md:grid-cols-2 md:px-0 md:py-0">
				<div className="rounded-t-lg bg-white px-6 py-8 md:col-span-2 md:px-10 md:py-12">
					<h1 className="text-exercise-03-cyan text-xl font-bold">Join our community</h1>
					<h2 className="text-exercise-03-bright-yellow mt-7 font-bold">
						30-day, hassle-free money back guarantee
					</h2>
					<p className="text-exercise-03-grayish-blue mt-6 text-sm md:text-balance">
						Gain access to our full library of tutorials along with expert code reviews. Perfect for
						any developers who are serious about honing their skills.
					</p>
				</div>
				<div className="bg-exercise-03-cyan px-6 py-8  md:rounded-bl-md md:px-10 md:py-12">
					<h3 className="text-xl font-bold text-white ">Monthly Subscription</h3>
					<p className="text-exercise-03-light-gray/50 mt-5 inline-flex items-center gap-4">
						<span className="text-3xl font-bold text-white">&#36;29</span> per month
					</p>
					<p className="mt-4 text-white">Full access for less than &#36;1 a day</p>
					<Button className="bg-exercise-03-bright-yellow hover:bg-exercise-03-bright-yellow/80 mt-8 w-full font-bold">
						Sign Up
					</Button>
				</div>
				<div className="bg-exercise-03-cyan/80 rounded-b-md px-6  py-8 md:rounded-b-none md:rounded-br-md md:px-10 md:py-12">
					<h3 className="text-xl font-bold text-white ">Why Us</h3>
					<p className="mt-5 text-white/50">
						Tutorials by industry experts <br />
						Peer &amp; expert code review <br />
						Coding exercises <br />
						Access to our GitHub repos
						<br />
						Community forum <br />
						Flashcard decks <br />
						New videos every week
					</p>
				</div>
			</section>
		</main>
	)
}
