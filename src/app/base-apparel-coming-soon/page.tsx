"use client"
/* eslint-disable @next/next/no-img-element */
import ImageLogo from "@/images/exercise05/logo.svg"
import HeroDesktop from "@/images/exercise05/hero-desktop.jpg"
import HeroMobile from "@/images/exercise05/hero-mobile.jpg"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MdNavigateNext, MdOutlineError } from "react-icons/md"
import { cn } from "@/lib/utils"

const formSchema = z.object({
	email: z.string().email({ message: "please provide a valid email" }),
})

export default function BaseApparelComingSoonPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		alert(JSON.stringify(values))
	}
	return (
		<main className="min-h-screen max-w-screen-2xl font-josefin_sans text-base font-light">
			<section className="grid h-screen grid-cols-1 md:grid-cols-2 md:grid-rows-12 md:gap-16 md:pl-20 lg:gap-x-[220px] lg:pl-40">
				<div className="px-8 py-7">
					<img src={ImageLogo.src} className="h-6 w-auto " alt="logo" />
				</div>
				<div className="h-[250px] md:row-span-12 md:h-full">
					<img
						src={HeroMobile.src}
						alt="hero"
						className="h-full w-full object-cover"
						srcSet={`${HeroMobile.src} 767w, ${HeroDesktop.src} 1440w`}
						sizes="(max-width: 767px) 767px, 1440px"
					/>
				</div>
				<div className="mt-16 px-6 md:row-span-9">
					<h1 className="text-center text-5xl uppercase tracking-widest md:text-start">
						<span className="text-05-desaturated-red"> We&apos;re </span>
						<span className="font-semibold text-05-dark-grayish-red">coming soon</span>
					</h1>
					<p className="mt-8 text-center font-normal text-05-desaturated-red md:text-start">
						Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your
						email below to stay up-to-date with announcements and our launch deals.
					</p>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="mt-9 pb-20">
							<FormField
								control={form.control}
								name="email"
								render={({ field, formState }) => (
									<FormItem>
										<FormControl>
											<div className="relative h-12 ">
												<Input
													placeholder="Email Address"
													{...field}
													className={cn(
														"h-full rounded-full border-05-desaturated-red pe-20 ps-6 font-normal placeholder:text-05-desaturated-red",
														{
															"focus-visible:ring-05-soft-red": formState.errors.email,
														}
													)}
												/>
												<Button className="drop-shadow-05-red-100 absolute end-0 top-0 h-12 w-16 rounded-full bg-gradient-to-tr from-05-gray-100 to-05-red-200 to-95% drop-shadow-lg hover:from-05-gray-200 hover:to-05-red-100">
													<MdNavigateNext className="size-6" />
												</Button>
												{formState.errors.email && (
													<span className="absolute right-[70px] top-3.5">
														<MdOutlineError className="size-6 text-05-soft-red" />
													</span>
												)}
											</div>
										</FormControl>
										<FormMessage className="ps-6 text-xs" />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</div>
			</section>
		</main>
	)
}
