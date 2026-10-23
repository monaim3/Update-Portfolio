import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { siteUrl } from "@/lib/site";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rajdhani",
});

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

// Structured data so search engines know this is Monaim's personal site
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Monaim Mukul",
  jobTitle: "Frontend Engineer",
  url: siteUrl,
  image: `${siteUrl}/mukul-cutout.png`,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  worksFor: { "@type": "Organization", name: "Pioneer Alpha", url: "https://pioneeralpha.com" },
  alumniOf: "Dhaka International University",
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL"],
  sameAs: ["https://github.com/monaim3", "https://www.linkedin.com/in/monaimmukul/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
