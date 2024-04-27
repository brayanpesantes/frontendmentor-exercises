import { Button } from "@/components/ui/button"
import { InfoUserForm } from "./components/InfoUserForm"

export default function IntroComponentWithSignUpFormPFage() {
	return (
		<main className="bg-exercise-04-mobile md:bg-exercise-04-desktop bg-04-red mx-auto flex min-h-screen max-w-screen-2xl items-center justify-center bg-cover bg-center bg-no-repeat font-poppins text-base font-normal">
			<section className="grid grid-cols-1 gap-y-16 px-4  py-24 md:gap-x-4 md:px-40 md:py-0 lg:grid-cols-2 lg:gap-x-16">
				<div className=" md:flex md:flex-col md:items-center md:justify-center">
					<h1 className=" text-center text-2xl font-bold text-white md:text-5xl lg:text-start">
						Learn to code by watching others
					</h1>
					<p className="mt-7 text-center text-white lg:text-start">
						See how experienced developers solve problems in real-time. Watching scripted tutorials
						is great, but understanding how developers think is invaluable.
					</p>
				</div>
				<div className="space-y-6">
					<Button className=" relative  h-auto w-full  rounded-2xl px-[76px] py-6 text-center  font-normal">
						<span className="absolute inset-0 top-2.5 h-full w-full rounded-2xl bg-gray-900/20"></span>
						<span className="bg-04-blue absolute inset-0 h-full w-full rounded-md"></span>
						<p className="relative flex flex-col items-center justify-center  md:flex-row md:gap-1">
							<span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter
						</p>
					</Button>

					<InfoUserForm />
				</div>
			</section>
		</main>
	)
}
