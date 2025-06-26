# Contact Form with Email Sending - Setup Guide

This guide will help you set up the contact form with automatic email sending functionality for your Pullr Next.js application.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install express cors nodemailer dotenv
npm install -D @types/express @types/cors @types/nodemailer tsx
```

### 2. Environment Configuration

Create a `.env` file in your project root:

```bash
cp .env.example .env
```

Edit `.env` with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
RECIPIENT_EMAIL=mythripopuri2001@gmail.com
NODE_ENV=development
PORT=3001
```

### 3. Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification** → **App passwords**
4. Generate an app password for "Mail"
5. Use this 16-character password in your `.env` file as `EMAIL_PASSWORD`

### 4. Run the Servers

**Terminal 1: Next.js Frontend**
```bash
npm run dev
```

**Terminal 2: Email Backend Server**
```bash
npm run email-dev
```

## 📁 File Structure

```
pullr/
├── src/
│   └── app/
│       └── contact/
│           └── page.tsx          # Updated contact form
├── server.ts                     # Email backend server
├── .env                         # Environment variables
├── .env.example                 # Example environment file
└── README-CONTACT-SETUP.md      # This guide
```

## 🔧 How It Works

### Frontend (Next.js - Port 3000)
- Contact form at `/contact`
- Submits data to `http://localhost:3001/send-email`
- Shows loading states and success/error messages
- Form validation and user feedback

### Backend (Express - Port 3001)
- Receives form data via POST request
- Validates input data
- Sends formatted email using Nodemailer
- Returns success/error responses

## 📧 Email Features

- **Professional HTML formatting** with branded styling
- **Reply-to functionality** - you can reply directly to the sender
- **Input validation** - prevents spam and invalid submissions
- **Error handling** - graceful failures with user feedback
- **Timestamp tracking** - know when messages were sent

## 🧪 Testing

### 1. Test the Backend Server
```bash
curl http://localhost:3001/health
```

Should return:
```json
{
  "status": "OK",
  "message": "Email server is running",
  "timestamp": "2024-01-XX..."
}
```

### 2. Test the Contact Form
1. Navigate to `http://localhost:3000/contact`
2. Fill out the form
3. Click "Send Message"
4. Check your email for the formatted message

### 3. Test Email Sending Manually
```bash
curl -X POST http://localhost:3001/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

## 🛠 Troubleshooting

### Common Issues

**"Invalid login" Error**
- Ensure you're using an App Password, not your regular Gmail password
- Verify 2FA is enabled on your Gmail account
- Check that EMAIL_USER and EMAIL_PASSWORD are correct in `.env`

**CORS Errors**
- Ensure the backend server is running on port 3001
- Check that the frontend is making requests to `http://localhost:3001`

**"Network Error" in Frontend**
- Verify both servers are running
- Check that ports 3000 and 3001 are not blocked
- Ensure `.env` file is in the project root

**Email Not Receiving**
- Check spam folder
- Verify RECIPIENT_EMAIL in `.env`
- Check server logs for error messages

### Environment Variables Checklist

- [ ] `.env` file exists in project root
- [ ] `EMAIL_USER` set to your Gmail address
- [ ] `EMAIL_PASSWORD` set to Gmail App Password (16 characters)
- [ ] `RECIPIENT_EMAIL` set to where you want to receive emails
- [ ] No spaces or quotes around values in `.env`

### Server Logs

Monitor the email server logs for debugging:
```bash
npm run email-dev
```

Look for:
- ✅ Server startup messages
- 📧 Email configuration details
- 🔗 CORS settings
- ❌ Any error messages

## 🔐 Security Notes

- **Never commit `.env` files** to version control
- Use **App Passwords** instead of regular Gmail passwords
- Consider using **environment-specific configurations** for production
- Implement **rate limiting** for production deployments

## 📱 Production Deployment

For production, consider:

1. **Environment Variables**: Use your hosting provider's environment variable system
2. **Email Service**: Consider using services like SendGrid, Mailgun, or AWS SES
3. **Rate Limiting**: Implement rate limiting to prevent spam
4. **SSL/HTTPS**: Ensure all communications are encrypted
5. **Error Monitoring**: Add logging and monitoring services

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Test each component individually
4. Check server logs for specific error messages

The contact form is now fully functional and will send emails directly to your specified email address! 