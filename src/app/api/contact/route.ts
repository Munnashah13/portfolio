import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const honeypot = formData.get('website') as string;

    // Check honeypot (spam protection)
    if (honeypot) {
      return NextResponse.json(
        { success: false, message: 'Spam detected' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the message in a database
    // 3. Send a notification to yourself

    // For now, we'll just log the message and return success
    console.log('Contact form submission:', { name, email, message });

    // Example with Resend (uncomment and add your API key):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Contact Form <noreply@yourdomain.com>',
    //   to: 'your@email.com',
    //   subject: `New message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
