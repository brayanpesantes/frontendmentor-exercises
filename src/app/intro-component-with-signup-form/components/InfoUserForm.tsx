"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { MdError } from "react-icons/md"
import { z } from "zod"

const formSchema = z.object({
	firstName: z.string().min(2, { message: "First Name cannot be empty" }),
	lastName: z.string().min(2, { message: "Last Name cannot be empty" }),
	email: z.string().email({ message: "Email look this is not an  email." }),
	password: z.string().min(8, { message: "Password cannot be empty" }),
})

export const InfoUserForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	})
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		alert(JSON.stringify(values))
	}
	return (
		<Card className="p-6">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field, formState }) => (
							<FormItem>
								<FormControl>
									<div className="relative">
										<Input
											placeholder="First Name"
											{...field}
											className={cn("text-04-dark-blue h-auto px-5 py-4 font-medium ", {
												"focus-visible:ring-04-red border-04-red text-04-red":
													formState.errors.firstName,
											})}
										/>
										{formState.errors.firstName && (
											<span className="text-04-red absolute right-4 top-3.5">
												<MdError className="size-6" />
											</span>
										)}
									</div>
								</FormControl>
								<FormMessage className="text-right text-xs italic" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field, formState }) => (
							<FormItem>
								<FormControl>
									<div className="relative">
										<Input
											placeholder="Last Name"
											{...field}
											className={cn("text-04-dark-blue h-auto px-5 py-4 font-medium", {
												"focus-visible:ring-04-red border-04-red text-04-red":
													formState.errors.lastName,
											})}
										/>
										{formState.errors.lastName && (
											<span className="text-04-red absolute right-4 top-3.5">
												<MdError className="size-6" />
											</span>
										)}
									</div>
								</FormControl>
								<FormMessage className="text-right text-xs italic" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field, formState }) => (
							<FormItem>
								<FormControl>
									<div className="relative">
										<Input
											placeholder="Email"
											{...field}
											className={cn("text-04-dark-blue h-auto px-5 py-4 font-medium", {
												"focus-visible:ring-04-red border-04-red text-04-red":
													formState.errors.email,
											})}
										/>
										{formState.errors.email && (
											<span className="text-04-red absolute right-4 top-3.5">
												<MdError className="size-6" />
											</span>
										)}
									</div>
								</FormControl>
								<FormMessage className="text-right text-xs italic" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field, formState }) => (
							<FormItem>
								<FormControl>
									<div className="relative">
										<Input
											placeholder="Password"
											type="password"
											{...field}
											className={cn("text-04-dark-blue h-auto px-5 py-4 font-medium", {
												"focus-visible:ring-04-red  border-04-red text-04-red":
													formState.errors.password,
											})}
										/>
										{formState.errors.password && (
											<span className="text-04-red absolute right-4 top-3.5">
												<MdError className="size-6" />
											</span>
										)}
									</div>
								</FormControl>
								<FormMessage className="text-right text-xs italic" />
							</FormItem>
						)}
					/>
					<Button className=" border-04-green bg-04-green/80 hover:bg-04-green/50 h-auto w-full border-b-4 py-4 uppercase">
						Claim your free trial
					</Button>
				</form>
			</Form>
			<p className="text-04-grayish-blue mt-4 text-center text-xs">
				By clicking the button, you are agreeing to our{" "}
				<strong className="text-04-red">Terms and Services</strong>
			</p>
		</Card>
	)
}
