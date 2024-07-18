import { Inter, Rampart_One, Inika } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const inika = Inika({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inika",
});
const rampart = Rampart_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rampartone",
});

export const metadata = {
  title: "ChangeSpark",
  description: "new budding NGO about women empowerment and child education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rampart.variable} ${inika.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
