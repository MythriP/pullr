# Pullr - Next-Gen Job Platform Landing Page

A modern, responsive landing page for Pullr - the job platform where jobs find you, not the other way around.

## 🚀 Features

- **Dual Mode Interface**: Toggle between Job Seeker and Recruiter views
- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Built with Tailwind CSS and Lucide React icons
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessible**: WCAG compliant design patterns

## 🔄 Two User Modes

### Mode 1: Job Seeker View
- Hero: "Tired of Applying to 500 Jobs? Let Them Find You Instead."
- Portfolio-focused messaging
- Community CTA section
- Focus on building and showcasing skills

### Mode 2: Recruiter View
- Hero: "No More Bot Resumes. Meet Real, Skilled People."
- Talent discovery messaging
- Emphasis on authentic portfolios
- Quality over quantity approach

## 🏗️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 🎨 Design System

- **Primary Colors**: Blue to Purple gradient
- **Secondary Colors**: Orange to Red gradient
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system
- **Rounded Corners**: Generous use of rounded-xl and rounded-3xl
- **Shadows**: Layered shadow system for depth

## 📱 Sections

1. **Hero Section** - Main value proposition with CTAs
2. **Why Us Section** - Key benefits and unique selling points
3. **Features Section** - Detailed feature breakdown
4. **Community CTA** - (Job Seekers only) Community engagement
5. **Footer** - Links, status, and additional info

## 🔗 Routes

- `/` - Main landing page
- `/about` - About page with company info
- `/login` - Authentication page (placeholder)
- `/contact` - Contact form and information

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pullr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

This project is ready for deployment on Vercel, Netlify, or any platform that supports Next.js:

```bash
npm run build
npm start
```

## 🎯 Key Components

- `ModeToggle` - Switches between Job Seeker and Recruiter modes
- `HeroSection` - Dynamic hero content based on mode
- `WhyUsSection` - Benefits and unique value proposition
- `FeaturesSection` - Detailed feature showcase
- `CommunityCTASection` - Community engagement (Job Seekers only)
- `Footer` - Site footer with links and status

## 🎨 Customization

The design system is built with CSS custom properties and Tailwind utilities. Key customizations can be made in:

- `tailwind.config.js` - Theme configuration
- `src/app/globals.css` - Global styles and custom components
- Individual component files for specific styling

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Development

- Built with TypeScript for type safety
- ESLint configured for code quality
- Optimized for performance with Next.js features
- Framer Motion for smooth animations

## 🚧 Status

This is a static marketing page. The following features are planned:

- User authentication system
- Dynamic portfolio builder
- Matching algorithm
- Real-time notifications
- Advanced filtering

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Lucide React for beautiful icons
- Framer Motion for smooth animations

---

Built with ❤️ for the next generation of talent discovery.
