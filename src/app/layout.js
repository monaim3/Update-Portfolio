import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rajdhani",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const description =
  "Monaim Mukul — Frontend Developer in Dhaka building fast, responsive web apps with React, Next.js and Tailwind CSS.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Monaim Mukul | Frontend Developer",
    template: "%s | Monaim Mukul",
  },
  description,
  keywords: ["Monaim Mukul", "Frontend Developer", "React", "Next.js", "Portfolio", "Dhaka"],
  authors: [{ name: "Monaim Mukul" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Monaim Mukul | Frontend Developer",
    description,
    images: [{ url: "/mukul2.png", width: 2160, height: 2160, alt: "Monaim Mukul" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monaim Mukul | Frontend Developer",
    description,
    images: ["/mukul2.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} antialiased`}>
        <SmoothScroll />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
