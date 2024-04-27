/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button"
import ImageLogo from "@/images/exercise02/logo.svg"
import ImageHero from "@/images/exercise02/illustration-dashboard.webp"
import { Input } from "@/components/ui/input"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { useState } from "react"
import { validatedEmail } from "@/utils/validatedEmail"
import { cn } from "@/lib/utils"
export default function PingComingSoonPage() {
	const [email, setEmail] = useState("")
	const [error, setError] = useState(false)
	const [errorMsg, setErrorMsg] = useState("")

	const handleSubmit = () => {
		setError(false)
		setErrorMsg("")
		if (!email) {
			setError(true)
			setErrorMsg("Please enter a email address")
			return
		}
		if (!validatedEmail(email)) {
			setError(true)
			setErrorMsg("Please provide a valid email address")
			return
		}
		setError(false)
		alert("email summit")
	}

	return (
		<div className="min-h-screen max-w-screen-2xl font-libre_franklin text-xl">
			<div className="px-6 sm:px-14 lg:mx-auto lg:w-[642px] lg:px-0">
				<header className="mt-[168px] flex justify-center lg:mt-[86px] ">
					<img src={ImageLogo.src} alt="ping Coming soon logo" className="h-8" />
				</header>
				<div className="mt-[90px] text-center lg:mt-[58px]">
					<h1 className="text-4xl font-semibold text-exercise-02-gray">
						We are launching{" "}
						<strong className="font-bold text-exercise-02-very-dark-blue">soon!</strong>
					</h1>
					<p className="mt-11 text-exercise-02-very-dark-blue lg:mt-6">
						Subscribe and get notified
					</p>
				</div>
				<div className="mt-16 lg:mt-11">
					<section className=" px-10 lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-4 lg:px-0">
						<div className="flex flex-col gap-y-2 lg:basis-2/3">
							<Input
								className={cn(
									"rounded-full border-exercise-02-pale-blue py-7 ps-16  placeholder:text-exercise-02-pale-blue focus-visible:ring-exercise-02-blue lg:ps-8",
									{
										"border-exercise-02-light-red focus-visible:ring-exercise-02-light-red": error,
									}
								)}
								placeholder="Your email address..."
								onChange={(e) => setEmail(e.target.value)}
							/>
							{error && (
								<span className="block ps-8 text-sm text-exercise-02-light-red">{errorMsg}</span>
							)}
						</div>

						<Button
							className="mt-5 w-full rounded-full bg-exercise-02-blue py-7 font-semibold shadow-md shadow-exercise-02-pale-blue hover:bg-exercise-02-blue/80 lg:mt-0 lg:basis-1/3"
							onClick={handleSubmit}
						>
							Notify Me
						</Button>
					</section>
					<section className="mt-[130px] lg:mt-[90px]">
						<img src={ImageHero.src} alt="Hero del dashboard" />
					</section>
				</div>
				<div className="mt-60 flex justify-center gap-6 hover:*:border-exercise-02-blue hover:*:bg-exercise-02-blue hover:*:text-white lg:mt-[70px]">
					<Button
						variant={"outline"}
						size={"icon"}
						className="size-[60px] rounded-full border-exercise-02-gray text-exercise-02-blue"
					>
						<FaFacebookF className="size-7" />
					</Button>
					<Button
						variant={"outline"}
						size={"icon"}
						className="size-[60px] rounded-full border-exercise-02-gray text-exercise-02-blue"
					>
						<FaTwitter className="size-7" />
					</Button>
					<Button
						variant={"outline"}
						size={"icon"}
						className="size-[60px] rounded-full border-exercise-02-gray text-exercise-02-blue"
					>
						<FaInstagram className="size-7" />
					</Button>
				</div>
				<footer className="py-14 lg:py-7">
					<p className="text-center text-exercise-02-gray">
						&copy; Copyright Ping. All rights reserved.
					</p>
				</footer>
			</div>
		</div>
	)
}
