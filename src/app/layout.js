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
  "Monaim Mukul — Frontend Engineer and Software Developer in Dhaka building fast, responsive web apps with React, Next.js and Tailwind CSS.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Monaim Mukul | Frontend Engineer",
    template: "%s | Monaim Mukul",
  },
  description,
  keywords: ["Monaim Mukul", "Frontend Engineer", "Software Developer", "React", "Next.js", "Portfolio", "Dhaka"],
  authors: [{ name: "Monaim Mukul" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Monaim Mukul | Frontend Engineer",
    description,
    images: [{ url: "/mukul-cutout.png", width: 1219, height: 1290, alt: "Monaim Mukul" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monaim Mukul | Frontend Engineer",
    description,
    images: ["/mukul-cutout.png"],
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
