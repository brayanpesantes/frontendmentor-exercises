/* eslint-disable @next/next/no-img-element */
import ImageLogo from "@/images/exercise01/logo.svg"
import ImageHero from "@/images/exercise01/illustration-mockups.svg"
import { Button } from "@/components/ui/button"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function HunddleLandingPage() {
	return (
		<div className="mx-auto min-h-screen max-w-screen-2xl bg-exercise-01-violet bg-exercise-01-mobile bg-contain bg-no-repeat pb-[78px] lg:bg-exercise-01-desktop lg:bg-auto lg:bg-left-top">
			<div className="px-6 sm:px-20">
				<header className="py-[74px] lg:py-16">
					<img src={ImageLogo.src} alt="logo hunddle" className="h-10 lg:h-9" />
				</header>
				<div className="mt-16 flex w-full flex-col gap-x-14 gap-y-[140px] lg:mt-9 lg:flex-row">
					<section className="basis-7/12">
						<img src={ImageHero.src} alt="hero" className="h-full w-full " />
					</section>
					<section className="flex basis-5/12 flex-col items-center lg:items-start">
						<h1 className="mt-5 text-center font-poppins text-2xl font-semibold text-white sm:text-3xl md:text-[46px] md:leading-tight lg:text-start">
							Build The Community Your Fans Will Love
						</h1>
						<p className=" mt-11 text-center font-open_sans text-base text-white sm:text-3xl lg:text-start lg:text-xl">
							Huddle re-imagines the way we build communities. You have a voice, but so does your
							audience. Create connections with your users as you engage in genuine discussion.
						</p>
						<Button className="mt-7 rounded-full bg-white px-16 text-exercise-01-violet shadow-lg hover:bg-exercise-01-soft-magenta hover:text-white">
							Register
						</Button>
					</section>
				</div>
				<footer className="mt-7">
					<div className="flex justify-center gap-4 *:flex *:size-10 *:cursor-pointer *:items-center *:justify-center *:rounded-full *:border *:border-white *:text-white *:transition-all *:duration-300 *:ease-in-out hover:*:border-exercise-01-soft-magenta hover:*:text-exercise-01-soft-magenta lg:justify-end">
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
				</footer>
			</div>
		</div>
	)
}
