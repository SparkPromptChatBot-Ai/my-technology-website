"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center h-20 justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/tech-logo.png" // replace with your tech logo
              alt="TechNova Logo"
              width={160}
              height={60}
              className="
                transition-transform duration-300 group-hover:scale-105
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]
                group-hover:drop-shadow-[0_0_12px_#60a5fa]
              "
              priority
            />
          </Link>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-8 font-medium text-lg">
          {[
            { name: "Products", href: "/products" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href ? "text-[#60a5fa]" : "text-white"
                } hover:text-[#60a5fa]`}
              >
                {link.name}
              </Link>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#60a5fa] transform origin-left transition-transform duration-300 ${
                  pathname === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } w-full`}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
