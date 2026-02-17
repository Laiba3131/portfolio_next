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
  title: "Laiba Azam — Frontend Developer & UI Designer",
  description:
    "Portfolio of Laiba Azam, a passionate Frontend Developer and UI Designer specializing in modern web applications, responsive UI, and user-focused digital experiences.",
  keywords: [
    "Laiba Azam",
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
  authors: [{ name: "Laiba Azam" }],
  creator: "Laiba Azam",
  publisher: "Laiba Azam",
  openGraph: {
    title: "Laiba Azam — Frontend Developer & UI Designer",
    description:
      "Explore the portfolio of Laiba Azam, showcasing projects, skills, UI design work, and modern web development expertise.",
    url: "https://your-domain.com", // add later
    siteName: "Laiba Azam Portfolio",
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
    title: "Laiba Azam — Frontend Developer & UI Designer",
    description:
      "Welcome to the portfolio of Laiba Azam, showcasing modern frontend development and UI design skills.",
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
