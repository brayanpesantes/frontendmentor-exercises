import CalculatorImage from "@/images/exercise06/icon-calculator.svg"
import KarmaImage from "@/images/exercise06/icon-karma.svg"
import SupervisorImage from "@/images/exercise06/icon-supervisor.svg"
import TeamBuilderImage from "@/images/exercise06/icon-team-builder.svg"
import CardSection from "./components/CardSection"

export default function FourCardFeatureSectionPage() {
	return (
		<main className="mx-auto min-h-screen max-w-screen-2xl bg-06-very-light-gray px-10 pb-16 font-poppins text-[15px] font-extralight">
			<div className="mx-auto pt-[90px] md:w-[500PX] md:text-center">
				<h1 className="text-3xl text-06-very-dark-blue md:text-4xl ">
					Reliable, efficient delivery
				</h1>
				<h2 className="text-3xl font-semibold text-06-very-dark-blue md:text-4xl">
					Powered by Technology
				</h2>
				<p className="mt-6 font-normal text-06-grayish-blue">
					Our Artificial Intelligence powered tools use millions of project data points to ensure
					that your project is successful
				</p>
			</div>
			<div className="mt-[76px] grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-3">
				<CardSection
					colorBorde="border-06-cyan"
					title="Supervisor"
					description="Monitors activity to identify project roadblocks"
					image={SupervisorImage.src}
				/>

				<div className="space-y-6">
					<CardSection
						colorBorde="border-06-red"
						title="Team Builder"
						description="Scans our talent network to create the optimal team for your project"
						image={TeamBuilderImage.src}
					/>
					<CardSection
						colorBorde="border-06-orange"
						title="Karma"
						description="Regularly evaluates our talent to ensure quality"
						image={KarmaImage.src}
					/>
				</div>
				<CardSection
					colorBorde="border-06-blue"
					title="Calculator"
					description="Uses data from past projects to provide better delivery estimates"
					image={CalculatorImage.src}
				/>
			</div>
		</main>
	)
}
