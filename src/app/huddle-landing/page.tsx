/* eslint-disable @next/next/no-img-element */
import ImageLogo from "@/images/exercise01/logo.svg"
import ImageHero from "@/images/exercise01/illustration-mockups.svg"
import { Button } from "@/components/ui/button"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function HunddleLandingPage() {
	return (
		<div className=" bg-exercise-01-mobile lg:bg-exercise-01-desktop bg-exercise-01-violet font-open_sans mx-auto min-h-screen max-w-screen-2xl bg-[length:100%_55%] bg-no-repeat  pb-[78px] lg:bg-[length:100%_100%] lg:bg-left">
			<div className="px-6 sm:px-[80px] lg:px-[78px]">
				<header className="py-16">
					<img src={ImageLogo.src} alt="logo hunddle" />
				</header>
				<div className="mt-10 grid gap-x-14 gap-y-36 lg:grid-cols-2">
					<section className="">
						<img
							src={ImageHero.src}
							alt="hero"
							className="h-full w-full"
							height={ImageHero.height}
						/>
					</section>
					<section className="flex flex-col items-center lg:items-start">
						<h1 className="font-poppins mt-5 text-center text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-start">
							Build The Community <br /> Your Fans Will Love
						</h1>
						<p className=" mt-11 text-center text-xl text-white lg:text-start">
							Huddle re-imagines the way we build communities. You have a voice, but so does your
							audience. Create connections with your users as you engage in genuine discussion.
						</p>
						<Button className="text-exercise-01-violet hover:bg-exercise-01-soft-magenta mt-7 rounded-full bg-white px-16 shadow-lg hover:text-white">
							Register
						</Button>
					</section>
				</div>
				<header className="mt-7">
					<div className="hover:*:text-exercise-01-soft-magenta hover:*:border-exercise-01-soft-magenta flex justify-center gap-4 *:flex *:size-10 *:cursor-pointer *:items-center *:justify-center *:rounded-full *:border *:border-white *:text-white *:transition-all *:duration-300 *:ease-in-out lg:justify-end">
						<span>
							<FaFacebookF />
						</span>
						<span>
							<FaTwitter />
						</span>
						<span>
							<FaInstagram />
						</span>
					</div>
				</header>
			</div>
		</div>
	)
}
