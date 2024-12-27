import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


export async function POST(req, res) {
  try {
    const requestData = await req.json();
 
    const { name, email,  mobile_no,  message } = requestData;
    // Create a transporter using SMTP details
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465, 
      secure: true, 
      auth: {
        user: 'rajnish@acquireservices.in',
        pass: 'Rai@18rai', 
      },
      tls: {
          rejectUnauthorized: false
      }
    });

    // Create an email message
    let mailOptions = {
      from: "rajnish@acquireservices.in", 
      to: "rajnish@acquireservices.in", 
      subject: "New Contact Form Submission", 
      text: `You have received a new message from your website contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nMobile No: ${mobile_no}\nMessage: ${message}`, // plain text body
      html: `<strong>You have received a new message from your website contact form.</strong><br><br>Here are the details:<br>Name: ${name}<br>Email: ${email}<br>Mobile No: ${mobile_no}<br>Message: ${message}`, // html body
  };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // console.log("Email sent:", info.response);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        message: "Error sending an email, please try again",
      },
      {
        status: 500,
      }
    );
  }
}