export type ContactFormValues = {
  name: string
  email: string
  phone: string
  message: string
  "bot-field"?: string
}

/** Submit via Netlify Forms (application/x-www-form-urlencoded). */
export const sendContactForm = async (data: ContactFormValues) => {
  const body = new URLSearchParams({
    "form-name": "contact",
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    "bot-field": data["bot-field"] ?? "",
  })

  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  })

  if (!res.ok) throw new Error("Failed to send message")
  return { success: true }
}
