import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log('Contact form submission received:', { name, company, email });

        // Check if SMTP configuration is present
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn('SMTP configuration missing. Email will not be sent.');
            console.log('Message content:', message);
            // Return success even if email fails in dev mode, but log warning
            return NextResponse.json(
                {
                    success: true,
                    message: 'Form submitted successfully (Dev mode: Email not sent due to missing config)'
                },
                { status: 200 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address
            to: 'ammaran620@gmail.com', // Receiver address
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Company: ${company || 'Not provided'}
Email: ${email}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Company:</strong> ${company || 'Not provided'}</p>
<p><strong>Email:</strong> ${email}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            {
                success: true,
                message: 'Message sent successfully!'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Failed to process form submission' },
            { status: 500 }
        );
    }
}
