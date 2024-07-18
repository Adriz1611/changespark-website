import { Inika, Tauri } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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


export const metadata = {
  title: "ChangeSpark",
  description: "new budding NGO about women empowerment and child education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inika.variable} ${tauri.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
