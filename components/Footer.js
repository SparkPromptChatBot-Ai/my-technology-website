// components/Footer.js
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Company info */}
        <div>
          <h2 className="text-2xl font-bold">TechNova</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Innovative solutions • Modern design • Reliable technology services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/products" className="hover:text-[#60a5fa]">Products</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#60a5fa]">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#60a5fa]">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-[#60a5fa]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#60a5fa]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#60a5fa]"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-12 border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TechNova. All rights reserved.
      </div>
    </footer>
  );
}
