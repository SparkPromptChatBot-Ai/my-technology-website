"use client";
import "./globals.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-[#f5f7fa] text-[#212121] flex flex-col min-h-screen">
        <Navbar />

        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, ease: "easeInOut" }}
          className="flex-1 flex flex-col"
        >
          {children}

          <Footer />
        </motion.main>
      </body>
    </html>
  );
}
