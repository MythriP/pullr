import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Next.js dev server
    credentials: true
}));
app.use(express.json());

// Types
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Create transporter for sending emails
const createTransporter = () => {
    return nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your Gmail
            pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Replace with your Gmail App Password
        },
    });
};

// Email sending route
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, subject, message }: ContactFormData = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Name, email, and message are required fields'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Please provide a valid email address'
            });
        }

        const transporter = createTransporter();

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: process.env.RECIPIENT_EMAIL || 'mythripopuri2001@gmail.com', // Where you want to receive emails
            subject: `New Contact Form Message: ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                        New Contact Form Message
                    </h2>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #4F46E5; margin-top: 0;">Contact Details</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
                    </div>
                    
                    <div style="background: #fff; padding: 20px; border-left: 4px solid #4F46E5; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Message</h3>
                        <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <p style="margin: 0; font-size: 14px; color: #666;">
                            <strong>Sent from:</strong> Pullr Contact Form<br>
                            <strong>Timestamp:</strong> ${new Date().toLocaleString()}
                        </p>
                    </div>
                </div>
            `,
            replyTo: email, // This allows you to reply directly to the sender
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent successfully:', info.messageId);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('Error sending email:', error);

        // Handle specific errors
        if (error instanceof Error) {
            if (error.message.includes('Invalid login')) {
                return res.status(500).json({
                    error: 'Email authentication failed. Please check your credentials.'
                });
            }

            return res.status(500).json({
                error: 'Failed to send email. Please try again later.',
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }

        res.status(500).json({
            error: 'An unexpected error occurred. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Email server is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Email server running on http://localhost:${PORT}`);
    console.log(`🔗 CORS enabled for: http://localhost:3000`);
    console.log(`📧 Email configured for: ${process.env.EMAIL_USER || 'your-email@gmail.com'}`);
    console.log(`📬 Messages will be sent to: ${process.env.RECIPIENT_EMAIL || 'mythripopuri2001@gmail.com'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('📧 Email server shutting down gracefully...');
    process.exit(0);
});

export default app; 