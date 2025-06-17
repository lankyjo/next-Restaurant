import { DM_Sans, Forum, Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const forumDisplay = Forum({
  variable: "--font-forum-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Restaurant Remake by Ikeji",
  description:
    "A website designed and developed by ikeji, built with Next.js, Tailwind CSS",
  openGraph: {
    title: "Restaurant Remake",
    description:
      "A website designed and developed by ikeji, built with Next.js, Tailwind CSS",
    siteName: "Restaurant Remake",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Restaurant Remake",
    description:
      "A website designed and developed by ikeji, built with Next.js, Tailwind CSS",
    card: "summary_large_image",
    images: [
      {
        url: "/images/logo.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${dmSans.variable} ${geistMono.variable} ${forumDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
