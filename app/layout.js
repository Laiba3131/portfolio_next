import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hina Shahzadi — Frontend Developer & UI Designer",
  description:
    "Portfolio of Hina Shahzadi, a passionate Frontend Developer and UI Designer specializing in modern web applications, responsive UI, and user-focused digital experiences.",
  keywords: [
    "Hina Shahzadi",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Designer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
  ],
  authors: [{ name: "Hina Shahzadi" }],
  creator: "Hina Shahzadi",
  publisher: "Hina Shahzadi",
  openGraph: {
    title: "Hina Shahzadi — Frontend Developer & UI Designer",
    description:
      "Explore the portfolio of Hina Shahzadi, showcasing projects, skills, UI design work, and modern web development expertise.",
    url: "https://your-domain.com", // add later
    siteName: "Hina Shahzadi Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // optional
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hina Shahzadi — Frontend Developer & UI Designer",
    description:
      "Welcome to the portfolio of Hina Shahzadi, showcasing modern frontend development and UI design skills.",
    images: ["https://your-domain.com/og-image.jpg"], // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
