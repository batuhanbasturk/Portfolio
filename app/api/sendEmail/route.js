import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phoneNumber, message } =
      await req.json();

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL,
      subject: "Portfolio Contact Form",
      html: `
      <h1>Contact Details</h1>
      <ul>
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Email: ${email}</li>
        <li>Phone Number: ${phoneNumber}</li>
      </ul>
      <h1>Message</h1>
      <p>${message}</p>
    `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { message: "Failed to send Email" },
      { status: 500 }
    );
  }
}
