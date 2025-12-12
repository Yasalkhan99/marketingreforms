import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    // Support both SMTP_PASS and SMTP_PASSWORD for flexibility
    const smtpPassword = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      user: process.env.SMTP_USER,
      pass: smtpPassword ? '***' : undefined, // Hide password in logs
      port: process.env.SMTP_PORT,
    };

    if (!smtpConfig.host || !smtpConfig.user || !smtpPassword) {
      console.error('SMTP configuration missing:', {
        host: smtpConfig.host || 'MISSING',
        user: smtpConfig.user || 'MISSING',
        pass: smtpPassword ? 'SET' : 'MISSING',
        port: smtpConfig.port || 'MISSING',
      });
      
      // Provide helpful error message
      const missingFields = [];
      if (!smtpConfig.host) missingFields.push('SMTP_HOST');
      if (!smtpConfig.user) missingFields.push('SMTP_USER');
      if (!smtpPassword) missingFields.push('SMTP_PASS or SMTP_PASSWORD');
      
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact the administrator.',
          details: `Missing: ${missingFields.join(', ')}. Please check .env.local file and restart server.`
        },
        { status: 500 }
      );
    }

    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: parseInt(process.env.SMTP_PORT || '587') === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
      // Additional options for better compatibility
      requireTLS: true,
    });

    // Try to verify transporter configuration (optional - can skip if it fails)
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.warn('Transporter verification failed, but will try to send anyway:', verifyError.message);
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'yasalkhan90@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            This email was sent from the Marketing Reforms contact form.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check SMTP credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server.';
    } else if (error.message) {
      errorMessage = `Email error: ${error.message}`;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

