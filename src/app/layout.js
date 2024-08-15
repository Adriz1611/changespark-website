import {
  Inika,
  Tauri,
  Poppins,
  Rubik,
  Playfair_Display,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Whatsapp } from "@/components/ui/whatsApp";
import "./globals.css";

const inika = Inika({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inika",
});
const tauri = Tauri({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tauri",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik",
});
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-playfair_display",
});

export const metadata = {
  title: "ChangeSpark",
  description: "new budding NGO about women empowerment and child education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inika.variable} ${tauri.variable} ${poppins.variable} ${playfair_display.variable}`}
      >
        <Whatsapp />
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
