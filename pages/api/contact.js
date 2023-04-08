import { mailOptions, transporter } from "@/config/nodemailer"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body // grab json payload

    // validation
    if (!data || !data.name || !data.email || !data.phone || !data.message) {
      return res.status(400).send({ message: "Bad request" })
    }

    // send email
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `CONTACT FORM SUBMISSION from ${data.name}`,
        text: "Hello world?",
        html: `
          <h1>${data.name} reached out via JassATM.com!</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone Number:</strong> ${data.phone}</p>
          <p><strong>Message:</strong> ${data.message}</p>
          <br/>
          <p>Powered by <a href="https://radiataweb.com">Radiata Web</a></p>
        `,
      })

      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }

  return res.status(400).json({ message: "Bad request" })
}

export default handler
