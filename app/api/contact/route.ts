import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    console.log("Setting up email transport with credentials...")
    console.log("Using EMAIL_USER:", process.env.EMAIL_USER) // Log without showing the full email
    console.log("EMAIL_APP_PASSWORD is set:", !!process.env.EMAIL_APP_PASSWORD) // Just log if it exists

    // Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, 
      },
    })

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    }

    // Verify connection configuration
    try {
      console.log("Verifying SMTP connection...")
      await transporter.verify()
      console.log("SMTP connection verified successfully")
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError)
      return NextResponse.json(
        { error: "Failed to connect to email server. Please try again later." },
        { status: 500 }
      )
    }

    // Send email
    console.log("Sending email...")
    const info = await transporter.sendMail(mailOptions)
    console.log(`Email sent successfully: ${info.messageId}`)

    return NextResponse.json({ 
      success: true, 
      message: "Your message has been sent successfully!" 
    })
  } catch (error) {
    console.error("Error sending email:", error)
    
    // More specific error handling
    const errorMessage = error instanceof Error 
      ? error.message 
      : "An unknown error occurred"
      
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: errorMessage 
    }, { status: 500 })
  }
}