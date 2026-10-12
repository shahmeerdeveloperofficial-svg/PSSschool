import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import LenisSmooth from "../components/LenisSmooth";
import Footer from "../components/Footer";

// Load Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "The Pakistan School of Science | Knowledge is Power",
  description:
    "The Pakistan School of Science (PSS) delivers premier STEM education, Pre-Medical & Pre-Engineering preparation, and character development under the motto 'Knowledge is Power'.",
  icons: {
    icon: "/psslogo.png",
    shortcut: "/psslogo.png",
    apple: "/psslogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <LenisSmooth />
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
