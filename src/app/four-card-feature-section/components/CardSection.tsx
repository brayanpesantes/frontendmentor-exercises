import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
/* eslint-disable @next/next/no-img-element */
type Props = {
	readonly title: string
	readonly description: string
	readonly image: string
	readonly colorBorde: string
}
export default function CardSection({ description, image, title, colorBorde }: Props) {
	return (
		<Card className={cn("border-x-0  border-b-0 border-t-4  p-7 shadow-lg", colorBorde)}>
			<h3 className="text-xl font-semibold text-06-very-dark-blue">{title}</h3>
			<p className="mt-6 font-normal text-06-grayish-blue">{description}</p>
			<div className="mt-11 flex justify-end">
				<img src={image} alt="Supervisor" />
			</div>
		</Card>
	)
}
