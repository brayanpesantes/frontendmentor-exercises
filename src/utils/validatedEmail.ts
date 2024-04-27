export const validatedEmail = (text: string) => {
	const re = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z]{2,6})$/
	return re.test(String(text).toLowerCase())
}
