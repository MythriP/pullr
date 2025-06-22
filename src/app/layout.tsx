import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pullr - Where Jobs Find You",
  description: "The next-gen job platform where people don't apply to jobs—jobs find them. Build your portfolio, showcase your skills, and let opportunities come to you.",
  keywords: ["jobs", "careers", "portfolio", "hiring", "recruitment", "talent"],
  authors: [{ name: "Pullr Team" }],
  creator: "Pullr",
  publisher: "Pullr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pullr.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pullr.dev",
    title: "Pullr - Where Jobs Find You",
    description: "The next-gen job platform where people don't apply to jobs—jobs find them.",
    siteName: "Pullr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pullr - Where Jobs Find You",
    description: "The next-gen job platform where people don't apply to jobs—jobs find them.",
    creator: "@pullr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
