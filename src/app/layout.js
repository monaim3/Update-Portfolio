import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rajdhani",
});


export const metadata = {
  title: "Monaim Mukul",
  description: "Personal Portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable}  antialiased`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
