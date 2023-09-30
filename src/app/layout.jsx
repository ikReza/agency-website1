import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata() {
  // SEO Data Fetch
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const JSON = await res.json();

  return {
    title: JSON[0].title,
    description: JSON[0].description,
    keywords: JSON[0].keywords,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppin.className} flex flex-col min-h-screen `}
      >
        <NextTopLoader color="#16A34A"/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
